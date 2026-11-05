"use server";

import { siteConfig } from "@/lib/site";
import {
  budgetOptions,
  projectTypeOptions,
  timelineOptions,
  type ContactField,
  type ContactFormState,
} from "./form-options";

const MAX_LENGTH: Record<ContactField, number> = {
  name: 120,
  email: 200,
  phone: 20,
  projectType: 60,
  budget: 40,
  timeline: 40,
  reference: 300,
  message: 5000,
};

const MIN_MESSAGE_LENGTH = 20;
// Humans need a few seconds to fill the form; instant submissions are bots.
const MIN_FILL_TIME_MS = 3000;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const read = (formData: FormData, name: ContactField) =>
  String(formData.get(name) ?? "").trim().slice(0, MAX_LENGTH[name]);

function validate(values: Record<ContactField, string>) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.length < 2) errors.name = "Please enter your name or company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (!/^\+?[\d\s()-]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Please enter a valid mobile number, including the country code if outside India.";
  }
  if (!(projectTypeOptions as readonly string[]).includes(values.projectType)) {
    errors.projectType = "Please choose a project type.";
  }
  if (!(budgetOptions as readonly string[]).includes(values.budget)) {
    errors.budget = "Please choose a budget range.";
  }
  if (values.timeline && !(timelineOptions as readonly string[]).includes(values.timeline)) {
    errors.timeline = "Please choose a timeline from the list.";
  }
  if (values.reference && !/^https?:\/\/\S+\.\S+/.test(values.reference)) {
    errors.reference = "Please enter a full link starting with https://";
  }
  if (values.message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please share a little more detail (at least ${MIN_MESSAGE_LENGTH} characters).`;
  }

  return errors;
}

// The sender address must be on a domain verified in Resend, so the visitor's
// email can't be the From address. Their name is shown as the sender's display
// name and replies go straight to them via Reply-To.
function senderFor(name: string) {
  const configured = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const address = configured.match(/<([^>]+)>/)?.[1] ?? configured;
  const displayName = name.replace(/["<>\r\n]/g, "").slice(0, 60);
  return `"${displayName} via ${new URL(siteConfig.siteUrl).host}" <${address}>`;
}

function buildEmail(values: Record<ContactField, string>) {
  const rows: Array<[string, string]> = [
    ["Name / Company", values.name],
    ["Email", values.email],
    ["Mobile", values.phone],
    ["Project type", values.projectType],
    ["Budget", values.budget],
    ["Timeline", values.timeline || "Not specified"],
    ["Reference link", values.reference || "None"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:640px">
      <h2 style="margin:0 0 16px">New project enquiry</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #ddd;background:#fff8c4;font-weight:bold;width:160px">${label}</td>
            <td style="padding:8px 12px;border:1px solid #ddd">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">About the project</h3>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(values.message)}</p>
      <p style="margin-top:24px;font-size:12px;color:#666">
        Sent from the contact form on ${escapeHtml(siteConfig.siteUrl)}. Reply to this email to answer ${escapeHtml(values.name)} directly.
      </p>
    </div>`;

  const text = [
    "New project enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "About the project:",
    values.message,
  ].join("\n");

  return { html, text };
}

export async function sendEnquiry(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {} as Record<ContactField, string>;
  for (const field of Object.keys(MAX_LENGTH) as ContactField[]) {
    values[field] = read(formData, field);
  }

  const startedAt = Number(formData.get("startedAt"));
  const isBot =
    String(formData.get("company_website") ?? "") !== "" ||
    (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_TIME_MS);
  if (isBot) {
    // Pretend success so bots don't learn to adapt.
    return { status: "success", message: "Thanks! Your message has been sent.", submittedAt: Date.now() };
  }

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
      submittedAt: Date.now(),
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return {
      status: "error",
      message: `The form is temporarily unavailable. Please email ${siteConfig.author.email} instead.`,
      values,
      submittedAt: Date.now(),
    };
  }

  const { html, text } = buildEmail(values);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderFor(values.name),
        to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.author.email],
        reply_to: `${values.name.replace(/["<>\r\n,]/g, "")} <${values.email}>`,
        subject: `New enquiry: ${values.projectType} · ${values.budget} · ${values.name}`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("Contact form: Resend responded with", response.status, await response.text());
      throw new Error("Resend request failed");
    }
  } catch (error) {
    console.error("Contact form: sending failed", error);
    return {
      status: "error",
      message: `Something went wrong while sending. Please try again or email ${siteConfig.author.email}.`,
      values,
      submittedAt: Date.now(),
    };
  }

  return {
    status: "success",
    message: `Thanks, ${values.name}! Your enquiry has been sent. I'll reply to ${values.email} with next steps.`,
    submittedAt: Date.now(),
  };
}

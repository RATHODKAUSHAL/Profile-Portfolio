// Shared by the contact form (client) and its Server Action, so the dropdowns
// and the server-side validation can never disagree.

export const projectTypeOptions = [
  "Website / landing page",
  "Web application",
  "Mobile app (Android / iOS)",
  "Web + mobile app",
  "API / backend",
  "Redesign or improvements",
  "Other",
] as const;

export const budgetOptions = [
  "Under ₹10k",
  "₹10k – ₹20k",
  "₹20k – ₹50k",
  "₹50k – ₹1L",
  "More than ₹1L",
  "Let's discuss",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Flexible",
] as const;

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "projectType"
  | "budget"
  | "timeline"
  | "reference"
  | "message";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
  submittedAt?: number;
};

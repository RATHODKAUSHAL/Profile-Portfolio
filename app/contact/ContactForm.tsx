"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { CheckCircle2, Send } from "lucide-react";
import { sendEnquiry } from "./actions";
import {
  budgetOptions,
  projectTypeOptions,
  timelineOptions,
  type ContactField,
  type ContactFormState,
} from "./form-options";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEnquiry, initialState);
  const [showForm, setShowForm] = useState(true);
  const [lastSuccessAt, setLastSuccessAt] = useState<number | undefined>();

  if (state.status === "success" && state.submittedAt !== lastSuccessAt) {
    // Adjust state during render (no effect): a new success hides the form.
    setLastSuccessAt(state.submittedAt);
    setShowForm(false);
  }

  if (!showForm) {
    return (
      <div className="flex flex-col items-start gap-4 py-6" role="status" aria-live="polite">
        <CheckCircle2 className="h-10 w-10" strokeWidth={2.5} aria-hidden="true" />
        <h2 className="display-font text-2xl sm:text-3xl">Message sent</h2>
        <p className="max-w-xl text-base leading-7 text-black/75">{state.message}</p>
        <button type="button" className="soft-btn" onClick={() => setShowForm(true)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  // Remount after each response so inputs pick up the returned values as defaults
  // (React resets uncontrolled fields when a form action completes).
  return (
    <ContactFields
      key={state.submittedAt ?? 0}
      state={state.status === "success" ? initialState : state}
      formAction={formAction}
      isPending={isPending}
    />
  );
}

type FieldsProps = {
  state: ContactFormState;
  formAction: (formData: FormData) => void;
  isPending: boolean;
};

function ContactFields({ state, formAction, isPending }: FieldsProps) {
  const startedAtRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
    // Move focus to the first invalid field after a failed submission.
    formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
  }, []);

  const fieldProps = (name: ContactField) => ({
    id: `contact-${name}`,
    name,
    defaultValue: values[name] ?? "",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: `soft-input ${errors[name] ? "border-[#b42318]" : ""}`,
  });

  return (
    <form
      ref={formRef}
      action={formAction}
      className="grid grid-cols-12 gap-x-4 gap-y-5"
      aria-label="Project enquiry form"
    >
      <Field name="name" label="Name / Company name" required error={errors.name} className="sm:col-span-6">
        <input
          {...fieldProps("name")}
          type="text"
          autoComplete="name"
          placeholder="Jane Doe or Acme Logistics"
          maxLength={120}
          minLength={2}
          required
        />
      </Field>

      <Field name="email" label="Email" required error={errors.email} className="sm:col-span-6">
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          maxLength={200}
          required
        />
      </Field>

      <Field
        name="phone"
        label="Mobile number"
        required
        error={errors.phone}
        hint="Include the country code if you're outside India."
        className="sm:col-span-6"
      >
        <input
          {...fieldProps("phone")}
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 98765 43210"
          pattern="\+?[0-9\s()\-]{7,20}"
          maxLength={20}
          required
        />
      </Field>

      <Field name="projectType" label="Project type" required error={errors.projectType} className="sm:col-span-6">
        <SelectInput {...fieldProps("projectType")} options={projectTypeOptions} placeholder="Choose a project type" required />
      </Field>

      <Field name="budget" label="Budget" required error={errors.budget} className="sm:col-span-6">
        <SelectInput {...fieldProps("budget")} options={budgetOptions} placeholder="Choose a budget range" required />
      </Field>

      <Field name="timeline" label="Timeline" error={errors.timeline} className="sm:col-span-6">
        <SelectInput {...fieldProps("timeline")} options={timelineOptions} placeholder="When do you need it?" />
      </Field>

      <Field
        name="reference"
        label="Existing website or reference link"
        error={errors.reference}
        hint="Your current site, a design file or an app you like."
      >
        <input
          {...fieldProps("reference")}
          type="url"
          inputMode="url"
          placeholder="https://"
          maxLength={300}
        />
      </Field>

      <Field
        name="message"
        label="Tell me about your project"
        required
        error={errors.message}
        hint="Goals, main features, who will use it, and anything already built."
      >
        <textarea
          {...fieldProps("message")}
          className={`${fieldProps("message").className} min-h-[160px] resize-y`}
          placeholder="We need a mobile app where transporters can…"
          minLength={20}
          maxLength={5000}
          required
        />
      </Field>

      {/* Bot traps: a field people never see, and the time the form was opened. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <input ref={startedAtRef} name="startedAt" type="hidden" />
      </div>

      <div className="col-span-12 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto"
          type="submit"
          disabled={isPending}
          aria-disabled={isPending}
        >
          {isPending ? "Sending…" : "Send message"}
          {!isPending && <Send className="h-4 w-4" aria-hidden="true" />}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm font-semibold ${state.status === "error" ? "text-[#b42318]" : "text-black/60"}`}
        >
          {state.status === "error" ? state.message : "Fields marked * are required."}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  name: ContactField;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

function Field({ name, label, required, error, hint, className = "", children }: FieldProps) {
  return (
    <div className={`col-span-12 flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={`contact-${name}`} className="text-sm font-semibold">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-black/50"> (optional)</span>}
      </label>
      {children}
      {error ? (
        <p id={`contact-${name}-error`} className="text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-black/60">{hint}</p>
      ) : null}
    </div>
  );
}

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: readonly string[];
  placeholder: string;
};

function SelectInput({ options, placeholder, className, ...props }: SelectInputProps) {
  return (
    <select {...props} className={`${className} cursor-pointer appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
      <option value="" disabled={props.required}>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

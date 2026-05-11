"use client";

import { useState, type FormEvent } from "react";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "relationship" | "message", string>>;

const RELATIONSHIP_OPTIONS = [
  "Adult child",
  "Spouse / Partner",
  "Sibling",
  "Other family member",
  "Friend / Neighbor",
  "Healthcare professional",
  "Myself",
  "Other",
];

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validatePhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const relationship = String(data.get("relationship") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: FieldErrors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!validatePhone(phone)) next.phone = "Please enter a valid phone number.";
    if (!validateEmail(email)) next.email = "Please enter a valid email address.";
    if (!relationship) next.relationship = "Please choose a relationship.";
    if (message.length < 10) next.message = "A short message helps us help you (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, relationship, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as { ok: boolean; message?: string };
      if (!json.ok) throw new Error(json.message ?? "Submission failed");
      setStatus("ok");
      setServerMsg(json.message ?? "Thank you — we will be in touch within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setServerMsg(
        "We couldn't send your message just now. Please call us at 860.930.1305 and we'll help you right away."
      );
    }
  }

  const fieldClass = (key: keyof FieldErrors) =>
    `w-full rounded-[12px] border bg-cream px-4 py-3 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold/50 transition ${
      errors[key] ? "border-heart" : "border-charcoal/15 hover:border-charcoal/30"
    }`;

  const labelClass = "block text-sm font-medium text-charcoal";

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={`mt-2 ${fieldClass("name")}`}
            placeholder="e.g. Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-heart">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={`mt-2 ${fieldClass("phone")}`}
            placeholder="(860) 930-1305"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-heart">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`mt-2 ${fieldClass("email")}`}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-heart">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="relationship" className={labelClass}>
          Relationship to prospective resident
        </label>
        <select
          id="relationship"
          name="relationship"
          required
          defaultValue=""
          className={`mt-2 appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-12 ${fieldClass("relationship")}`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%230E0E10' stroke-width='1.5' stroke-linecap='round'><path d='M1 1.5l5 5 5-5'/></svg>\")",
          }}
          aria-invalid={!!errors.relationship}
          aria-describedby={errors.relationship ? "relationship-error" : undefined}
        >
          <option value="" disabled>
            Please choose…
          </option>
          {RELATIONSHIP_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.relationship && (
          <p id="relationship-error" className="mt-1 text-xs text-heart">
            {errors.relationship}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 ${fieldClass("message")}`}
          placeholder="Tell us a little about your loved one and what you're looking for…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-heart">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          {status !== "sending" && (
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          )}
        </button>
        <p className="text-xs text-muted">
          We typically reply within one business day.
        </p>
      </div>

      {status === "ok" && (
        <div
          role="status"
          className="rounded-[12px] border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-charcoal"
        >
          {serverMsg}
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-[12px] border border-heart/40 bg-heart/10 px-4 py-3 text-sm text-charcoal"
        >
          {serverMsg}
        </div>
      )}
    </form>
  );
}

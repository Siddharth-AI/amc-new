"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, TextInput, TextArea } from "@/components/forms/field";

type Status = "idle" | "submitting" | "success" | "error";

const empty = { fullName: "", email: "", phone: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary-700">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-2xl text-navy">Message sent</h3>
        <p className="max-w-sm text-text-muted">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="c-name" required>
          <TextInput id="c-name" required value={form.fullName} onChange={update("fullName")} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="c-email" required>
          <TextInput id="c-email" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
        </Field>
        <Field label="Phone" htmlFor="c-phone" required>
          <TextInput id="c-phone" required value={form.phone} onChange={update("phone")} placeholder="+971 ..." />
        </Field>
        <Field label="Subject" htmlFor="c-subject" required>
          <TextInput id="c-subject" required value={form.subject} onChange={update("subject")} placeholder="How can we help?" />
        </Field>
      </div>
      <Field label="Message" htmlFor="c-message" required>
        <TextArea id="c-message" required value={form.message} onChange={update("message")} placeholder="Tell us a little about your requirement..." />
      </Field>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" variant="primary" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </Button>
    </form>
  );
}

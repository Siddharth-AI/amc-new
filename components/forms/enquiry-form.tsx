"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, TextInput, TextArea } from "@/components/forms/field";

type Status = "idle" | "submitting" | "success" | "error";

interface Option {
  value: string;
  label: string;
}

export function EnquiryForm({
  products,
  defaultProduct = "",
}: {
  products: Option[];
  defaultProduct?: string;
}) {
  const empty = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    product: defaultProduct,
    message: "",
  };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (k: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setForm({ ...empty, product: defaultProduct });
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
        <h3 className="text-2xl text-navy">Enquiry received</h3>
        <p className="max-w-sm text-text-muted">
          Thanks! Our team will review your requirements and get back to you with the right solution.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>Submit another enquiry</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="e-name" required>
          <TextInput id="e-name" required value={form.fullName} onChange={update("fullName")} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="e-email" required>
          <TextInput id="e-email" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
        </Field>
        <Field label="Phone" htmlFor="e-phone" required>
          <TextInput id="e-phone" required value={form.phone} onChange={update("phone")} placeholder="+971 ..." />
        </Field>
        <Field label="Company" htmlFor="e-company">
          <TextInput id="e-company" value={form.companyName} onChange={update("companyName")} placeholder="Company name (optional)" />
        </Field>
      </div>

      <Field label="Solution of interest" htmlFor="e-product">
        <select
          id="e-product"
          value={form.product}
          onChange={update("product")}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="">Not sure / general enquiry</option>
          {products.map((p) => (
            <option key={p.value} value={p.label}>{p.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Your requirements" htmlFor="e-message" required>
        <TextArea id="e-message" required value={form.message} onChange={update("message")} placeholder="Tell us about your business and what you're looking for..." />
      </Field>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" variant="primary" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <>Request a Quote <Send className="h-4 w-4" /></>
        )}
      </Button>
    </form>
  );
}

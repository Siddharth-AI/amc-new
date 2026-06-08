import nodemailer from "nodemailer";

/**
 * Gmail SMTP transport. Configure in env:
 *   GMAIL_USER           = your.address@gmail.com
 *   GMAIL_APP_PASSWORD   = 16-char Google App Password (not your login password)
 *   MAIL_TO              = where enquiries should land (defaults to GMAIL_USER)
 */
export function getTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("Email is not configured (GMAIL_USER / GMAIL_APP_PASSWORD missing).");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export const MAIL_TO = process.env.MAIL_TO || process.env.GMAIL_USER || "";

export async function sendMail(opts: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const transport = getTransport();
  const from = process.env.GMAIL_USER;
  await transport.sendMail({
    from: `"AMC Systems Website" <${from}>`,
    to: MAIL_TO,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}

/** Build a simple, readable HTML table from label/value rows. */
export function rowsToHtml(title: string, rows: { label: string; value: string }[]) {
  const body = rows
    .filter((r) => r.value)
    .map(
      (r) =>
        `<tr><td style="padding:8px 14px;background:#f3f1ec;font-weight:600;color:#1e3358;white-space:nowrap;vertical-align:top">${escapeHtml(
          r.label
        )}</td><td style="padding:8px 14px;color:#14181c">${escapeHtml(r.value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto">
    <h2 style="color:#1e3358;border-bottom:3px solid #16a5a3;padding-bottom:8px">${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse;width:100%;border:1px solid #e8e5de">${body}</table>
    <p style="color:#5a6472;font-size:12px;margin-top:16px">Sent from the AMC Systems website.</p>
  </div>`;
}

export function rowsToText(title: string, rows: { label: string; value: string }[]) {
  return (
    `${title}\n\n` +
    rows.filter((r) => r.value).map((r) => `${r.label}: ${r.value}`).join("\n")
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

import nodemailer from "nodemailer";

/**
 * SMTP transport (HostGator). Configure in env:
 *   SMTP_HOST   = mail server host (e.g. gator4185.hostgator.com)
 *   SMTP_PORT   = 587 (STARTTLS) or 465 (SSL)
 *   SMTP_USER   = mailbox address, also used as "from"
 *   SMTP_PASS   = mailbox password
 *   MAIL_TO     = where enquiries should land (defaults to SMTP_USER)
 */
export function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("Email is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS missing).");
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export const MAIL_TO = process.env.MAIL_TO || process.env.SMTP_USER || "";

export async function sendMail(opts: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const transport = getTransport();
  const from = process.env.SMTP_USER;
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

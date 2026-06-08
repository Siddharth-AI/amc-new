import { z } from "zod";
import { sendMail, rowsToHtml, rowsToText } from "@/lib/mailer";

export const runtime = "nodejs";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(5, "Please enter your phone").max(40),
  companyName: z.string().trim().max(160).optional().or(z.literal("")),
  product: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please tell us your requirements").max(4000),
});

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return Response.json(
      { success: false, error: parsed.error.issues[0]?.message || "Invalid input." },
      { status: 400 }
    );
  }

  const { fullName, email, phone, companyName, product, message } = parsed.data;
  const rows = [
    { label: "Name", value: fullName },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Company", value: companyName || "" },
    { label: "Product of interest", value: product || "" },
    { label: "Requirements", value: message },
  ];
  const title = `New quote enquiry${product ? ` — ${product}` : ""}`;

  try {
    await sendMail({
      subject: `[Enquiry]${product ? ` ${product}` : ""} — ${fullName}`,
      html: rowsToHtml(title, rows),
      text: rowsToText(title, rows),
      replyTo: email,
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Enquiry mail failed:", err);
    return Response.json(
      { success: false, error: "Could not send your enquiry right now. Please try again later." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import type { ContactResponse } from "@/types/portfolio";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(3000),
  consent: z.boolean().refine((value) => value, { message: "Consent is required." }),
  locale: z.enum(["en", "pt-br"]),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ContactResponse>(
        { ok: false, message: "Invalid form payload." },
        { status: 400 }
      );
    }

    if (parsed.data.honeypot) {
      return NextResponse.json<ContactResponse>({ ok: true, message: "Message sent successfully." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json<ContactResponse>(
        {
          ok: false,
          message:
            parsed.data.locale === "pt-br"
              ? "Contato temporariamente indisponível."
              : "Contact is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio contact | ${parsed.data.name}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Locale: ${parsed.data.locale}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    return NextResponse.json<ContactResponse>({
      ok: true,
      message:
        parsed.data.locale === "pt-br"
          ? "Mensagem enviada com sucesso."
          : "Message sent successfully.",
    });
  } catch {
    return NextResponse.json<ContactResponse>(
      { ok: false, message: "Unexpected error while sending your message." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

// STUB: Echoes a success response. Wire to email/CRM (Resend, SendGrid, HubSpot,
// or a simple SMTP transport) before launch. The form posts JSON to this route.
//
// Required env when implementing:
//   CONTACT_INBOX=hello@caringhearts.example     // where leads go
//   RESEND_API_KEY=...                           // or your provider key
//
// Response shape kept stable so the client can rely on `{ ok, message }`.

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<{
      name: string;
      phone: string;
      email: string;
      relationship: string;
      message: string;
    }>;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Log to server console so submissions are visible in dev / Vercel logs
    // until an email provider is wired up.
    console.log("[contact] new lead", { name, phone, email, relationship: body.relationship });

    return NextResponse.json({
      ok: true,
      message: `Thank you, ${name.split(" ")[0]} — we'll be in touch within one business day.`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not process your message." },
      { status: 500 }
    );
  }
}

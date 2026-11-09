import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Please check the form and try again.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // The practice's front-desk workflow receives the request here. In production,
  // connect this handler to the practice email or scheduling provider.
  console.info("[contact] new request", {
    name: result.data.name,
    email: result.data.email,
    phone: result.data.phone,
    interest: result.data.interest,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message:
      "Thank you — your request has been received. Our team will follow up during office hours.",
  });
}

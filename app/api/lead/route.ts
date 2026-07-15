import { NextResponse } from "next/server";

type LeadRequest = {
  name?: string;
  phone?: string;
  service?: string;
};

const services = new Set([
  "Company Incorporation",
  "GST Filing",
  "ITR Filing",
  "Trademark",
  "Annual Compliance",
]);

export async function GET() {
  return NextResponse.json({
    company: "Taxxford",
    services: Array.from(services),
    responseTime: "under 2 business hours",
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json")
    ? ((await request.json().catch(() => ({}))) as LeadRequest)
    : Object.fromEntries(await request.formData()) as LeadRequest;

  if (!body.name || !body.phone || !body.service) {
    return NextResponse.json(
      { ok: false, message: "Name, phone, and service are required." },
      { status: 400 }
    );
  }

  if (!services.has(body.service)) {
    return NextResponse.json(
      { ok: false, message: "Please select a supported Taxxford service." },
      { status: 422 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "A Taxxford filing advisor will contact you shortly.",
    lead: {
      name: body.name.trim(),
      phone: body.phone.trim(),
      service: body.service,
      createdAt: new Date().toISOString(),
    },
  });
}

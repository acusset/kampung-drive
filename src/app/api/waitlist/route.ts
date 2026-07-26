import { NextResponse } from "next/server";
import { addWaitlistEntry, getWaitlistSummary } from "@/lib/waitlistStore";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function titleCase(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

export async function GET() {
  const summary = await getWaitlistSummary();
  return NextResponse.json(summary);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const from = typeof body?.from === "string" ? titleCase(body.from) : "";
  const to = typeof body?.to === "string" ? titleCase(body.to) : "";

  if (!from || !to) {
    return NextResponse.json({ error: "Fill in where you commute from and to." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const summary = await addWaitlistEntry({ email, from, to });
  return NextResponse.json(summary);
}

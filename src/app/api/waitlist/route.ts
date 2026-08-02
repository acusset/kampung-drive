import { NextResponse } from "next/server";
import type { WaitlistSummary } from "@/components/WaitlistContext";

const PLACEHOLDER: WaitlistSummary = {
  count: 42,
  trending: [
    { from: "Clementi", to: "One-North", count: 12 },
    { from: "Jurong East", to: "Raffles Place", count: 9 },
    { from: "Tampines", to: "Marina Bay", count: 7 },
  ],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function titleCase(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

export async function GET() {
  return NextResponse.json(PLACEHOLDER);
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

  return NextResponse.json({ ...PLACEHOLDER, count: PLACEHOLDER.count + 1 });
}

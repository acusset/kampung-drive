import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isAuthorized(request: NextRequest): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) return false;

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf-8");
  const suppliedPassword = decoded.slice(decoded.indexOf(":") + 1);

  const suppliedBuffer = Buffer.from(suppliedPassword);
  const expectedBuffer = Buffer.from(expectedPassword);
  if (suppliedBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function proxy(request: NextRequest) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}

// The matcher must be static (no variables) so Next.js can analyze it at build time.
// Widen this list as more internal/admin routes are added (e.g. "/admin").
export const config = {
  matcher: ["/database"],
};

"use server";

import { track } from '@vercel/analytics/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SignupState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function signupAction(
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const email = String(formData.get("email") ?? "").trim();
  const role = formData.get("role") === "rider" ? "rider" : "driver";

  if (!email) {
    track("waitlist_signup_error", { role, reason: "empty" });
    return { status: "error", message: "Enter your email address." };
  }

  if (!EMAIL_RE.test(email)) {
    track("waitlist_signup_error", { role, reason: "invalid_format" });
    return { status: "error", message: "Enter a valid email address." };
  }

  track("waitlist_signup", {
    role,
  });
  
  // Database isn't wired up yet — log for now, persist once it is.
  console.log(`[waitlist] ${role} signup: ${email}`);

  return {
    status: "success",
    message: "You're on the list. We'll email you when your estate goes live.",
  };
}

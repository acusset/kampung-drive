"use server";

import { track } from "@vercel/analytics/server";
import { z } from "zod";

const signupSchema = z.object({
  email: z
    .email({ pattern: z.regexes.html5Email, message: "Enter a valid email address." })
    .trim()
    .min(1, "Enter a valid email address."),
  role: z
    .string()
    .nullable()
    .transform((value) => (value === "rider" ? "rider" : "driver")),
});

export type SignupState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function signupAction(
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const parsed = signupSchema.safeParse({
    email: formData.get("email"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    const email = String(formData.get("email") ?? "").trim();
    const role = formData.get("role") === "rider" ? "rider" : "driver";
    track("waitlist_signup_error", { role, reason: email ? "invalid_format" : "empty" });
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Enter a valid email address.",
    };
  }

  const { email, role } = parsed.data;

  track("waitlist_signup", { role });

  // Database isn't wired up yet — log for now, persist once it is.
  console.log(`[waitlist] ${role} signup: ${email}`);

  return {
    status: "success",
    message: "You're on the list. We'll email you when your estate goes live.",
  };
}

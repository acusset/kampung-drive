"use server";

import { track } from "@vercel/analytics/server";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { db } from "@/lib/db";
import { waitlistSignups } from "@/lib/db/schema";

const signupSchema = createInsertSchema(waitlistSignups, {
  email: z
    .email({
      pattern: z.regexes.html5Email,
      message: "Enter a valid email address.",
    })
    .trim()
    .min(1, "Enter a valid email address."),
  role: z
    .string()
    .nullable()
    .transform((value) => (value === "rider" ? "rider" : "driver")),
}).pick({ email: true, role: true });

export type SignupState = {
  status: "idle" | "success" | "error";
  message?: string;
};

async function insertSignup(data: z.infer<typeof signupSchema>) {
  return await db
    .insert(waitlistSignups)
    .values(data)
    .onConflictDoNothing()
    .returning({ id: waitlistSignups.id });
}

export async function signupAction(
  _previousState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const parsed = signupSchema.safeParse({
    email: formData.get("email"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    const email = String(formData.get("email") ?? "").trim();
    const role = formData.get("role") === "rider" ? "rider" : "driver";
    track("waitlist_signup_error", {
      role,
      reason: email ? "invalid_format" : "empty",
    });
    return {
      status: "error",
      message:
        parsed.error.issues[0]?.message ?? "Enter a valid email address.",
    };
  }

  const sanitizedFormData = parsed.data;

  let savedValue: { id: string }[];
  try {
    savedValue = await insertSignup(sanitizedFormData);
  } catch (error) {
    console.error("Error when saving in database:", error);
    track("waitlist_signup_error", {
      role: sanitizedFormData.role,
      reason: "db_error",
    });

    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }

  if (savedValue.length === 0) {
    track("waitlist_signup_error", {
      role: sanitizedFormData.role,
      reason: "duplicate_email",
    });
  } else {
    track("waitlist_signup", { role: sanitizedFormData.role });
  }

  return {
    status: "success",
    message: "You're on the list. We'll email you when your estate goes live.",
  };
}

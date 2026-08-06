"use client";

import { signupAction, type SignupState } from "@/app/_actions/signup";
import { cn } from "@/lib/utils";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { useActionState } from "react";
import { SubmitButton } from "./SubmitButton";

const initialState: SignupState = { status: "idle" };

export default function SignupForm({
  center = false,
  role = "driver",
}: {
  center?: boolean;
  role?: "driver" | "rider";
}) {
  const [state, formAction] = useActionState(signupAction, initialState);

  return (
      <form
        className={cn(
          "mt-8 flex max-w-[460px] flex-col gap-2.5",
          center && "mx-auto",
        )}
        action={formAction}
      >
        <input type="hidden" name="role" value={role} />
        <div className="flex flex-wrap gap-2.5 items-start">
          <TextField
            isRequired
            name="email"
            type="email"
            className="min-w-0 flex-1 basis-[240px]"
            isInvalid={state.status === "error"}
          >
            <Label htmlFor="email-input" className="sr-only">
              Email address
              </Label>
            <Input id="email-input" fullWidth placeholder="you@example.com" className="py-3.5" />
            <FieldError>
              {state.message}
            </FieldError>
          </TextField>
          <SubmitButton/>
        </div>
      </form>    
  );
}

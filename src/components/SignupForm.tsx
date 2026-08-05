"use client";

import { signupAction, type SignupState } from "@/app/_actions/signup";
import { cn } from "@/lib/utils";
import { Alert, Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useActionState, useEffect, useRef } from "react";
import { z } from "zod";

const initialState: SignupState = { status: "idle", message: "" };

export default function SignupForm({
  submitLabel,
  center = false,
  role = "driver",
}: {
  submitLabel: string;
  center?: boolean;
  role?: "driver" | "rider";
}) {
  const [state, formAction, pending] = useActionState(signupAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <>
      <form
        ref={formRef}
        className={cn("mt-8 flex max-w-[460px] flex-col gap-2.5", center && "mx-auto")}
        action={formAction}
      >
        <input type="hidden" name="role" value={role} />
        <div className="flex flex-wrap gap-2.5 items-start">
          <TextField
            isRequired
            className="min-w-0 flex-1 basis-[240px]"
            name="email"
            type="email"
            validate={(value) =>
              value.length === 0 || z.regexes.html5Email.test(value)
                ? null
                : "Enter a valid email address."
            }
          >
            <Label className="sr-only">Email address</Label>
            <Input fullWidth placeholder="you@example.com" className="py-3.5" />
            <FieldError />
          </TextField>
          <Button type="submit" isDisabled={pending} size="lg">
            {pending ? "Adding you…" : state.status === "success" ? "Added ✓" : submitLabel}
          </Button>
        </div>
      </form>
      <div className="mt-3 min-h-9">
        {state.status !== "idle" && (
          <Alert status={state.status === "success" ? "success" : "danger"}>
            <Alert.Content>
              <Alert.Description>{state.message}</Alert.Description>
            </Alert.Content>
          </Alert>
        )}
      </div>
    </>
  );
}

"use client";

import { useActionState, useEffect, useRef } from "react";
import { signupAction, type SignupState } from "@/app/actions";
import { Alert, Button, Input } from "@heroui/react";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-wrap gap-2.5">
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            className="min-w-0 flex-1 basis-[240px] py-3.5"
          />
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

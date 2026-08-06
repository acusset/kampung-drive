"use client";

import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isDisabled={pending} size="lg">
      {pending ? "Adding you…" : "Submit"}
    </Button>
  );
};

"use client";

import { Chip } from "@heroui/react";
import { useWaitlist } from "./WaitlistContext";

export default function WaitlistCount() {
  const { count } = useWaitlist();

  return (
    <Chip
      variant="soft"
      color="success"
      className="mt-6 gap-2 border border-success/25 py-1.5 font-mono text-xs"
    >
      <span className="font-bold text-accent">{count}</span> neighbours on the list so far
    </Chip>
  );
}

import type { ReactNode } from "react";
import { Chip } from "@heroui/react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Chip
      variant="soft"
      color="accent"
      className="mb-7 gap-2.5 border border-accent/30 py-1.5 font-mono text-xs tracking-wide"
    >
      <span className="size-1.5 shrink-0 rounded-full bg-accent motion-safe:animate-pulse" />
      {children}
    </Chip>
  );
}

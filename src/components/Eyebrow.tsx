import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="gap-2.5 border-primary/30 bg-primary/10 py-1.5 font-mono text-xs tracking-wide text-primary"
    >
      <span className="size-1.5 shrink-0 rounded-full bg-primary motion-safe:animate-pulse" />
      {children}
    </Badge>
  );
}

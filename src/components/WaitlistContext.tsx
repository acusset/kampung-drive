"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
export type WaitlistSummary = {
  count: number;
  trending: { from: string; to: string; count: number }[];
};

type WaitlistContextValue = WaitlistSummary & {
  applyUpdate: (next: WaitlistSummary) => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({
  initial,
  children,
}: {
  initial: WaitlistSummary;
  children: ReactNode;
}) {
  const [state, setState] = useState(initial);
  const applyUpdate = useCallback((next: WaitlistSummary) => setState(next), []);

  return (
    <WaitlistContext.Provider value={{ ...state, applyUpdate }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return ctx;
}

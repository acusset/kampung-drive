"use client";

import { useState, type FormEvent } from "react";
import { useWaitlist } from "./WaitlistContext";
import { Alert, Button, Input } from "@heroui/react";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function titleCase(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

type Status = "idle" | "submitting" | "success";

export default function SignupForm({
  submitLabel,
  center = false,
  role = "driver",
}: {
  submitLabel: string;
  center?: boolean;
  role?: "driver" | "rider";
}) {
  const { applyUpdate } = useWaitlist();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  const busy = status !== "idle";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanFrom = titleCase(from);
    const cleanTo = titleCase(to);
    const cleanEmail = email.trim();

    if (!cleanFrom || !cleanTo) {
      setMessage({ text: "Fill in where you commute from and to.", ok: false });
      return;
    }
    if (!EMAIL_RE.test(cleanEmail)) {
      setMessage({ text: "Enter a valid email address.", ok: false });
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, from: cleanFrom, to: cleanTo, role }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMessage({
          text: data?.error ?? "Couldn't save that just now — please try again.",
          ok: false,
        });
        setStatus("idle");
        return;
      }

      applyUpdate({ count: data.count, trending: data.trending });
      setMessage({ text: "You're on the list. We'll email you when your estate goes live.", ok: true });
      setFrom("");
      setTo("");
      setEmail("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setMessage({ text: "Couldn't save that just now — please try again.", ok: false });
      setStatus("idle");
    }
  }

  return (
    <>
      <form
        className={cn("mt-8 flex max-w-[460px] flex-col gap-2.5", center && "mx-auto")}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-2.5">
          <Input
            type="text"
            list="estates"
            placeholder="From: your estate"
            required
            aria-label="Your estate or condo"
            className="min-w-0 flex-1 basis-[130px] py-3.5"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <span className="flex flex-none items-center justify-center px-0.5 font-[family-name:var(--mono)] text-sm text-[color:var(--sage)]">
            &rarr;
          </span>
          <Input
            type="text"
            list="destinations"
            placeholder="To: your destination"
            required
            aria-label="Your destination"
            className="min-w-0 flex-1 basis-[130px] py-3.5"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Input
            type="email"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            className="min-w-0 flex-1 basis-[240px] py-3.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" isDisabled={busy} size="lg">
            {status === "submitting" ? "Adding you…" : status === "success" ? "Added ✓" : submitLabel}
          </Button>
        </div>
      </form>
      <div className="mt-3 min-h-9">
        {message && (
          <Alert status={message.ok ? "success" : "danger"}>
            <Alert.Content>
              <Alert.Description>{message.text}</Alert.Description>
            </Alert.Content>
          </Alert>
        )}
      </div>
    </>
  );
}

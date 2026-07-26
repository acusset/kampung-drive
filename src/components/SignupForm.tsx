"use client";

import { useState, type FormEvent } from "react";
import { useWaitlist } from "./WaitlistContext";

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
}: {
  submitLabel: string;
  center?: boolean;
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
        body: JSON.stringify({ email: cleanEmail, from: cleanFrom, to: cleanTo }),
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
        className="signup"
        style={center ? { margin: "32px auto 0", justifyContent: "center" } : undefined}
        onSubmit={handleSubmit}
      >
        <div className="signup-row">
          <input
            type="text"
            list="estates"
            placeholder="From: your estate"
            required
            aria-label="Your estate or condo"
            className="from-input"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <span className="route-arrow">&rarr;</span>
          <input
            type="text"
            list="destinations"
            placeholder="To: your destination"
            required
            aria-label="Your destination"
            className="to-input"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="signup-row">
          <input
            type="email"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={busy}>
            {status === "submitting" ? "Adding you…" : status === "success" ? "Added ✓" : submitLabel}
          </button>
        </div>
      </form>
      <div className={`form-msg${message ? (message.ok ? " ok" : " err") : ""}`} role="status" aria-live="polite">
        {message?.text}
      </div>
    </>
  );
}

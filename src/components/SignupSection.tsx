"use client";

import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import { useWaitlist } from "./WaitlistContext";
import { Chip } from "@heroui/react";

export default function SignupSection() {
  const { count } = useWaitlist();

  return (
    <section className="signup-section" id="signup">
      <div className="wrap signup-inner">
        <Eyebrow>EARLY ACCESS</Eyebrow>
        <h2>Be first through the gate.</h2>
        <p>
          We&rsquo;re building Kampung Ride estate by estate. Leave your email and we&rsquo;ll let you know the
          moment your block goes live.
        </p>

        <SignupForm submitLabel="Join the waitlist" center />

        <Chip
          variant="soft"
          color="success"
          className="mt-6 gap-2 border border-success/25 py-1.5 font-mono text-xs"
        >
          <span className="font-bold text-accent">{count}</span> neighbours on the list so far
        </Chip>
        <p className="micro mt-3.5">
          We&rsquo;ll only use your email to tell you when Kampung Ride reaches your estate &mdash; it&rsquo;s
          never shown to anyone.
        </p>
      </div>
    </section>
  );
}

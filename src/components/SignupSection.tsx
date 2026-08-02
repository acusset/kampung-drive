"use client";

import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import { useWaitlist } from "./WaitlistContext";
import { Card, Chip } from "@heroui/react";

export default function SignupSection() {
  const { count, trending } = useWaitlist();

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
          Your route joins our live demand map below, visible to everyone &mdash; your email itself stays
          private and isn&rsquo;t shown to anyone.
        </p>

        <Card className="mt-9 text-left">
          <Card.Header>
            <div className="font-[family-name:var(--mono)] text-xs tracking-wide text-[color:var(--sage)]">
              MOST REQUESTED ROUTES
            </div>
          </Card.Header>
          <Card.Content className="flex flex-col gap-2.5">
            {trending.length === 0 ? (
              <span className="text-[13px] text-muted">Be the first to register a route.</span>
            ) : (
              trending.map((route) => (
                <div key={`${route.from}->${route.to}`} className="flex items-center justify-between text-sm">
                  <span className="font-[family-name:var(--mono)] text-foreground">
                    {route.from} &rarr; {route.to}
                  </span>
                  <Chip variant="soft" color="accent" className="font-mono text-xs">
                    {route.count} {route.count === 1 ? "neighbour" : "neighbours"}
                  </Chip>
                </div>
              ))
            )}
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}

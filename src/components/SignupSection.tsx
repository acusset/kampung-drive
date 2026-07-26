"use client";

import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import { useWaitlist } from "./WaitlistContext";

export default function SignupSection() {
  const { count, trending } = useWaitlist();

  return (
    <section className="signup-section" id="signup">
      <div className="wrap signup-inner">
        <Eyebrow>EARLY ACCESS</Eyebrow>
        <h2>Be first through the gate.</h2>
        <p>
          We&rsquo;re building Chope estate by estate. Leave your email and we&rsquo;ll let you know the
          moment your block goes live.
        </p>

        <SignupForm submitLabel="Join the waitlist" center />

        <div className="count-pill">
          <span className="n">{count}</span> neighbours on the list so far
        </div>
        <p className="micro" style={{ marginTop: 14 }}>
          Your route joins our live demand map below, visible to everyone &mdash; your email itself stays
          private and isn&rsquo;t shown to anyone.
        </p>

        <div className="trending">
          <div className="trending-label">MOST REQUESTED ROUTES</div>
          <ul className="trending-list">
            {trending.length === 0 ? (
              <li className="trending-empty">Be the first to register a route.</li>
            ) : (
              trending.map((route) => (
                <li key={`${route.from}->${route.to}`}>
                  <span className="trending-route">
                    {route.from} &rarr; {route.to}
                  </span>
                  <span className="trending-count">
                    {route.count} {route.count === 1 ? "neighbour" : "neighbours"}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

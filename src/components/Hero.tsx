"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { track } from "@vercel/analytics";
import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import TransitDiagram from "./TransitDiagram";

type Role = "driver" | "rider";

const COPY: Record<Role, { h1: React.ReactNode; sub: React.ReactNode; cta: string }> = {
  driver: {
    h1: (
      <>
        You&rsquo;re already driving. <em>Make your neighbours pay for it.</em>
      </>
    ),
    sub: (
      <>
        Kampung Ride is how neighbours share the ride they&rsquo;re already making. Register your
        regular commute, and let people from your own estate tag along &mdash;{" "}
        <b>same block, same route, same time.</b>
      </>
    ),
    cta: "Get early access",
  },
  rider: {
    h1: (
      <>
        Grab charges surge. <em>Your neighbour doesn&rsquo;t.</em>
      </>
    ),
    sub: (
      <>
        Someone from your estate is already driving your exact route every week. Register your
        commute and we&rsquo;ll put you in that empty seat &mdash;{" "}
        <b>no surge, no strangers from across the island.</b>
      </>
    ),
    cta: "Find my neighbour",
  },
};

export default function Hero() {
  const [role, setRole] = useState<Role>("driver");
  const copy = COPY[role];

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Eyebrow>BLK 51 &rarr; Raffles Place &middot; MON / WED / FRI &middot; 08:15</Eyebrow>

          <ToggleButtonGroup
            selectionMode="single"
            disallowEmptySelection
            isDetached
            selectedKeys={new Set<Key>([role])}
            onSelectionChange={(keys) => {
              const [value] = [...keys];
              if (value) {
                setRole(value as Role);
                track("role_toggle", { role: value as Role });
              }
            }}
            className="mb-7 flex gap-1 rounded-full bg-surface-secondary p-1"
          >
            <ToggleButton id="driver">I drive</ToggleButton>
            <ToggleButton id="rider">I need a ride</ToggleButton>
          </ToggleButtonGroup>

          <h1>{copy.h1}</h1>
          <p className="sub">{copy.sub}</p>
          <SignupForm submitLabel={copy.cta} role={role} />
          <p className="micro">
            Free while we&rsquo;re building. We&rsquo;ll only email you when Kampung Ride reaches
            your estate.
          </p>
        </div>

        <TransitDiagram />
      </div>
    </section>
  );
}

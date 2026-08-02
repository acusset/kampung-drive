"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import TransitDiagram from "./TransitDiagram";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

          <ToggleGroup
            type="single"
            value={role}
            onValueChange={(value) => {
              if (value) setRole(value as Role);
            }}
            className="mb-7 gap-1 bg-muted p-1"
          >
            <ToggleGroupItem
              value="driver"
              className="rounded-md px-4.5 py-2 font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary"
            >
              I drive
            </ToggleGroupItem>
            <ToggleGroupItem
              value="rider"
              className="rounded-md px-4.5 py-2 font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary"
            >
              I need a ride
            </ToggleGroupItem>
          </ToggleGroup>

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

<<<<<<< HEAD
"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { track } from "@vercel/analytics";
=======
>>>>>>> 97215f8 (refactor: push client components down the tree)
import Eyebrow from "./Eyebrow";
import HeroSignup from "./HeroSignup";
import TransitDiagram from "./TransitDiagram";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Eyebrow>BLK 51 &rarr; Raffles Place &middot; MON / WED / FRI &middot; 08:15</Eyebrow>

<<<<<<< HEAD
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
=======
          <HeroSignup />
>>>>>>> 97215f8 (refactor: push client components down the tree)

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

import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { Card, Chip } from "@heroui/react";

const STEPS = [
  {
    tag: "STEP 01",
    title: "Log your regular run",
    body: "Your block, your destination, the days and time you actually drive. Takes less time than waiting for the lift.",
  },
  {
    tag: "STEP 02",
    title: "Meet your matches",
    body: "See neighbours on your exact route and schedule — no detours, no cold-calling strangers across the island.",
  },
  {
    tag: "STEP 03",
    title: "Split the ride",
    body: "Take turns driving, split fuel and ERP, or just tag along. You keep the car, they keep the seat.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-[1120px] px-8 max-[640px]:px-5">
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="font-[family-name:var(--serif)] text-[clamp(26px,3.2vw,38px)] font-bold tracking-[-0.01em] text-foreground">
            Three steps, no detours.
          </h2>
          <p className="mt-3.5 max-w-[560px] text-[17px] text-muted">
            Kampung Ride matches on the two things that actually matter: your estate, and your schedule.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-7 max-[820px]:grid-cols-1">
          {STEPS.map((step) => (
            <Reveal key={step.tag}>
              <Card className="h-full">
                <Card.Header>
                  <Chip
                    variant="soft"
                    color="accent"
                    className="mb-2 w-fit border border-accent/30 font-mono text-xs tracking-wide"
                  >
                    {step.tag}
                  </Chip>
                  <Card.Title className="font-[family-name:var(--serif)] text-xl">{step.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <p className="text-[15px] text-muted">{step.body}</p>
                </Card.Content>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="how">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2>Three steps, no detours.</h2>
          <p>Kampung Ride matches on the two things that actually matter: your estate, and your schedule.</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-7 max-[820px]:grid-cols-1">
          {STEPS.map((step) => (
            <Reveal key={step.tag}>
              <Card className="h-full">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="mb-2 w-fit border-primary/30 bg-primary/10 font-mono text-xs tracking-wide text-primary"
                  >
                    {step.tag}
                  </Badge>
                  <CardTitle className="font-[family-name:var(--serif)] text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] text-muted-foreground">{step.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

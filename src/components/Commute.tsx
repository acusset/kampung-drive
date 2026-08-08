import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { Avatar, Card, Chip } from "@heroui/react";

const DAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI"];

const NEIGHBOURS = [
  {
    initial: "R",
    avatarColor: "bg-[#F2A93B] text-[#412402]",
    name: "Ravi",
    route: "BLK 41 → RFP · Raffles Place",
    days: [true, false, true, false, true],
  },
  {
    initial: "M",
    avatarColor: "bg-[#E8664A] text-[#4A1B0C]",
    name: "Mei Ling",
    route: "BLK ABC → CBP · Changi Business Park",
    days: [false, true, false, true, false],
  },
  {
    initial: "J",
    avatarColor: "bg-[#8FB6A6] text-[#173404]",
    name: "Jun Wei",
    route: "The Interlace → TGP · Tanjong Pagar",
    days: [true, true, true, true, true],
  },
];

export default function Commute() {
  return (
    <section id="commute" className="bg-surface py-20">
      <div className="mx-auto max-w-[1120px] px-8 max-[640px]:px-5">
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>MEET YOUR COMMUTE</Eyebrow>
          <h2 className="font-[family-name:var(--serif)] text-[clamp(26px,3.2vw,38px)] font-bold tracking-[-0.01em] text-foreground">
            Your neighbours are already going your way.
          </h2>
          <p className="mt-3.5 max-w-[560px] text-[17px] text-muted">
            A few of the regular runs being registered near The Interlace this week.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
          {NEIGHBOURS.map((person) => (
            <Reveal key={person.name}>
              <Card className="h-full transition-transform hover:-translate-y-0.75">
                <Card.Header className="flex-row items-center gap-3">
                  <Avatar size="lg">
                    <Avatar.Fallback className={`font-[family-name:var(--serif)] font-bold ${person.avatarColor}`}>
                      {person.initial}
                    </Avatar.Fallback>
                  </Avatar>
                  <div>
                    <div className="text-[15px] font-bold text-foreground">{person.name}</div>
                    <div className="mt-0.5 font-[family-name:var(--mono)] text-xs text-[color:var(--sage)]">
                      {person.route}
                    </div>
                  </div>
                </Card.Header>
                <Card.Content className="flex flex-row flex-wrap gap-1.5">
                  {DAY_LABELS.map((label, i) => (
                    <Chip
                      key={label}
                      variant={person.days[i] ? "soft" : "secondary"}
                      color={person.days[i] ? "accent" : "default"}
                      className="font-mono text-[11px]"
                    >
                      {label}
                    </Chip>
                  ))}
                </Card.Content>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

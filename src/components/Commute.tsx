import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
    <section id="commute" className="commute">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>MEET YOUR COMMUTE</Eyebrow>
          <h2>Your neighbours are already going your way.</h2>
          <p>A few of the regular runs being registered near The Interlace this week.</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
          {NEIGHBOURS.map((person) => (
            <Reveal key={person.name}>
              <Card className="h-full transition-transform hover:-translate-y-0.75">
                <CardHeader className="flex-row items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback className={`font-[family-name:var(--serif)] font-bold ${person.avatarColor}`}>
                      {person.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[15px] font-bold text-foreground">{person.name}</div>
                    <div className="mt-0.5 font-[family-name:var(--mono)] text-xs text-[color:var(--sage)]">
                      {person.route}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  {DAY_LABELS.map((label, i) => (
                    <Badge
                      key={label}
                      variant={person.days[i] ? "default" : "secondary"}
                      className={
                        person.days[i]
                          ? "bg-primary/18 font-mono text-[11px] text-primary"
                          : "bg-white/6 font-mono text-[11px] text-muted-foreground"
                      }
                    >
                      {label}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

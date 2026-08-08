import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Is this a taxi or ride-hailing service?",
    a: "No. Kampung Ride only matches you with people already driving the route you need, on the days you need it — usually a neighbour, never a stranger from across the island.",
  },
  {
    q: "Do I need to already know my neighbours?",
    a: "No. That's the point. Kampung Ride surfaces the regular commutes happening in your own estate so you can meet the people making the same trip.",
  },
  {
    q: "Which estates are you starting with?",
    a: "We're launching with a handful of condos with heavy downtown commute traffic, then expanding estate by estate based on demand — which is exactly what the waitlist tells us.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-[1120px] px-8 max-[640px]:px-5">
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-[family-name:var(--serif)] text-[clamp(26px,3.2vw,38px)] font-bold tracking-[-0.01em] text-foreground">
            Before you ask.
          </h2>
        </Reveal>
        <div className="max-w-[680px]">
          {FAQS.map((item) => (
            <Reveal key={item.q} className="border-b border-border py-5.5">
              <h3 className="mb-2 text-[17px] font-bold text-foreground">{item.q}</h3>
              <p className="text-[15px] text-muted">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

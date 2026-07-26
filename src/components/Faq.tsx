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
    <section id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>FAQ</Eyebrow>
          <h2>Before you ask.</h2>
        </Reveal>
        <div style={{ maxWidth: 680 }}>
          {FAQS.map((item) => (
            <Reveal key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

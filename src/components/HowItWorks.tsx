import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

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
          <p>Chope matches on the two things that actually matter: your estate, and your schedule.</p>
        </Reveal>
        <div className="steps">
          {STEPS.map((step) => (
            <Reveal key={step.tag} className="step">
              <span className="tag">{step.tag}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

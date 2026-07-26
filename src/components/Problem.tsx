import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>THE 8:15 JAM</Eyebrow>
          <h2>Four cars, one carpark, one destination.</h2>
        </Reveal>
        <Reveal className="problem-body">
          Every weekday morning, a handful of cars pull out of the same condo carpark, merge onto the
          same expressway, and park within a few hundred metres of each other downtown &mdash;{" "}
          <b>each with an empty passenger seat.</b> The neighbours who could fill that seat rode the
          same lift down and never said a word. Chope just makes the introduction.
        </Reveal>
      </div>
    </section>
  );
}

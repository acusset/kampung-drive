import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1120px] px-8 max-[640px]:px-5">
        <Reveal className="mb-12 max-w-[640px]">
          <Eyebrow>THE 8:15 JAM</Eyebrow>
          <h2 className="font-[family-name:var(--serif)] text-[clamp(26px,3.2vw,38px)] font-bold tracking-[-0.01em] text-foreground">
            Four cars, one carpark, one destination.
          </h2>
        </Reveal>
        <Reveal className="max-w-[680px] text-lg text-muted">
          Every weekday morning, a handful of cars pull out of the same condo carpark, merge onto the
          same expressway, and park within a few hundred metres of each other downtown &mdash;{" "}
          <b className="text-foreground">each with empty passenger seats.</b> The neighbours who could fill
          that seat rode the same lift down and never said a word. Kampung Ride just makes the introduction.
        </Reveal>
      </div>
    </section>
  );
}

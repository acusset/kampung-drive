import Eyebrow from "./Eyebrow";
import HeroSignup from "./HeroSignup";
import TransitDiagram from "./TransitDiagram";

export default function Hero() {
  return (
    <section className="pt-22 pb-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[1.1fr_0.9fr] items-center gap-14 px-8 max-[900px]:grid-cols-1 max-[640px]:px-5">
        <div>
          <Eyebrow>BLK 51 &rarr; Raffles Place &middot; MON / WED / FRI &middot; 08:15</Eyebrow>

          <HeroSignup />

          <p className="mt-3 text-[13px] text-[color:var(--field-placeholder)]">
            Free while we&rsquo;re building. We&rsquo;ll only email you when Kampung Ride reaches
            your estate.
          </p>
        </div>

        <TransitDiagram />
      </div>
    </section>
  );
}

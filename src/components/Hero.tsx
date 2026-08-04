import Eyebrow from "./Eyebrow";
import HeroSignup from "./HeroSignup";
import TransitDiagram from "./TransitDiagram";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Eyebrow>BLK 51 &rarr; Raffles Place &middot; MON / WED / FRI &middot; 08:15</Eyebrow>

          <HeroSignup />

          <p className="micro">
            Free while we&rsquo;re building. We&rsquo;ll only email you when Kampung Ride reaches
            your estate.
          </p>
        </div>

        <TransitDiagram />
      </div>
    </section>
  );
}

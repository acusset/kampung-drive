import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import TransitDiagram from "./TransitDiagram";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Eyebrow>BLK 51 &rarr; Raffles Place &middot; MON / WED / FRI &middot; 08:15</Eyebrow>
          <h1>
            Someone from your block is <em>already</em> driving to town.
          </h1>
          <p className="sub">
            Kampung Ride is how neighbours share the ride they&rsquo;re already making. Register your regular
            commute, and let people from your own estate tag along &mdash;{" "}
            <b>same block, same route, same time.</b>
          </p>
          <SignupForm submitLabel="Get early access" />
          <p className="micro">Free while we&rsquo;re building. We&rsquo;ll only email you when Kampung Ride reaches your estate.</p>
        </div>

        <TransitDiagram />
      </div>
    </section>
  );
}

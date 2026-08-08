import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import WaitlistCount from "./WaitlistCount";

export default function SignupSection() {
  return (
    <section className="border-y border-border bg-surface-secondary py-20" id="signup">
      <div className="mx-auto max-w-[600px] px-8 text-center max-[640px]:px-5">
        <Eyebrow>EARLY ACCESS</Eyebrow>
        <h2 className="font-[family-name:var(--serif)] text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.01em] text-foreground">
          Be first through the gate.
        </h2>
        <p className="mt-3.5 text-[17px] text-muted">
          We&rsquo;re building Kampung Ride estate by estate. Leave your email and we&rsquo;ll let you know the
          moment your block goes live.
        </p>

        <SignupForm center />

        <WaitlistCount />
        <p className="mt-3.5 text-[13px] text-[color:var(--field-placeholder)]">
          We&rsquo;ll only use your email to tell you when Kampung Ride reaches your estate &mdash; it&rsquo;s
          never shown to anyone.
        </p>
      </div>
    </section>
  );
}

import Eyebrow from "./Eyebrow";
import SignupForm from "./SignupForm";
import WaitlistCount from "./WaitlistCount";

export default function SignupSection() {
  return (
    <section className="signup-section" id="signup">
      <div className="wrap signup-inner">
        <Eyebrow>EARLY ACCESS</Eyebrow>
        <h2>Be first through the gate.</h2>
        <p>
          We&rsquo;re building Kampung Ride estate by estate. Leave your email and we&rsquo;ll let you know the
          moment your block goes live.
        </p>

        <SignupForm submitLabel="Join the waitlist" center />

        <WaitlistCount />
        <p className="micro mt-3.5">
          We&rsquo;ll only use your email to tell you when Kampung Ride reaches your estate &mdash; it&rsquo;s
          never shown to anyone.
        </p>
      </div>
    </section>
  );
}

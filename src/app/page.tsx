import AutocompleteData from "@/components/AutocompleteData";
import Commute from "@/components/Commute";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Nav from "@/components/Nav";
import Problem from "@/components/Problem";
import SignupSection from "@/components/SignupSection";
import { WaitlistProvider } from "@/components/WaitlistContext";
import { getWaitlistSummary } from "@/lib/waitlistStore";

// The waitlist count/trending list change on every signup — never prerender this as static.
export const dynamic = "force-dynamic";

export default async function Home() {
  const summary = await getWaitlistSummary();

  return (
    <WaitlistProvider initial={summary}>
      <Nav />
      <main id="top">
        <Hero />
        <hr className="divider" />
        <Problem />
        <HowItWorks />
        <hr className="divider" />
        <Commute />
        <SignupSection />
        <Faq />
      </main>
      <Footer />
      <AutocompleteData />
    </WaitlistProvider>
  );
}

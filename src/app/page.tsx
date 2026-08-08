import Commute from "@/components/Commute";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Nav from "@/components/Nav";
import Problem from "@/components/Problem";
import SignupSection from "@/components/SignupSection";
import { WaitlistProvider, type WaitlistSummary } from "@/components/WaitlistContext";

const PLACEHOLDER_SUMMARY: WaitlistSummary = {
  count: 42,
};

export default async function Home() {
  const summary = PLACEHOLDER_SUMMARY;

  return (
    <WaitlistProvider initial={summary}>
      <Nav />
      <main id="top">
        <Hero />
        <hr className="h-px border-none bg-border" />
        <Problem />
        <HowItWorks />
        <hr className="h-px border-none bg-border" />
        <Commute />
        <SignupSection />
        <Faq />
      </main>
      <Footer />
    </WaitlistProvider>
  );
}

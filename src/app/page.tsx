import AutocompleteData from "@/components/AutocompleteData";
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
  trending: [
    { from: "Clementi", to: "One-North", count: 12 },
    { from: "Jurong East", to: "Raffles Place", count: 9 },
    { from: "Tampines", to: "Marina Bay", count: 7 },
  ],
};

export default async function Home() {
  const summary = PLACEHOLDER_SUMMARY;

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

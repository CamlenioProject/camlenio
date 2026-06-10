import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";

export const metadata = {
  title: "Smart Mobile Recharge Solution for Growing Businesses | Camlenio",
  description: "Camlenio is a trusted Fintech Software Development Company in Jaipur developed a secure and scalable Mobile Recharge Services for startups and enterprises.",
};
export default function MobileRechargePage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-50 to-gray-50 overflow-x-hidden selection:bg-orange-200 selection:text-orange-950">
      {/* Background cyber grid pattern matching site identity */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <main className="relative z-10">
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Trust />
        <CTA
          title="Partner with Camlenio for Smart Recharge Solutions"
          highlightedTitle="Smart Recharge Solutions"
          subtitle="Are you looking for a fintech software development company in Jaipur for mobile recharge services? Partner with us to develop secure, profitable fintech operations customized to your business aims. Contact us to transform your recharge business with creative technology solutions"
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

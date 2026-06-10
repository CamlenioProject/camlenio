import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";

export const metadata = {
  title: "Reseller Software Development Company in Jaipur | Camlenio",
  description: "Enterprise reseller software development company in Jaipur. We build custom B2B reseller portals, white label reseller software, dealer and distributor management panels.",
};

export default function ResellerSoftwarePage() {
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
          title="Grow Your Business with Advanced Reseller Software Solutions"
          highlightedTitle="Reseller Software Solutions"
          subtitle="Ready to build a powerful reseller platform for your business? Partner with us, the trusted reseller software development company in Jaipur. Launch scalable reseller solutions customized to your industry. Contact us today to discuss your reseller software requirements and grow your business digitally."
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

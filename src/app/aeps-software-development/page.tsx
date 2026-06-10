import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";

export const metadata = {
  title: "AEPS Software Development Company in Jaipur | Camlenio",
  description: "Enterprise AEPS Software Development Company in Jaipur. We deliver secure and high-performance Aadhaar Enabled Payment System software and APIs for fintech startups.",
};
export default function AEPSPage() {
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
          title="Build Your Secure AEPS Platform With Camlenio"
          highlightedTitle="Secure AEPS Platform"
          subtitle="Ready to launch your own AEPS Software? Partner with us, the trusted AEPS software development Company in Jaipur, and build strong fintech solutions that drive growth."
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

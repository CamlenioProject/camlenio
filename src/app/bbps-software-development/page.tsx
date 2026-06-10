import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";

export const metadata = {
  title: "BBPS Software Development Company in Jaipur | Camlenio",
  description: "Build a secure and scalable BBPS with Camlenio, a top BBPS Software Development Company in Jaipur, offering advanced Bharat Bill Payment System software solutions across India.",
};
export default function BBPSPage() {
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
          title="Launch Your BBPS Platform With Camlenio"
          highlightedTitle="BBPS Platform"
          subtitle="Looking for a trustworthy BBPS Software Development Company in Jaipur? Camlenio offers secure and customized Bharat Bill Payment System Software for fintech businesses across India. Contact us today to launch your BBPS Software platform and grow your digital payment business with confidence."
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

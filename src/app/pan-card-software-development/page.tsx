import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";

export const metadata = {
  title: "Reliable PAN Card Software Development Company in Jaipur | Camlenio",
  description: "Build and manage your digital services with a trusted PAN Card Software Development Company in Jaipur. Camlenio offers secure API-driven solutions for seamless PAN Services and BBPS integration.",
};
export default function PANCardPage() {
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
          title="Start Your PAN Software Project With Camlenio"
          highlightedTitle="PAN Software Project"
          subtitle="Upgrade your business with secure and scalable PAN and BBPS software solutions. Connect with us today to build a customized platform that drives growth and enhances digital service management."
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

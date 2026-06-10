import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Trust from "./components/Trust";
import CTA from "../components/cta";
// 
export const metadata = {
  title: "Restaurant Management Software Development Company in Jaipur | Camlenio",
  description: "Advanced restaurant management software development services in Jaipur. We build custom restaurant ERP, cloud POS systems, QR ordering, CRM, and food delivery apps.",
};

export default function RestaurantManagementPage() {
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
          title="Transform Your Restaurant Operations!"
          highlightedTitle="Restaurant Operations"
          subtitle="Looking for a reliable restaurant management software development company in Jaipur? Get in touch with us for creative restaurant software solutions that automate workflows and boost business growth."
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

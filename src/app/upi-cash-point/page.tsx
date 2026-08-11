import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyChoose from "./components/WhyChoose";
import CustomSolutions from "./components/CustomSolutions";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "UPI Cash Point Software Development Company in Jaipur | Camlenio",
  description:
    "Build scalable UPI Cash Point Software with Camlenio, a leading software development company in Jaipur & Delhi. Admin & agent management, real-time transaction processing, reports & centralized dashboard.",
};

export default function UPICashPointPage() {
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
        <Features />
        <WhyChoose />
        <CustomSolutions />
        <CTA
          title="Ready to Build Your UPI Cash Point Platform?"
          highlightedTitle="UPI Cash Point Platform"
          subtitle="Choose Camlenio for a secure, scalable, and easy-to-manage UPI Cash Point solution designed to help your fintech business grow. Contact us today to get started!"
          buttontext="Contact Sales"
        />
      </main>
    </div>
  );
}

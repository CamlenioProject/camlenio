import React from "react";
import Hero from "./components/Hero";
import SolutionsGrid from "./components/SolutionsGrid";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Robust & Secure Infrastructure",
  description: "Empowering businesses, financial institutions, and enterprises with robust, secure, and automated transaction infrastructure.",
  keywords: ["Enterprise Solutions", "B2B Settlements", "Healthcare Software", "Fee Collection", "Loan Recovery"],
};

export default function EnterpriseSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <SolutionsGrid />
      <WhyChoose />
      <CTA
        title="Ready to Transform Your Enterprise Infrastructure?"
        highlightedTitle="Enterprise Infrastructure"
        subtitle="Scale your operations with Camlenio's secure, automated, and high-performance solutions. Let's build something exceptional together."
        buttontext="Talk to our Experts"
      />
    </div>
  );
}

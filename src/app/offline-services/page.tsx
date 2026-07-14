import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Reliable Offline Services & Government Support | Camlenio",
  description: "Simplify your GST registration, ITR filing, MSME certificates, and government documentation tasks with Camlenio's expert offline services in India.",
};

export default function OfflineServicesPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <Intro />
      <Benefits />
      <Solutions />
      <WhyChoose />
      <CTA
        title={"Get Started Today!"}
        highlightedTitle={"Get Started Today!"}
        subtitle={
          "Partner with Camlenio for expert assistance with ITR filing, government documentation, and much more. Contact us today and experience secure professional offline services solutions customized to your needs."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}

"use client";
import Hero from "./components/hero";
import CRMIntroSection from "./components/CRMIntroSection";
import Features from "./components/feature";
import Process from "./components/process";
import IndustriesWeServe from "./components/industries-we-serve";
import CRMBenefitsWhyChoose from "./components/CRMBenefitsWhyChoose";
import CTA from "@/app/components/cta";

export default function CrmSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100  ">
      <Hero />
      <CRMIntroSection />
      <Features />
      <Process />
      <IndustriesWeServe />
      <CRMBenefitsWhyChoose />
      <CTA
        title={"Let’s Build Your CRM Today!"}
        highlightedTitle={"CRM"}
        subtitle={
          "Looking for a reliable custom CRM Software Company in Jaipur? Camlenio delivers powerful customized CRM solutions that help businesses improve sales performance and customer engagement."
        }
        buttontext={"Get a Free Quote"}
      />
    </div>
  );
}


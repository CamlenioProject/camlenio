"use client";
import Hero from "./components/hero";
import Features from "./components/feature";
import Process from "./components/process";
import IndustriesWeServe from "./components/industries-we-serve";
import WhyChooseUs from "./components/why-choos-us";
import CTA from "@/app/components/cta";

export default function CrmSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <Features />
      <Process />
      <IndustriesWeServe />
      <WhyChooseUs />
      <CTA
        title={"Get Started with a Reliable CRM Software Development Company"}
        highlightedTitle={"CRM Software Development"}
        subtitle={
          "Looking for a CRM development company that understands your business and builds solutions that scale?"
        }
        buttontext={"Schedule a Free Consultation"}
      />
    </div>
  );
}

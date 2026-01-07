"use client";

import Hero from "./components/hero";
import About from "./components/about-section";
import Services from "./components/OurServices";
import FAQSection from "./components/faq-section";
import Features from "./components/Features";
import Process from "./components/process";
import IndustriesWeServe from "./components/IndustriesWeServe";
import CTA from "@/app/components/cta";

export default function HrmsSoftware() {
  return (
    <div className="scroll-smooth bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <Services />
      <About />
      <Features />
      <Process />
      <IndustriesWeServe />
      <FAQSection />
      <CTA
        title={"Transform Your HR Operations Today"}
        highlightedTitle={"Transform"}
        subtitle={
          "Looking to automate and optimize your HR processes?.Contact Camlenio Software Pvt. Ltd. for a free HRMS consultation and demo."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
}

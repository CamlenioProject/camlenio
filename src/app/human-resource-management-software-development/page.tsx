"use client";

import Hero from "./components/hero";
import About from "./components/about-section";
import Services from "./components/OurServices";
import FAQSection from "./components/faq-section";
import Features from "./components/Features";
import Process from "./components/process";
import IndustriesWeServe from "./components/IndustriesWeServe";
import WhyTrustUs from "./components/why-trust-us";
import CTA from "@/app/components/cta";

export default function HrmsSoftware() {
  return (
    <div className="scroll-smooth bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100  ">
      <Hero />
      <Services />
      <About />
      <Features />
      <Process />
      <IndustriesWeServe />
      <WhyTrustUs />
      <FAQSection />
      <CTA
        title={"Transform Your HR Operations Today"}
        highlightedTitle={"Transform"}
        subtitle={
          "Looking for a professional HR Software development company Jaipur businesses recommend? Camlenio offers a powerful and customized HRMS software solution designed to simplify employee management and payroll processes. Contact us today!"
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
}

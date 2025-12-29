"use client";

import Hero from "../../../components/Hrms/hero";
import About from "../../../components/Hrms/about-section";
import Services from "../../../components/Hrms/OurServices";
import FAQSection from "../../../components/Hrms/faq-section";
import Features from "@/app/components/Hrms/Features";
import Process from "@/app/components/Hrms/process";
import IndustriesWeServe from "@/app/components/Hrms/IndustriesWeServe";
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

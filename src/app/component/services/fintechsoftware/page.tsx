"use client";
import Hero from "../../../components/fintechsoftware/hero";
import About from "@/app/components/fintechsoftware/about";
import Features from "@/app/components/fintechsoftware/features";
import BuildFintechSolution from "@/app/components/fintechsoftware/BuildFintechSolution";
import IndustriesWeServe from "@/app/components/fintechsoftware/industries-we-serve";
import WhyChoose from "@/app/components/fintechsoftware/why-choose";
import Expertise from "@/app/components/fintechsoftware/expertise";
import FintechFAQ from "@/app/components/fintechsoftware/Fintechfaq";
import CTA from "@/app/components/cta";

export default function FintechSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <About />
      <IndustriesWeServe />
      <BuildFintechSolution />
      <Features />
      <Expertise />
      <WhyChoose />
      <FintechFAQ />
      <CTA
        title={
          " Let us assist you on your FinTech Software Project!"
        }
        highlightedTitle={"FinTech Software"}
        subtitle={
          " From concept to deployment, we build secure, scalable, and compliant fintech solutions tailored to your business needs."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
}

"use client";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import BuildFintechSolution from "./components/BuildFintechSolution";
import IndustriesWeServe from "./components/industries-we-serve";
import WhyChoose from "./components/why-choose";
import Expertise from "./components/expertise";
import FintechFAQ from "./components/Fintechfaq";
import CTA from "@/app/components/cta";

export default function FintechSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove ">
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
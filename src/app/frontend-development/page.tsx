"use client";
import Hero from "./components/hero";
import WhyChoose from "./components/why-choose";
import FrontendExperience from "./components/frontend-experience";
import TechShowcase from "./components/tech-showcase";
import FrontendApproach from "./components/frontend-approach";
import CTA from "@/app/components/cta";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      <Hero />
      <WhyChoose />
      <FrontendExperience />
      <TechShowcase />
      <FrontendApproach />
      <CTA
        title={"Let’s Build A Powerful Frontend Experience for Your Business"}
        highlightedTitle={"Frontend Experience"}
        subtitle={
          "Partner with Us to transform your ideas into stunning digital interfaces. If you require a complete redesign and a new web project, our experienced team is available to support."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}

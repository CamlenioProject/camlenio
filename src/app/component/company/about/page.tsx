import React from "react";
import Hero from "../../../components/company/about/hero";
import AboutTheCompany from "../../../components/company/about/about-the-company";
import OurMission from "../../../components/company/about/our-mission";
import OurValues from "../../../components/company/about/our-values";
import WhoWeAre from "../../../components/company/about/who-we-are";
import HaveAChat from "../../../components/company/about/have-a-chat";
// import { AnimatedTestimonials } from "@/app/components/animated-testimonials";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <AboutTheCompany />
      <OurMission />
      <OurValues />
      <WhoWeAre />
      {/* <AnimatedTestimonials autoplay={true} /> */}
      <HaveAChat />
    </div>
  );
};

export default About;

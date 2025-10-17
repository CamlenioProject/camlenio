"use client";
import ContactUs from "../../../components/Contactus/page";
import LogoSlider from "../../../components/Homepage/logo-slider";
import AboutSection from "../../../components/Hrms/about-section";
// import CoreModules from "@/app/components/Hrms/CoreModules/page";
import FAQSection from "../../../components/Hrms/faq-section";
import FeaturesSection from "../../../components/Hrms/features-section";
import Hero from "../../../components/Hrms/hero";

export default function HrmsSoftware() {
  return (
    <div className=" scroll-smooth">
      <Hero />
      <FeaturesSection />
      {/* <CoreModules /> */}
      <AboutSection />
      <FAQSection />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

"use client";
import ContactUs from "../../../components/Contactus/page";
import Hero from "../../../components/customsoftware/hero";
import HowWeWork from "../../../components/customsoftware/how-we-work";
import OurServicesSection from "../../../components/customsoftware/service-section";
import WhyCustomSoftware from "../../../components/customsoftware/custom-software";
import LogoSlider from "../../../components/Homepage/logo-slider";

export default function CustomedSoftware() {
  return (
    <div className="relative scroll-smooth">
      <Hero />
      <WhyCustomSoftware />
      <OurServicesSection />
      <HowWeWork />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

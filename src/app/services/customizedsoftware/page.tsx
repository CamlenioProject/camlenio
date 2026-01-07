"use client";
import Hero from "./components/hero";
import HowWeWork from "./components/how-we-work";
import OurServicesSection from "./components/service-section";
import WhyCustomSoftware from "./components/custom-software";
import WhyChooseUs from "./components/why-choose-us";
import TechStack from "./components/TechStack";
import FAQSection from "./components/faq-section";
import Industries from "./components/Industries";
import CTA from "@/app/components/cta";

export default function CustomedSoftware() {
  return (
    <div className="relative scroll-smooth bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <WhyCustomSoftware />
      <OurServicesSection />
      <HowWeWork />
      <TechStack />
      <Industries />
      <WhyChooseUs />
      <FAQSection />
      <CTA
        title={"Let’s Build Software That Works for You"}
        highlightedTitle={"Build Software"}
        subtitle={
          "Looking for a software solution that truly matches your business needs?. Contact Camlenio Software Pvt. Ltd. today for a free consultation and demo."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
}

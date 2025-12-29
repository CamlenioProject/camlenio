"use client";
import Hero from "../../../components/customsoftware/hero";
import HowWeWork from "../../../components/customsoftware/how-we-work";
import OurServicesSection from "../../../components/customsoftware/service-section";
import WhyCustomSoftware from "../../../components/customsoftware/custom-software";
import WhyChooseUs from "@/app/components/customsoftware/why-choose-us";
import TechStack from "@/app/components/customsoftware/TechStack";
import FAQSection from "@/app/components/customsoftware/faq-section";
import Industries from "@/app/components/customsoftware/Industries";
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

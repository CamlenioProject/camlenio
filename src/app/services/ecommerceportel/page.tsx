"use client";
import Hero from "./components/hero";
import EcommerceServices from "./components/EcommerceServices";
import Expertise from "./components/Expertise";
import OurProcess from "./components/weDeliver";
import EcommerceDevelopment from "./components/WhyChoose";
import FAQSection from "./components/FAQSection";
import CTA from "@/app/components/cta";

export default function EcommerceSoftware() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
      <Hero />
      <EcommerceServices />
      <Expertise />
      <OurProcess />
      <EcommerceDevelopment />
      <FAQSection />
      <CTA
        title={" Ready to Transform Your E-commerce Business?"}
        highlightedTitle={"E-commerce"}
        subtitle={
          " Whether you want to launch a new e-commerce software or upgrade an existing one, we’re here to help."
        }
        buttontext={"Get Free Consultation"}
      />
    </div>
  );
}

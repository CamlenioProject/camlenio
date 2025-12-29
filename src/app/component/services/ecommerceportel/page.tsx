"use client";
import Hero from "../../../components/ecommercedevelopment/hero";
import EcommerceServices from "../../../components/ecommercedevelopment/EcommerceServices";
import Expertise from "../../../components/ecommercedevelopment/Expertise";
import OurProcess from "../../../components/ecommercedevelopment/weDeliver";
import EcommerceDevelopment from "@/app/components/ecommercedevelopment/WhyChoose";
import FAQSection from "@/app/components/ecommercedevelopment/FAQSection";
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

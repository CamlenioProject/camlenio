"use client";
import Hero from "./components/hero";
import Benefits from "./components/Benefits";
import EcommerceServices from "./components/EcommerceServices";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";

export default function EcommerceSoftware() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <Benefits />
      <EcommerceServices />
      <WhyChoose />
      <CTA
        title={"Ready to Launch or Upgrade Your E-commerce Business?"}
        highlightedTitle={"E-commerce"}
        subtitle={
          " Partner with camlenio for reliable and scalable e commerce software development services.Contact us today and take your online business to the next level."
        }
        buttontext={"Get Free Consultation"}
      />
    </div>
  );
}
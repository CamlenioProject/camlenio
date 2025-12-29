"use client";
import ContactUs from "../../../components/Contactus/page";
// import Hero from "../../../components/Crm/hero";
import Hero from "../../../components/Crm/hero";
import Services from "../../../components/Crm/serives";
import Features from "../../../components/Crm/feature";

export default function CrmSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <Features />
      <Services />
      <ContactUs />
    </div>
  );
}

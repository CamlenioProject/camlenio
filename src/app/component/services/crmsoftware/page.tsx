"use client";
import ContactUs from "../../../components/Contactus/page";
import Hero from "../../../components/Crm/Hero/page";
import Services from "../../../components/Crm/Services/page";
// import Benefits from "@/app/components/Crm/Benefits/page";
import LogoSlider from "../../../components/Homepage/logo-slider";
import Features from "../../../components/Crm/Features/page";

export default function CrmSoftware() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Services />
      {/* <Benefits /> */}
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

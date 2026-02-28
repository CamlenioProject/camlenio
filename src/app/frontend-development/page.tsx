"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "./components/hero";
import FrontendSolutions from "./components/frontend_solution";
import FrontendExperts from "./components/frontend_experts";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FrontendExperts />
      <FrontendSolutions />
      <ContactUs />
    </div>
  );
}

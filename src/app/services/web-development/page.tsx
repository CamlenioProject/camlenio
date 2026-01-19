"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "./components/hero";
import Migration from "./components/migrations";
import WebDevExperts from "./components/web_dev_experts";
import WebDevSolution from "./components/web_dev_solution";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <WebDevExperts />
      <WebDevSolution />
      <Migration />
      <ContactUs />
    </div>
  );
}

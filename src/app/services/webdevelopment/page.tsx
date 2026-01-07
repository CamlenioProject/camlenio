"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "./components/Hero/page";
import Migration from "./components/Migrations/page";
import WebDevExperts from "./components/WebDevExperts/page";
import WebDevSolution from "./components/Webdevsolution/page";

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

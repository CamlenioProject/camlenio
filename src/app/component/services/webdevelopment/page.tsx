"use client";
import ContactUs from "../../../components/Contactus/page";
import Hero from "../../../components/webdev/Hero/page";
import Migration from "../../../components/webdev/Migrations/page";
import WebDevExperts from "../../../components/webdev/WebDevExperts/page";
import WebDevSolution from "../../../components/webdev/Webdevsolution/page";

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

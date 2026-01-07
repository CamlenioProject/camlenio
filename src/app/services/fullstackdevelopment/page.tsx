"use client";
import Hero from "./components/hero";
import FsDevServices from "./components/fsdev-service";
import DiscussProject from "./components/discuss-project";
import ContactUs from "@/app/components/Contactus/page";
import HireAppDev from "../androidappdevelopment/components/Hireappdev/page";
import WhyCamlenio from "./components/why-camlenio";

export default function FullStackDevelopment() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <FsDevServices />
      <DiscussProject />
      <WhyCamlenio />
      <HireAppDev />
      <ContactUs />
    </div>
  );
}

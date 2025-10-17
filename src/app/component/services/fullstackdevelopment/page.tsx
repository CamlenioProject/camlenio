"use client";
import Hero from "../../../components/Fullstackdev/hero";
import FsDevServices from "../../../components/Fullstackdev/fsdev-service";
import DiscussProject from "../../../components/Fullstackdev/discuss-project";
import ContactUs from "../../../components/Contactus/page";
import HireAppDev from "../../../components/Mobappdev/Hireappdev/page";
import WhyCamlenio from "../../../components/Fullstackdev/why-camlenio";
import LogoSlider from "../../../components/Homepage/logo-slider";

export default function FullStackDevelopment() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <FsDevServices />
      <DiscussProject />
      <WhyCamlenio />
      <HireAppDev />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

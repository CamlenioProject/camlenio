"use client";
import dynamic from "next/dynamic";
import Hero from "./components/Homepage/hero";
import SectionWrapper from "./components/SectionWrapper";
import HoliInteract from "./components/HoliInteract";
import FormPopup from "./components/FormPopup";

const ItSolution = dynamic(() => import("./components/Homepage/Itsolution"));
const IndustriesSection = dynamic(
  () => import("./components/Homepage/Industries-section")
);
const DevServices = dynamic(() => import("./components/Homepage/dev-services"));
const MakeUsTop = dynamic(() => import("./components/Homepage/make-us-top"));

const MakeUsUnique = dynamic(
  () => import("./components/Homepage/make-us-unique")
);
const SolutionsScale = dynamic(
  () => import("./components/Homepage/solutions-scale")
);
const OurProcess = dynamic(() => import("./components/Homepage/our-process"));
const Technologies = dynamic(
  () => import("./components/Homepage/technologies")
);
const Testimonials = dynamic(
  () => import("./components/Homepage/testimonials")
);
const FreeDemo = dynamic(() => import("./components/Homepage/free-demo"));
const BlogSection = dynamic(() => import("./components/Homepage/blog-section"));
import { useState, useEffect } from "react";
import { LogoSlider } from "./components/Homepage/logoslider";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (popupShown === "true") return;

    const img = new Image();
    img.src = "/popup.webp";

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      {/* 🚀 Immediate Load: Only the Hero Section (Above the fold) */}
      <Hero />

      {/* 📥 Lazy Load: Load components only when they are close to the viewport */}

      <SectionWrapper minHeight="150px">
        <LogoSlider />
      </SectionWrapper>

      <SectionWrapper minHeight="600px">
        <ItSolution />
      </SectionWrapper>

      <SectionWrapper minHeight="500px">
        <IndustriesSection />
      </SectionWrapper>

      <SectionWrapper minHeight="400px">
        <DevServices />
      </SectionWrapper>

      <SectionWrapper minHeight="400px">
        <MakeUsTop />
      </SectionWrapper>

      <SectionWrapper minHeight="500px">
        <MakeUsUnique />
      </SectionWrapper>

      <SectionWrapper minHeight="600px">
        <SolutionsScale />
      </SectionWrapper>

      <SectionWrapper minHeight="700px">
        <OurProcess />
      </SectionWrapper>

      <SectionWrapper minHeight="300px">
        <Technologies />
      </SectionWrapper>

      <SectionWrapper minHeight="400px">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper minHeight="300px">
        <FreeDemo />
      </SectionWrapper>

      <SectionWrapper minHeight="500px">
        <BlogSection />
      </SectionWrapper>
      <HoliInteract />
      <FormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};
export default Home;

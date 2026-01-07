"use client";
import dynamic from "next/dynamic";
import Hero from "./components/Homepage/hero";
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
import FormPopup from "./components/FormPopup";
import { useState, useEffect } from "react";
import { LogoSlider } from "./components/Homepage/logoslider";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("popupShown");

    if (popupShown === "true") {
      // Don't show popup if already shown
      return;
    }

    // Preload popup image to prevent lag
    const img = new Image();
    img.src = "/popup.webp";

    // Show popup after delay only if not shown before
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <FormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <Hero />
      <LogoSlider />
      <ItSolution />
      <IndustriesSection />
      <DevServices />
      <MakeUsTop />
      <MakeUsUnique />
      <SolutionsScale />
      <OurProcess />
      <Technologies />
      <Testimonials />
      <FreeDemo />
      <BlogSection />
    </div>
  );
};
export default Home;

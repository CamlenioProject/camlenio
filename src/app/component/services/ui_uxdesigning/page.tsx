"use client";
import ContactUs from "../../../components/Contactus/page";
import LogoSlider from "../../../components/Homepage/logo-slider";
import Hero from "../../../components/Uiuxdev/Hero/page";
import UIDesign from "../../../components/Uiuxdev/Uidesign/page";
import UiUxImportance from "../../../components/Uiuxdev/Uiuximportance/page";
import UxDesign from "../../../components/Uiuxdev/Uxdesign/page";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <UIDesign />
      <UxDesign />
      <UiUxImportance />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

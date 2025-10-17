"use client";
import Hero from "../../../components/fintechsoftware/hero";
import ResellerMarketSection from "@/app/components/fintechsoftware/recommend-section";
import LogoSlider from "../../../components/Homepage/logo-slider";

export default function FintechSoftware() {
  return (
    <div className="relative">
      <Hero />
      <ResellerMarketSection />
      <LogoSlider />
    </div>
  );
}

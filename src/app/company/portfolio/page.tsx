"use client";

import dynamic from "next/dynamic";
import PortfolioHeader from "./components/PortfolioHeader";

// Components
import PortfolioHero from "./components/PortfolioHero";
import CompanyProfile from "./components/CompanyProfile";
import FeaturedProjects from "./components/FeaturedProjects";
import ProcessSection from "./components/ProcessSection";
import TechStack from "./components/TechStack";
import PortfolioCTA from "./components/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <PortfolioHeader />

      <PortfolioHero />
      <CompanyProfile />
      <FeaturedProjects />
      <ProcessSection />
      <TechStack />
      <PortfolioCTA />

      {/* Hide Global Header & Footer specifically for this immersive page */}
      <style dangerouslySetInnerHTML={{
        __html: `
        header:not([class*="PortfolioHeader"]) { display: none !important; }
        footer { display: none !important; }
        body > header { display: none !important; } 
        .site-header { display: none !important; }
      ` }} />
    </main>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutAI from "./components/AboutAI";
import AIIntro from "./components/AIIntro";
import AITools from "./components/AITools";
import ContactAI from "./components/ContactAI";
import PortfolioHero from "./components/PortfolioHero";
import ProjectsGrid from "./components/ProjectsGrid";
import WelcomeScreen from "./components/WelcomeScreen";

// This is the main entry point for the new AI Portfolio
export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <PortfolioHero />
      <AIIntro />
      <ProjectsGrid />
      <AITools />
      <AboutAI />
      <ContactAI />
    </div>
  );
}

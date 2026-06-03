import Hero from "./components/hero";
import GraphicServices from "./components/graphic_services";
import CollabSolutions from "./components/collab_solutions";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "UI/UX & Graphic Designing Services | Camlenio",
  description: "Camlenio is a top UI/UX and graphic design agency, helping companies create amazing brand identities through modern, creative design services.",
};

export default function UIUXDesigningPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <GraphicServices />
      <CollabSolutions />
      
      <div id="cta-section">
        <CTA
          title="Transform Your Brand with Creative Design Solutions!"
          highlightedTitle="Creative Design Solutions!"
          subtitle="To boost your brand with Camlenio’s expert design solutions. Connect with expert logo designers in Jaipur for creative branding, social media creatives, and impactful graphic design services tailored for your business growth."
          buttontext="Get Started"
        />
      </div>
    </div>
  );
}

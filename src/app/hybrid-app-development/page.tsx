import Hero from "./components/hero";
import About from "./components/about";
import FeaturesTech from "./components/features-tech";
import WhyCamlenio from "./components/why-camlenio";
import CTA from "../components/cta";

export const metadata = {
  title: "Hybrid Mobile App Development Services for Business Growth | Camlenio",
  description: "Build powerful, high-performance apps with our expert Hybrid Mobile App Development solutions using a single codebase for iOS & Android.",
};

export default function HybridAppDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100  overflow-hidden">
      <Hero />
      <About />
      <FeaturesTech />
      <WhyCamlenio />
      <CTA
        title="Get Started Today!"
        highlightedTitle="Today!"
        subtitle="If you are searching to build an advanced mobile app with maximum reach and minimum cost. The Camlenio delivers Hybrid Mobile App Development Services, which is an ideal choice. Let us help you to convert your ideas into comprehensive mobile applications that drive real business outcomes."
        buttontext="Get Started"
      />
    </div>
  );
}

import Hero from "./components/hero";
import AboutOnDemand from "./components/about";
import FeaturesTechOnDemand from "./components/features-tech";
import IndustriesOnDemand from "./components/industries";
import IndustryServe from "./components/industry-serve";
import CTA from "../components/cta";

export const metadata = {
  title: "On-Demand Mobile App Development Services | Camlenio",
  description: "Construct scalable, high-performance on-demand applications for ride-hailing, food delivery, and doorstep services with real-time GPS tracking.",
};

export default function OnDemandAppDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <AboutOnDemand />
      <FeaturesTechOnDemand />
      <IndustriesOnDemand />
      <IndustryServe />
      <CTA
        title="Let’s Build Your App Today!"
        highlightedTitle="Today!"
        subtitle="If you are searching for a Trustworthy On Demand App Development Company, Camlenio is the perfect partner that designs applications as per specific essential business goals. We deliver high-performance advanced solutions that help you stay ahead in a competitive market."
        buttontext="Get Started"
      />

    </div>
  );
}

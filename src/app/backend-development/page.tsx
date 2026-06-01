import Hero from "./components/hero";
import SmartSolutions from "./components/solutions";
import ReliableServices from "./components/reliable-services";
import ScalableEnterprise from "./components/scalable-enterprise";
import WhyChoose from "./components/why-choose";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Backend Development Services | Camlenio",
  description: "Camlenio is a leading Backend Development Company India, offering custom Backend Development and cloud-based solutions for seamless performance.",
};

export default function BackendDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <SmartSolutions />
      <ReliableServices />
      <ScalableEnterprise />
      <WhyChoose />
      <CTA
        title="Get Started with Expert Backend Solutions!"
        highlightedTitle="Expert Backend Solutions!"
        subtitle="If you are searching for a trustworthy Backend Development Company India, Camlenio is your ideal partner. From custom backend development to full Backend Infrastructure Development, we offer everything you require for a powerful digital product."
        buttontext="Contact Us"
      />
    </div>
  );
}

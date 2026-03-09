import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import BuildFintechSolution from "./components/BuildFintechSolution";
import IndustriesWeServe from "./components/industries-we-serve";
import WhyChoose from "./components/why-choose";
import Expertise from "./components/expertise";
import FintechFAQ from "./components/Fintechfaq";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Fintech Software Development Company | Custom Fintech Solutions - Camlenio",
  description: "Leading Fintech Software Development company in India. We build secure, scalable fintech platforms including digital banking, payment systems, B2B solutions & financial applications.",
  keywords: "Fintech Software Development, Custom Fintech Software Development, B2B Fintech Software Development, Fintech Software Developers India, Fintech Software Development Services, Financial Software Development, Digital Banking Software Development",
};

export default function FintechSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100   ">
      <Hero />
      <About />
      <IndustriesWeServe />
      <BuildFintechSolution />
      <Features />
      <Expertise />
      <WhyChoose />
      <FintechFAQ />
      <CTA
        title={"Start Your Fintech Project With Us"}
        highlightedTitle={"Fintech Project"}
        subtitle={
          "Searching for a secure and scalable fintech platform? We provide professional Fintech Software Development Services planned to meet unique financial technology requirements."
        }
        buttontext={"Contact Us Today"}
      />
    </div>
  );
}
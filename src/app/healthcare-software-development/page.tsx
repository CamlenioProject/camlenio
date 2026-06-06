import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Healthcare Software Development Company in Jaipur | Camlenio",
  description: "Secure, compliance-ready (DPDP/HIPAA) healthcare software development services. We build EHR/EMR, telemedicine, and pharmacy management platforms.",
};

export default function HealthcareSoftwarePage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-x-clip">
      <Hero />
      {/* <TrustBadges /> */}
      <ProblemSection />
      <Benefits />
      <Solutions />
      <WhyChoose />
      <CTA
        title={"Ready to Digitize Your Healthcare Business?"}
        highlightedTitle={"Digitize"}
        subtitle={
          "Partner with us! Your trusted healthcare software development company, we build innovative healthcare applications that improve patient care and business efficiency."
        }
        buttontext={"Get a Free Quote"}
      />
    </div>
  );
}

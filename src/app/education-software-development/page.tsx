import Hero from "./components/Hero";
import Transform from "./components/Transform";
import Benefits from "./components/Benefits";
import ERPGrid from "./components/ERPGrid";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Premium School Management Software | Camlenio",
  description: "Leading school management software development company in Jaipur providing advanced educational ERP solutions. Streamline student tracking, admission management, billing, and LMS workflows.",
};

export default function EducationSoftwarePage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-x-clip">
      <Hero />
      <Transform />
      <Benefits />
      <ERPGrid />
      <Services />
      <WhyChoose />
      <CTA
        title={"Ready to Digitize Your Educational Institution?"}
        highlightedTitle={"Digitize"}
        subtitle={
          "Partner with us, as a trusted school management software development company in Jaipur, to build powerful and creative education management operations customized to your institution's success."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}

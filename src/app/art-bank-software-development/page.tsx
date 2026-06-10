import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Details from "./components/Details";
import Benefits from "./components/Benefits";
import Trust from "./components/Trust";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Advanced ART Bank Software Solutions | Camlenio",
  description: "Optimizing laboratory workflows with clinical precision and fluid data management for modern fertility centers. High traceability cryopreservation log, patient tracking, and donor database.",
};

export default function ARTBankingSoftwarePage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-x-clip">
      <Hero />
      <Intro />
      <Services />
      <Details />
      <Benefits />
      <Trust />
      <CTA
        title={"Get Started With Smart IVF Clinic Software Today"}
        highlightedTitle={"Smart IVF Clinic Software"}
        subtitle={
          "Looking for a reliable ART bank software company in Jaipur? Partner with Camlenio for advanced ART Bank Software, IVF Patient tracking software, and donor management software for fertility clinics."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}

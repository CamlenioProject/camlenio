import Hero from "./components/hero";
import ExpertServices from "./components/ExpertServices";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Reliable from "./components/Reliable";
import Partnership from "./components/Partnership";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "iPhone App Development Company in India | iOS App Solutions - Camlenio",
  description: "Professional iPhone & iOS mobile app development services. We build secure, scalable, and high-performance iPhone applications for startups, SMEs, and enterprises.",
};

export default function IPhoneAppDevelopment() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      <Hero />
      <Partnership />
      <ExpertServices />
      <Process />
      <WhyChooseUs />
      <Reliable />
      <CTA
        title={"Get in Touch Now! Build Your iOS App With Camlenio"}
        highlightedTitle={"Your iOS App"}
        subtitle={
          "If you are looking for a reliable partner for iOS app development, Camlenio is providing the support. Our experienced experts in iOS app development guarantee your application is adaptive, secure, and built to scale with your business. Connect now to concern your plan and explore how our iOS mobile development expertise can convert your goals into a successful app."
        }
        buttontext={"Get Started"}
      />
    </div>
  );
}

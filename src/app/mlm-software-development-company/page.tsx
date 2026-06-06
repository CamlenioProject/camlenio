import Hero from "./components/hero";
import MLMFaqSection from "./components/MLMFaqSection";
import MLMIntroSection from "./components/MLMIntroSection";
import MLMPlansFeatures from "./components/MLMPlansFeatures";
import MLMServices from "./components/MLMServices";
import MLMWhyChooseProcess from "./components/MLMWhyChooseProcess";
import CTA from "@/app/components/cta";

const MlmSoftware = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100  ">
      <Hero />
      <MLMIntroSection />
      <MLMServices />
      <MLMPlansFeatures />
      <MLMWhyChooseProcess />
      <MLMFaqSection />
      <CTA
        title={"Get Started with Camlenio Today"}
        highlightedTitle={"Camlenio"}
        subtitle={
          "Get in touch with the trusted MLM software development company in Jaipur, and get powerful and secure MLM software solutions tailored for your business success."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
};

export default MlmSoftware;

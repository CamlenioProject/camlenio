import Hero from "@/app/components/mlm/hero";
import MLMFaqSection from "@/app/components/mlm/MLMFaqSection";
import MLMIntroSection from "@/app/components/mlm/MLMIntroSection";
import MLMPlansFeatures from "@/app/components/mlm/MLMPlansFeatures";
import MLMServices from "@/app/components/mlm/MLMServices";
import MLMWhyChooseProcess from "@/app/components/mlm/MLMWhyChooseProcess";
import CTA from "@/app/components/cta";

const MlmSoftware = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <MLMIntroSection />
      <MLMServices />
      <MLMPlansFeatures />
      <MLMWhyChooseProcess />
      <MLMFaqSection />
      <CTA
        title={"Ready to Launch Your MLM Business?"}
        highlightedTitle={"MLM Business"}
        subtitle={
          "Partner with Camlenio Software Pvt. Ltd. to build a secure, scalable, and high-performing MLM software solution that drives long-term success."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
};

export default MlmSoftware;

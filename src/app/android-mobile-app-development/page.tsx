import Hero from "./components/hero";
import Expertise from "./components/Expertise";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStackHire from "./components/TechStackHire";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Android Mobile App Development Company | Enterprise App Solutions",
  description: "Professional Android mobile app development services for enterprises. Secure, scalable, and performance-driven Android applications.",
};
export default function AndroidAppDevelopment() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <Expertise />
      <WhyChooseUs />
      <TechStackHire />
      <CTA
        title={"Build High-Performance Android Apps with Camlenio"}
        highlightedTitle={"Android Apps"}
        subtitle={
          "Transform your app idea into a powerful Android application with Camlenio’s professional Android mobile app development services."
        }
        buttontext={"Book A Free Consultation Today"}
      />
    </div>
  );
}

import Hero from "../../../components/Mobappdev/Hero/page";
import ContactUs from "../../../components/Contactus/page";
import AppDevServices from "../../../components/Mobappdev/Appdevservices/page";
import HireAppDev from "../../../components/Mobappdev/Hireappdev/page";
import MobAppIntegration from "../../../components/Mobappdev/Mobappintegration/page";
import LogoSlider from "../../../components/Homepage/logo-slider";

export const metadata = {
  title: "Camlenio|Android App Development",
  description: "This is my website description.",
};
export default function AndroidAppDevelopment() {
  return (
    <div className="relative">
      <Hero />
      <MobAppIntegration />
      <HireAppDev />
      <AppDevServices />
      <ContactUs />
      <LogoSlider />/
    </div>
  );
}

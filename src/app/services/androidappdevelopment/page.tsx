import Hero from "./components/Hero/page";
import ContactUs from "@/app/components/Contactus/page";
import AppDevServices from "./components/Appdevservices/page";
import HireAppDev from "./components/Hireappdev/page";
import MobAppIntegration from "./components/Mobappintegration/page";
import { LogoSlider } from "@/app/components/Homepage/logoslider";

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

import Hero from "./components/hero";
import ContactUs from "@/app/components/Contactus/page";
import AppDevServices from "./components/app_dev_services";
import HireAppDev from "./components/hire_app_dev";
import MobAppIntegration from "./components/mob_app_integration";
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

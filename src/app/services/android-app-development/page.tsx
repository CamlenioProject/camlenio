import Hero from "./components/hero";
import ContactUs from "@/app/components/Contactus/page";
import AppDevServices from "./components/app_dev_services";
import HireAppDev from "./components/hire_app_dev";
import MobAppIntegration from "./components/mob_app_integration";
import { LogoSlider } from "@/app/components/Homepage/logoslider";

import Expertise from "./components/Expertise";

export const metadata = {
  title: "Camlenio|Android App Development",
  description: "This is my website description.",
};
export default function AndroidAppDevelopment() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <Expertise />
      {/* <MobAppIntegration /> */}
      {/* <HireAppDev /> */}
      {/* <AppDevServices /> */}
    </div>
  );
}

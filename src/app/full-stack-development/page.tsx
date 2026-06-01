import Hero from "./components/hero";
import FsDevServices from "./components/fsdev-service";
import Developers from "./components/developers";
import WhyCamlenio from "./components/why-camlenio";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Full Stack Development Services | Camlenio",
  description: "Camlenio provides Full Stack Development Services, offering end-to-end web and mobile solutions with seamless performance and unique technology.",
};

export default function FullStackDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <FsDevServices />
      <Developers />
      <WhyCamlenio />
      <div id="cta-section">
        <CTA
          title="Let’s Build Your Next Digital Solution!"
          highlightedTitle="Digital Solution!"
          subtitle="Ready to transform your ideas into a smart application? Partner with Camlenio for Full Stack Development Services customized to your business aims."
          buttontext="Contact Us"
        />
      </div>
    </div>
  );
}


import Hero from "./components/hero";
import AboutTheCompany from "./components/about-the-company";
import OurMission from "./components/our-mission";
import OurValues from "./components/our-values";
import WhoWeAre from "./components/who-we-are";
import HaveAChat from "./components/have-a-chat";
// import { AnimatedTestimonials } from "@/app/components/animated-testimonials";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <AboutTheCompany />
      <OurMission />
      <OurValues />
      <WhoWeAre />
      {/* <AnimatedTestimonials autoplay={true} /> */}
      <HaveAChat />
    </div>
  );
};

export default About;

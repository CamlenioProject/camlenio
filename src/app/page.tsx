import Hero from "./components/Homepage/hero";
import SectionWrapper from "./components/SectionWrapper";
// import HomePopup from "./components/Homepage/HomePopup";

// Sections (Direct imports for above-the-fold or critical content)
import IndustriesSection from "./components/Homepage/Industries-section";
import VideoScrollWrapper from "./components/Homepage/VideoScrollWrapper";

// Lazy-loaded sections for below-the-fold performance
import dynamic from "next/dynamic";
const DevServices = dynamic(() => import("./components/Homepage/dev-services"));
const MakeUsTop = dynamic(() => import("./components/Homepage/make-us-top"));
const MakeUsUnique = dynamic(() => import("./components/Homepage/make-us-unique"));
const SolutionsScale = dynamic(() => import("./components/Homepage/solutions-scale"));
const OurProcess = dynamic(() => import("./components/Homepage/our-process"));
const FreeDemo = dynamic(() => import("./components/Homepage/free-demo"));

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      {/* Client-side popup logic extracted to its own component */}
      {/* <HomePopup /> */}

      <Hero />

      {/* Video Scroll to ItSolution Section */}
      <VideoScrollWrapper />

      <SectionWrapper minHeight="500px">
        <IndustriesSection />
      </SectionWrapper>

      {/* Non-critical sections lazy-loaded */}
      <SectionWrapper minHeight="400px">
        <DevServices />
      </SectionWrapper>

      <SectionWrapper minHeight="500px">
        <MakeUsTop />
      </SectionWrapper>

      <SectionWrapper minHeight="500px">
        <MakeUsUnique />
      </SectionWrapper>

      <SectionWrapper minHeight="600px">
        <SolutionsScale />
      </SectionWrapper>

      <SectionWrapper minHeight="700px">
        <OurProcess />
      </SectionWrapper>

      <SectionWrapper minHeight="300px">
        <FreeDemo />
      </SectionWrapper>
    </div>
  );
}

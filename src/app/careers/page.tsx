import Hero from "./components/hero";
import LifeAtCamlenio from "./components/life-at-camlenio";
import OpenPositions from "./components/open-positions";
import WorkWithUs from "./components/work-with-us";

const Career = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <WorkWithUs />
      <OpenPositions />
      <LifeAtCamlenio />
    </div>
  );
};

export default Career;

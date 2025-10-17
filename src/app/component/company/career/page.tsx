import Hero from "../../../components/company/career/hero";
import LifeAtCamlenio from "../../../components/company/career/life-at-camlenio";
import OpenPositions from "../../../components/company/career/open-positions";
import WorkWithUs from "../../../components/company/career/work-with-us";
import React from "react";

const Career = () => {
  return (
    <div className="relative ">
      <Hero />
      <WorkWithUs />
      <OpenPositions />
      <LifeAtCamlenio />
    </div>
  );
};

export default Career;

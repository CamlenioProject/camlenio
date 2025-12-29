import { HoverEffect } from "../../About-card-hover-effect";
import GsapReveal from "../../GsapReveal";
import {
  RiTeamFill,
  RiLightbulbFlashFill,
  RiCustomerService2Fill,
  RiHandCoinFill,
  RiShieldStarFill,
  RiFocus3Fill,
} from "react-icons/ri";

const cards = [
  {
    icon: (
      <div className="p-4 inline-block rounded-full bg-white/20 group-hover:bg-white/20 transition-colors duration-300">
        <RiTeamFill
          size={60}
          className="text-white  group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "In-house Team",
    desc: "At Camlenio Software, our differentiator is our dedicated team of developers, designers, and strategists. Our team possesses high levels of experience, creativity, and commitment to every project. By keeping our processes internal, we fully control quality, communication, and timing, allowing us to build a team culture where everyone collaborates to always learn. ",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiLightbulbFlashFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Innovation",
    desc: "Innovation is the driving force behind everything we do at Camlenio. We are always experimenting with new technologies, tools, and methodologies, delivering solutions that are always ahead of the curve. From custom software development to innovative apps, our approach is rooted in creativeness, efficiency, and meaningful impact. Ultimately, every solution we build is based on making ideas become reality.",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiCustomerService2Fill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Client-Centric",
    desc: "Our customers are at the core of what we do. Camlenio believes that, before developing a solution, it is important to understand the client’s goals, vision, and challenges. We keep the lines of communication open, we provide regular updates, and we can pivot when there are changes. Your success is our success, and our goal is to create long-term relationships.",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiHandCoinFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Integrity",
    desc: "Integrity is at the foundation of Camlenio Software. We believe in being transparent, ethical, and accountable in every encounter and with each project. From pricing to timeline projects, we place a high value on honesty and trust. Our commitment to integrity is the reassurance that clients feel confident and safe working with us.",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiShieldStarFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Quality",
    desc: "At Camlenio, we continuously strive for quality. Each product we create goes through extensive testing, evaluation and revisions. We follow industry best practices and standards to deliver scalable, secure, and high-performance solutions. Quality is not a goal, it is our expectation.",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiFocus3Fill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Focus",
    desc: "Focus is the foundation of our efficiency and our success. Camlenio dedicates all its energy and focus to understanding the client's needs and delivering the result there are no distractions. By focusing on the most important tasks, we are able to deliver projects on time, on budget, and beyond expectations. Our focus leads to measurable results.",
  },
];

const OurValues = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <GsapReveal>
          <div className="text-center">
            <span className="relative inline-block px-4 py-1.5  rounded-full  border-2 text-base border-orange-300 bg-white shadow-sm font font-semibold text-gray-950 mb-4">
              <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
              Our values
            </span>
          </div>
        </GsapReveal>
        <GsapReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-8 mt-4 text-center">
            Given Our Knowledge{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
              }}
            >
              {" "}
              Expertise And Solutions
            </span>
          </h1>
        </GsapReveal>

        <div className="w-full">
          <GsapReveal>
            <HoverEffect items={cards} className="lg:grid-cols-3" />
          </GsapReveal>
        </div>
      </div>
    </div>
  );
};

export default OurValues;

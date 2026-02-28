"use client";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Headset,
} from "lucide-react";

const timelineData = [
  {
    step: "01",
    title: "Requirement Analysis",
    subtitle: "& Workflow",
    description:
      "In-depth discussion with stakeholders to understand business goals.",
    icon: <ClipboardList className="w-6 h-6 text-white" />,
  },
  {
    step: "02",
    title: "UI/UX Design",
    subtitle: "Interface",
    description:
      "Creating intuitive, user-friendly, and mobile-responsive interfaces.",
    icon: <Palette className="w-6 h-6 text-white" />,
  },
  {
    step: "03",
    title: "Custom Software",
    subtitle: "Development",
    description:
      "Building customized HRMS with modular development and API integrations.",
    icon: <Code2 className="w-6 h-6 text-white" />,
  },
  {
    step: "04",
    title: "Testing &",
    subtitle: "Quality Assurance",
    description:
      "Rigorous testing including functional, performance, and security checks.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    step: "05",
    title: "Deployment &",
    subtitle: "Training",
    description:
      "Secure deployment with data migration and role-based training sessions.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
  {
    step: "06",
    title: "Support",
    subtitle: "& Upgrades",
    description:
      "Continuous support, issue resolution, and regular system feature updates.",
    icon: <Headset className="w-6 h-6 text-white" />,
  },
];

const HorizontalScrollTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxTranslateX, setMaxTranslateX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true); // State to track device size

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  // Calculate width for Desktop Scroll
  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);

      const trackWidth = trackRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      const maxScroll = trackWidth - viewportWidth;
      setMaxTranslateX(maxScroll > 0 ? maxScroll : 0);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslateX]);

  return (
    <section
      ref={sectionRef}
      // Mobile: Auto height | Desktop: 250vh height for scroll space
      className="relative h-auto lg:h-[250vh]"
    >
      <div
        // Mobile: Normal block flow | Desktop: Sticky horizontal scroll
        className="relative lg:sticky lg:top-24 lg:h-screen lg:flex lg:items-center lg:overflow-hidden py-10 lg:py-0"
      >
        {/* Title Section */}
        <div className="relative lg:absolute md:top-0 md:left-0 lg:top-20 xl:top-32 lg:left-20 z-20 w-full md:max-w-2xl max-w-22xl mx-auto px-6 lg:px-0 mb-10 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our HRMS{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Process
            </span>
          </h2>
        </div>

        {/* Cards Container */}
        <motion.div
          ref={trackRef}
          style={{ x: isDesktop ? x : 0 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-4 lg:px-10 items-end justify-end lg:pl-20 w-full lg:w-max"
        >
          {timelineData.map((item, index) => (
            <div key={index} className="relative w-full lg:w-auto">
              <div
                className="w-full lg:w-[400px] bg-orange-500/10 p-6 rounded-2xl shadow-xl flex flex-col gap-4"
              >
                <div className="text-6xl font-black text-slate-100 absolute top-2 right-4 select-none">
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-200 z-10">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {item.title} <br />
                    <span className="text-orange-500">{item.subtitle}</span>
                  </h3>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollTimeline;

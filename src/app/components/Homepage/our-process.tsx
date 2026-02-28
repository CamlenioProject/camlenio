"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, domMax, LazyMotion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

const sections = [
  {
    title: "Discovery and Planning",
    desc: "The first step of building an application begins with understanding client requirements and analyzing market dynamics to lay the foundation for successful execution.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1759838267/Discovery-Planning_aix6bd.webp",
    checklist: [
      "In-depth Client Consultation",
      "Market Research",
      "Defining Project Scope",
      "Creating a Detailed Project Plan",
    ],
  },
  {
    title: "Design & Prototyping",
    desc: "This stage works on an idea as a visual structure or as an interactive model for a clear understanding before the development.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1759838267/design-prototyping_bzrbiv.webp",
    checklist: [
      "Wireframing & Mockups",
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      "Prototype Testing",
    ],
  },
  {
    title: "Development",
    desc: "This is one time in the product life cycle whilst notions and designs are metamorphosed into a working software through the processes of coding, integrating, and testing.",
    img: "/Homepage/process-development-img.webp",
    checklist: [
      "Backend Development",
      "Frontend Development",
      "Integration of APIs",
      "Quality Assurance Testing",
    ],
  },
  {
    title: "Deployment",
    desc: "The core stage where concepts and designs turn into functional software through coding, integration, and testing.",
    img: "/Homepage/process-design-img.webp",
    checklist: [
      "Backend Development",
      "Frontend Development",
      "Integration of APIs",
      "Quality Assurance Testing",
    ],
  },
  {
    title: "Post Maintenance Support",
    desc: "Continuous assistance after deployment keeps the software secure, updated, and fine-tuned in terms of performance.",
    img: "/Homepage/process-maintenance-img.webp",
    checklist: [
      "Performance Monitoring",
      "Bug Fixes & Updates",
      "Security Enhancements",
      "Scalability Support",
    ],
  },
];

const steps = [
  {
    label: "Discovery & Planning",
    icon: "/Homepage/svg/Discovery & Planning-n.svg",
  },
  {
    label: "Designing & Prototyping",
    icon: "/Homepage/svg/Designing & Prototyping-n.svg",
  },
  { label: "Development", icon: "/Homepage/svg/Development-n.svg" },
  { label: "Deployment", icon: "/Homepage/svg/Deployment-n.svg" },
  {
    label: "Post Maintenance Support",
    icon: "/Homepage/svg/Post Maintenance Support-n.svg",
  },
];

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
      sliderRef.current.scrollTo({
        left: activeIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <LazyMotion features={domMax}>
      <div className="py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <span className=" relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100  shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Custom Software Development
          </span>
          <h6 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Structured Approach to Building {""}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #F3F4F6, 4px 6px 0px #ff582336",
              }}
            >
              Smarter Software
            </span>
          </h6>

          <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans ">
            We follow a structured and methodical approach to software
            development that ensures every project is delivered with precision
            and quality. From initial planning and design to development,
            testing, and deployment, each step is carefully executed to create
            smarter, scalable, and future-ready solutions.
          </p>

          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <ul
              ref={sliderRef}
              className="flex gap-4 py-4 mb-4 overflow-x-auto scroll-smooth px-2 no-scrollbar overflow-scroll scrollbar-hide"
            >
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`relative group flex text-center flex-col md:flex-row text-[0.5rem] sm:text-[0.77rem] md:text-[1.2rem] font-medium px-3 md:px-4 lg:px-6 py-2 lg:py-4 rounded-xl w-full justify-center items-center gap-1 md:gap-2 lg:gap-4 cursor-pointer z-10 transition duration-300 ease-in-out hover:scale-[1.02]  ${
                    activeIndex === index
                      ? "bg-orange-500 text-white "
                      : "bg-orange-200 text-gray-800 hover:bg-orange-500 hover:text-gray-50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={24}
                    height={24}
                    className={`w-6 h-6 object-contain shadow-2xl z-40 group-hover:invert-0 ${
                      activeIndex === index ? "invert-0" : "invert"
                    }`}
                  />
                  <span className="whitespace-nowrap text-xs md:text-sm lg:text-sm capitalize text-left">
                    {step.label}
                  </span>
                  {activeIndex === index && (
                    <div className="absolute left-1/2 -bottom-1 md:-bottom-2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 group-hover:bg-orange-500 rotate-45 transition duration-300 ease-in-out"></div>
                  )}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-100 via-orange-200 to-indigo-100 bg-[length:200%_200%] animate-gradientMove py-10 px-6 md:px-16 rounded-3xl border-1 border-orange-100 mb-6"
          >
            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-12`}
                >
                  <div className="w-full md:w-sm">
                    <Image
                      src={sections[activeIndex].img}
                      alt={sections[activeIndex].title}
                      width={600}
                      height={400}
                      className="rounded-3xl w-full h-auto object-cover hover:scale-101 transition-all duration-500 ease-in-out"
                    />
                  </div>

                  <div className="w-full md:w-xl text-left">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      {sections[activeIndex].title}
                    </h3>
                    <p className="text-gray-700 mb-8 font-sans ">
                      {sections[activeIndex].desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sections[activeIndex].checklist.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-orange-500 mb-1 text-xl ">
                            <GiCheckMark />
                          </span>
                          <p className="text-gray-800 text-sm font-sans">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default OurProcess;

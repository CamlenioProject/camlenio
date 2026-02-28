"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: string;
  bgColor: string;
  gradient: string;
}

export default function CRMProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Requirement Analysis",
      description:
        "We analyze business processes, user roles, and CRM objectives.",
      details: [
        "Business process mapping",
        "Stakeholder interviews",
        "Competitor analysis",
        "Technical feasibility study",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "CRM Architecture & UI Design",
      description:
        "We design intuitive interfaces and scalable system architecture.",
      details: [
        "Wireframing & prototyping",
        "User experience design",
        "System architecture planning",
        "Database schema design",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "CRM Development & Customization",
      description:
        "Our developers build secure and high-performance CRM modules.",
      details: [
        "Agile development sprints",
        "Custom module development",
        "Third-party integrations",
        "API development",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-green-600",
    },
    {
      id: 4,
      icon: <TestTube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Testing & Quality Assurance",
      description:
        "We test for functionality, security, performance, and usability.",
      details: [
        "Unit & integration testing",
        "Security vulnerability testing",
        "Performance optimization",
        "User acceptance testing",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Deployment & Support",
      description:
        "We deploy your CRM and provide training, documentation, and ongoing support.",
      details: [
        "Production deployment",
        "User training sessions",
        "Documentation & manuals",
        "24/7 technical support",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradient: "from-red-500 to-red-600",
    },
  ];

  //   <div className="flex justify-center items-center gap-2 sm:gap-4 mb-8 md:mb-12 px-4">
  //     {steps.map((step) => (
  //       <React.Fragment key={step.id}>
  //         <button
  //           onClick={() => setActiveStep(step.id)}
  //           className={`relative flex flex-col items-center group ${
  //             isMobile ? "w-16" : "w-20"
  //           }`}
  //         >
  //           <div
  //             className={`
  //             relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full
  //             flex items-center justify-center transition-all duration-500
  //             ${
  //               activeStep === step.id
  //                 ? `bg-gradient-to-br from-orange-500 to-orange-600 text-white scale-110 shadow-lg`
  //                 : " text-gray-400 border-2 border-orange-200/40"
  //             }
  //             group-hover:scale-105 group-hover:shadow-md
  //           `}
  //           >
  //             {activeStep === step.id ? (
  //               <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
  //             ) : (
  //               <span className="font-bold text-lg sm:text-xl">{step.id}</span>
  //             )}
  //           </div>
  //           <div
  //             className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
  //           />
  //           <span
  //             className={`
  //             text-xs sm:text-sm font-medium mt-2 text-center transition-colors duration-300
  //             ${
  //               activeStep === step.id
  //                 ? "text-orange-600 font-bold"
  //                 : "text-gray-500"
  //             }
  //           `}
  //           >
  //             {isMobile ? `Step ${step.id}` : step.title.split(" ")[0]}
  //           </span>
  //         </button>
  //         {step.id < steps.length && (
  //           <div
  //             className={`
  //             h-0.5 w-8 sm:w-12 md:w-16 
  //             ${
  //               activeStep > step.id
  //                 ? "bg-gradient-to-r from-orange-500 to-orange-600"
  //                 : "bg-gray-200"
  //             }
  //             transition-all duration-500
  //           `}
  //           />
  //         )}
  //       </React.Fragment>
  //     ))}
  //   </div>
  // );

  const MobileCarousel = () => (
    <div className="md:hidden px-4">
      <div className="rounded-2xl shadow-lg p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div
              className={`inline-flex p-3 rounded-xl ${
                steps[activeStep - 1].bgColor
              } ${steps[activeStep - 1].color}`}
            >
              {steps[activeStep - 1].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {steps[activeStep - 1].title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {steps[activeStep - 1].description}
              </p>
            </div>
            <ul className="space-y-3">
              {steps[activeStep - 1].details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`flex-shrink-0 w-5 h-5 rounded-full ${
                      steps[activeStep - 1].bgColor
                    } flex items-center justify-center mt-0.5`}
                  >
                    <ChevronRight
                      className={`w-3 h-3 ${steps[activeStep - 1].color}`}
                    />
                  </div>
                  <span className="text-sm text-gray-700">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() =>
              setActiveStep((prev) => (prev > 1 ? prev - 1 : steps.length))
            }
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === step.id ? "bg-orange-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1))
            }
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm hover:shadow-lg transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-10 lg:py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our CRM Software Development{" "}
            <span className="relative inline-block">
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Process
              </span>
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans text-center">
            We follow a structured, transparent, and agile approach to deliver
            high-performance CRM solutions that drive business growth
          </p>
        </motion.div>

        {/* Process Steps Indicator - Now with Orange Numbers */}
        {/* <StepIndicator /> */}

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
              onMouseEnter={() => setActiveStep(step.id)}
            >
              <div
                className={`
                relative h-full bg-orange-100/10 rounded-2xl p-6 lg:p-8
                border ${
                  activeStep === step.id
                    ? "border-orange-300/40"
                    : "border-orange-100"
                } shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Background Gradient Effect */}
                <div
                  className={`
                  absolute inset-0 opacity-0 group-hover:opacity-5
                  bg-gradient-to-br ${step.gradient}
                  transition-opacity duration-500
                `}
                />

                {/* Step Number - Changed to Orange */}
                <div
                  className={`
                  absolute -top-3 -left-3 w-12 h-12 rounded-full
                  bg-gradient-to-br from-orange-500 to-orange-600
                  flex items-center justify-center shadow-lg
                  transition-all duration-500 group-hover:scale-105
                `}
                >
                  <span className="text-white font-bold text-lg">
                    {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`
                  w-16 h-16 lg:w-16 lg:h-16 rounded-2xl ${step.bgColor}
                  flex items-center justify-center mb-6
                  transition-all duration-500 group-hover:scale-105 group-hover:rotate-3
                  ${step.color}
                `}
                >
                  <div className="relative">
                    {step.icon}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base mb-6">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6">
                  {step.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${step.bgColor}`} />
                      <span className="text-xs lg:text-sm text-gray-700">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Line - Changed to Orange */}
                <div
                  className={`
                  absolute bottom-0 left-0 w-full h-1
                  bg-gradient-to-r from-orange-500 to-transparent
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel />
      </div>
    </div>
  );
}

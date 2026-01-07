"use client";

import { LazyMotion, domMax, m } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Understanding your business needs, challenges, and goals to define a clear software roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Creating user-friendly, intuitive, and conversion-focused designs that enhance user experience.",
  },
  {
    step: "03",
    title: "Software Development",
    description:
      "Building secure, scalable, and high-performance software using modern technologies.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Ensuring bug-free, reliable, and performance-optimized software through rigorous testing.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description:
      "Executing a smooth and secure go-live process with minimal disruption.",
  },
  {
    step: "06",
    title: "Support & Enhancements",
    description:
      "Providing ongoing monitoring, improvements, and scalability support as your business grows.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export default function SoftwareDevelopmentProcess() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative py-10 md:py-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6  py-2 lg:py-10">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
          >
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mb-6 origin-left"
            />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Customized Software{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Development Process
              </span>
            </h2>

            <p className="mt-6 text-base text-gray-900 leading-relaxed font-sans text-justify">
              A structured, transparent, and scalable development approach
              designed to deliver high-quality software solutions efficiently.
            </p>
          </m.div>

          {/* Process Flow */}
          <m.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {processSteps.map((step, index) => (
              <m.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >

                {/* Step Number with Circle */}
                <div className="flex items-center gap-4 mb-4">
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-300/50"
                  >
                    <span className="text-lg font-bold text-white">
                      {step.step}
                    </span>
                  </m.div>

                
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 ">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-900  font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="mt-6 h-1 bg-gradient-to-r from-orange-400 to-orange-300 origin-left rounded-full"
                />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}

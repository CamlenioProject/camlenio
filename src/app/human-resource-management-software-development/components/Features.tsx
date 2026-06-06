"use client";

import { m, LazyMotion, domMax, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Streamlined HR Operations",
    description:
      "Our HRMS software can handle your daily HR tasks, payroll, leave acceptance, employee attendance, records, and more.",
  },
  {
    title: "Correct Payroll Process",
    description:
      "We develop HR software with payroll smart features that minimise calculator errors and save time.",
  },
  {
    title: "Enhance Employee Management",
    description:
      "Our employee management software helps your business organise your workforce efficiently with data.",
  },
  {
    title: "Better Workforce Productivity",
    description:
      "The software can easily track the workers' performance and productivity on a single dashboard.",
  },
  {
    title: "Improve Data Security",
    description:
      "Our custom HRMS software development guarantees secure employee data storage and access control.",
  },
  {
    title: "Attendance Tracking & Leave Approvals",
    description:
      "It integrated attendance management software and leave management systems to streamline workforce tracking.",
  },
];

export default function HRMSFeatures() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <LazyMotion features={domMax}>
      <section
        ref={sectionRef}
        className="relative py-8 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="absolute left-1/2 top-36 bottom-14 -translate-x-1/2 pointer-events-none">
          <div className="relative h-full w-px">
            <m.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(249,115,22,0.9)_0,rgba(249,115,22,0.9)_8px,transparent_8px,transparent_16px)]"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Benefits of Hiring an{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                HRMS Software{" "}
              </span>
              Development Company
            </h2>
          </m.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <m.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative group"
              >
                {/* Content Container */}
                <div
                  className="relative h-auto pl-6 py-5 bg-white/60 rounded-xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_4px_20px_rgba(255,120,0,0.15)] 
                              border-l-4 border-orange-500 rounded-tl-xl rounded-bl-xl
                              before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 before:rounded-l-xl before:shadow-lg before:shadow-orange-500/30 before:transition-all before:duration-300 before:scale-y-0 
                              after:absolute after:top-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:rounded-tl-xl after:rounded-br-xl after:shadow-md after:shadow-orange-500/30 after:transition-all after:duration-300 "
                >
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed pr-6 font-sans text-sm">
                    {service.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

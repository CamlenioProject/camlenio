"use client";

import { motion, useAnimationFrame, useMotionValue, wrap } from "framer-motion";
import { useRef, useEffect } from "react";
import { Cog, Cloud, Smartphone, Link2, LifeBuoy } from "lucide-react";

export default function OurServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const halfWidth = useRef(0);
  const isDragging = useRef(false);
  const speed = -50;

  const services = [
    {
      icon: Cog,
      title: "Business Process Automation",
      desc: "Automate repetitive tasks and workflows to save time, reduce errors, and increase efficiency.",
    },
    {
      icon: Cloud,
      title: "Web & Cloud Applications",
      desc: "High-performance, secure, and responsive web apps built for your exact requirements.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Native Android, iOS, or cross-platform apps designed for your audience and business needs.",
    },
    {
      icon: Link2,
      title: "Integration & API Solutions",
      desc: "Connect your existing software and systems seamlessly for a unified workflow.",
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Support",
      desc: "Continuous monitoring, updates, and support to ensure your system always runs smoothly.",
    },
  ];

  const loopedServices = [...services, ...services];

  useEffect(() => {
    const calculateWidth = () => {
      if (scrollerRef.current) {
        halfWidth.current = scrollerRef.current.scrollWidth / 2;
      }
    };
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isDragging.current && halfWidth.current) {
      const moveBy = speed * (delta / 1000);
      x.set(wrap(-halfWidth.current, 0, x.get() + moveBy));
    }
  });

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove scroll-smooth py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Camlenio Development Company
        </span>
         <h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500"
          style={{
            textShadow:
              "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336", 
          }}
        >
          Our Services

        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans">
          Our customized software solutions are crafted to align perfectly with
          the way your business operates—streamlining workflows, reducing manual
          effort, and supporting your long-term growth objectives.
        </p>
        <div
          ref={containerRef}
          className="overflow-hidden relative active:cursor-grabbing"
        >
          <motion.div
            ref={scrollerRef}
            className="flex gap-6"
            style={{ x }}
            drag="x"
            onDragStart={() => (isDragging.current = true)}
            onDragEnd={() => {
              isDragging.current = false;
              x.set(wrap(-halfWidth.current, 0, x.get()));
            }}
          >
            {loopedServices.map((s, i) => (
              <div
                key={i}
                className="w-72 flex-shrink-0 p-6 mb-4 rounded-2xl border border-orange-200 bg-transparent shadow-md "
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-2xl p-3 bg-orange-100 border border-gray-200 shadow-sm">
                    <s.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

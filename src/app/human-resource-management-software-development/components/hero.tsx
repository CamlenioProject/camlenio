"use client";

import Image from "next/image";
import { domMax, m, LazyMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <section className="relative overflow-hidden ">

        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[95vh]  max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-22 lg:pt-24"
        >
          <div className="flex-1 max-w-2xl text-center lg:text-left mt-10 lg:mt-0">
            <m.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-900 mb-4"
            >
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
            </m.h1>

            <m.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="max-w-5xl mx-auto text-gray-800 text-sm md:text-base  font-sans text-justify"
            >
              Are you looking for smart HRM software that streamlines your HR operations? Leading an HRMS software Development Company in Jaipur offers advanced solutions to automate payroll and manage workforce efficiently with our advanced HRMS solutions. If you are a beginner or an enterprise, Camlenio offers scalable, customized systems tailored to your business needs.
            </m.p>

            <m.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button
                  size="xl"
                  className="my-6 self-center md:self-start shadow-md"
                >
                  Schedule a call
                </Button>
              </Link>
            </m.div>
          </div>

          {/* Right Image: Optimized floating hero image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex-1 flex items-center justify-center w-full mt-10 lg:mt-0 perspective-[2000px]"
          >
            <m.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 18, mass: 1.6, delay: 0.3 }}
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              className="relative w-full aspect-[4/3] max-w-[320px] sm:max-w-[440px] lg:max-w-[540px]"
            >
              <m.div
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                className="relative w-full h-full"
              >
                {/* Bottom shadow glow */}
                <div className="absolute -bottom-6 -right-8 w-[110%] h-1/2 bg-gradient-to-tr from-orange-200/20 via-white/5 to-transparent blur-2xl -z-10 rotate-12" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-orange-100/60">
                  <Image
                    src="/ServiceDropdown/hrmssoftware/hrms-right-hero.jpg"
                    alt="HRMS Software Dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={85}
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 540px"
                  />
                  {/* Subtle inner overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </m.div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <m.div
                  key={i}
                  animate={{ y: [0, -50, 0], opacity: [0.1, 0.35, 0.1] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                  className={`absolute w-2 h-2 rounded-full blur-[1px] ${i % 2 === 0 ? "bg-orange-400/40" : "bg-orange-300/30"}`}
                  style={{ top: `${10 + i * 16}%`, left: `${5 + i * 16}%`, zIndex: 40 }}
                />
              ))}
            </m.div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;

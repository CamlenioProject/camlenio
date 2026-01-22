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
              className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-gray-900 mb-4"
            >
              Human Resource Management{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Software Development
              </span>
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
              Camlenio develops smart HR Management Software to automate hiring,
              payroll, and performance.
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

          {/* Right Image: Optimized sizes & Priority */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-none"
          >
            <div className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] will-change-transform">
              {/* <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-2xl" /> */}

              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] lg:rounded-t-[200px] lg:rounded-bl-[200px] border-2 border-orange-500/10 shadow-xl">
                <Image
                  src="/ServiceDropdown/hrmssoftware/hrms-right-hero.jpg"
                  alt="HRMS Dashboard"
                  fill
                  className="object-cover"
                  priority
                  quality={80}
                  sizes="(max-width: 768px) 256px, (max-width: 1280px) 480px, 600px"
                />
              </div>
            </div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;

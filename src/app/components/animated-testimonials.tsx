"use client";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  logoSrc?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Partnering with Camlenio Software has been a great experience for us at Neelpe. The team’s professionalism, timely support, and innovative approach have truly helped us scale our services and build more trust with our customers.",
    name: "Neelpe Team",
    designation: "Neelpe",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    logoSrc: "/Homepage/testimonials/neelpe.png",
  },
  {
    quote:
      "Camlenio Software delivered exactly what we needed for our E-commerce project at Kailash Seed. The platform they developed is fast, user-friendly, and highly secure, making it easy for us to manage products.",
    name: "Kailash Seed Team",
    designation: "Kailash Seed",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    logoSrc: "/Homepage/testimonials/kailash-seed.png",
  },
  {
    quote:
      "They provided us with a reliable and efficient platform to manage claim services and streamline our operations. Their professional approach, timely delivery, and constant support have added great value to our business.",
    name: "AKMS Team",
    designation: "AKMS Insurance Surveyors & Loss Assessors",
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop",
    logoSrc: "/Homepage/testimonials/akms.png",
  },
];

interface Props {
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({ autoplay = true }: Props) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center">
          <span className="relative inline-block px-4 py-1.5 rounded-full text-center border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Testimonials
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 "

        >
          What Our {" "}
          <span className="text-orange-500"
            style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
          >Clients</span> {" "}
          Say
        </h1>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm  md:text-base mb-12 font-sans text-justify">
          Emizen tech Pvt Ltd began as a Web Development Company in the year
          2013, in Jaipur, Rajasthan, with the vision to help clients grow, we
          started incorporating modern technology solutions in their businesses.
        </p>
        <div className="mx-auto max-w-sm px-4 py-20 antialiased md:max-w-4xl lg:max-w-7xl md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-12 items-center">
            <div className="relative h-72 md:h-96 lg:h-[450px] w-full lg:col-span-7">
              <AnimatePresence>
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(i) ? 1 : 0.7,
                      scale: isActive(i) ? 1 : 0.95,
                      z: isActive(i) ? 0 : -100,
                      rotate: isActive(i) ? 0 : randomRotateY(),
                      zIndex: isActive(i) ? 40 : testimonials.length + 2 - i,
                      y: isActive(i) ? [0, -40, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl z-10 pointer-events-none" />
                    <Image
                      src={t.src}
                      alt={t.name}
                      width={1200}
                      height={900}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-left-top shadow-xl border border-gray-200/50"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-between py-4 lg:col-span-5 h-full relative">
              <div className="absolute -left-12 -top-12 text-[120px] text-orange-500/10 font-serif leading-none select-none pointer-events-none">"</div>
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  {testimonials[active].logoSrc && (
                    <div className="relative w-16 h-12 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                      <Image
                        src={testimonials[active].logoSrc!}
                        alt={testimonials[active].designation}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {testimonials[active].name}
                    </h3>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-500 font-sans mt-0.5">
                      {testimonials[active].designation}
                    </p>
                  </div>
                </div>
                <motion.p className="mt-8 text-lg/relaxed md:text-xl/relaxed text-gray-700 font-medium font-sans italic relative">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              <div className="flex gap-4 pt-10 md:pt-14 mt-auto">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/Homepage/process-development-img.webp",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/Homepage/process-maintenance-img.webp",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627728/education_dajq0f.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627726/fintech_l4mial.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627016/samples/smile.jpg",
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
    <div className="relative py-16 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center">
          <span className="relative inline-block px-4 py-1.5 rounded-full text-center border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Testimonials
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-4 "
          style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
        >
          What Our Clients Say
        </h1>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm  md:text-base mb-12 font-sans text-justify">
          Emizen tech Pvt Ltd began as a Web Development Company in the year
          2013, in Jaipur, Rajasthan, with the vision to help clients grow, we
          started incorporating modern technology solutions in their businesses.
        </p>
        <div className="mx-auto max-w-sm px-4 py-20 antialiased md:max-w-4xl md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="relative h-80 w-full">
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
                      y: isActive(i) ? [0, -80, 0] : 0,
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
                    <Image
                      src={t.src}
                      alt={t.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-between py-4 ">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold text-gray-950">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-neutral-500 font-sans">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg text-gray-700 font-sans">
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

              <div className="flex gap-4 pt-12 md:pt-0">
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

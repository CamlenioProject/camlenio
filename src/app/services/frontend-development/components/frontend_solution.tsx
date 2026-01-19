"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Single Page Applications (SPAs)",
    text: "We build fast, responsive SPAs that load a single HTML page and dynamically update content as the user interacts with the app, providing a smooth and fluid user experience similar to a desktop application.",
  },
  {
    id: 2,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Progressive Web Apps (PWAs)",
    text: "We develop PWAs that offer a native app-like experience with offline capabilities, push notifications, and fast load times, ensuring your users stay engaged even with poor internet connectivity.",
  },
  {
    id: 3,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Responsive Web Design",
    text: "We ensure your website looks and functions perfectly on all devices, from desktops to smartphones. Our flexible grids and adaptive layouts guarantee a consistent experience across all screen sizes.",
  },
  {
    id: 4,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Frontend Architecture",
    text: "We design scalable and maintainable frontend architectures that support long-term growth. We implement best practices for code organization, state management, and component reusability.",
  },
  {
    id: 5,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Pixel-Perfect UI Implementation",
    text: "We faithfully translate your design mockups into pixel-perfect, interactive code. We pay attention to every detail, ensuring fonts, colors, spacing, and animations match your vision exactly.",
  },
  {
    id: 6,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Performance Optimization",
    text: "We optimize your frontend for speed, ensuring fast Core Web Vitals, smooth animations, and efficient resource loading/caching to minimize bounce rates and improve SEO.",
  },
];

const FrontendSolutions = () => {
  const [[index, direction], setIndexDirection] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndexDirection(([prev]) => {
      const newIndex = (prev + newDirection + slides.length) % slides.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="min-h-screen px-6 md:px-16 py-20 overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 space-y-3"
            >
              <span
                className=" text-xl md:text-4xl font-bold tracking-wider text-orange-500"
                style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
              >
                FRONTEND SOLUTIONS
              </span>
              <h3 className="hidden md:inline-block text-xl md:text-2xl text-gray-800 font-semibold mt-2">
                Delivering Excellence Through Modern Frontend Technologies
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <p className="text-sm md:text-base font-normal text-gray-700 leading-relaxed mb-4">
                Whether you need a new application from scratch or an overhaul of an existing interface,
                our team delivers high-quality, maintainable, and stunning frontend code.
              </p>
            </motion.div>
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-[60vh] overflow-hidden rounded-lg hidden md:block">
            <Image
              src="/webdevpage/courselbg3.jpg"
              alt="Image"
              fill
              className="object-cover brightness-[.6] z-0"
            />
            <AnimatePresence custom={direction}>
              <motion.div
                key={slides[index].id}
                className="absolute top-0 left-0 w-full h-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center  px-4 z-10">
                  <motion.h2
                    key={slides[index].heading}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 max-w-5xl text-orange-500"
                  >
                    {slides[index].heading}
                  </motion.h2>

                  <motion.p
                    key={slides[index].text}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-xl max-w-4xl px-2 text-orange-100"
                  >
                    {slides[index].text}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
              <button
                onClick={() => paginate(-1)}
                className="invert px-3 py-2 rounded-r transition-all hover:bg-white/20"
              >
                <Image
                  src="/webdevpage/right-arrow.png"
                  alt="left-arrow"
                  width={40}
                  height={20}
                  className="object-cover rotate-180"
                />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
              <button
                onClick={() => paginate(1)}
                className="invert px-3 py-2 rounded-l transition-all hover:bg-white/20"
              >
                <Image
                  src="/webdevpage/right-arrow.png"
                  alt="right-arrow"
                  width={40}
                  height={20}
                  className="object-cover"
                />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-1 bg-white/30 rounded overflow-hidden z-20">
              <motion.div
                className="h-full bg-orange-500"
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden ">
            <div className="flex gap-4 overflow-x-scroll px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar py-6">
              {slides.map((slide) => (
                <motion.div
                  key={slide.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="snap-center shrink-0 w-[85%] bg-transparent rounded-xl shadow-md overflow-hidden relative"
                >
                  <div className="h-48 relative">
                    <Image
                      src={slide.image}
                      alt={slide.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2 bg-white/50 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {slide.heading}
                    </h3>
                    <p className="text-sm text-gray-600">{slide.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSolutions;

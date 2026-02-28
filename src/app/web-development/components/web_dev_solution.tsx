"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Single Page Applications (SPAs)",
    text: "Single Page Applications are web-based applications organized in one page. It seeks to enhance the users experience by avoiding the refresh of the pages and the loading of additional content at each interaction point. Dynamic loading, easier navigation, and prompt responses are what people find in using SPAS",
  },
  {
    id: 2,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Educational Web Solution",
    text: "Educational Wab Solutions constitute web-based applications that can assist students, teachers, and college administrative personnel for academic purposes. Some of theso solutions may be in the form of user-generated content such as instructional material, student tests, or even communication resources School-to-home communication and teacher and student collaboration are also facilitated by these tools.",
  },
  {
    id: 3,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Customer-Centric Web Applications",
    text: "A customer-centric web application solution should focus on delivering an intuitive, user-friendly experience that is tailored to the individual needs of each customer. This should enhance an exciting and tailor-made experience meeting the customers' expectations and boost the business bottom line through enhanced brand loyalty.",
  },
  {
    id: 4,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Health Care Website Solution",
    text: "We offer an efficient portal that helps patients register in our database, make schedules, or get access to their medical data. It facilitates easy passage of data between hospital systems by the doctors or any other healthcare practitioner thus lowering cost and boosting quality services rendered to a client.",
  },
  {
    id: 5,
    image: "/webdevpage/courselbg3.jpg",
    heading: " E-Commerce Websites",
    text: "E-commerce website solution refers to a means through which a company can sell its goods and services online. This entails payment management, the creation of a catalog, supply chain management, client accounts, and delivery management. Marketing, analytics, and customer support as well.",
  },
  {
    id: 6,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Auction Website Solutions",
    text: "Buyers and sellers can always find each other via auctio websites Users can search for special goods, compare prices, and ultimately get the best deal on this platform. Along the same n websites also provide safe payment methods. online customer care, and many other valuable attributes to ease the operation",
  },
  {
    id: 7,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Travel Web Solutions",
    text: "Travel Web Solutions lies in the field of developing and producing electronic solutions for travel and hotels. Cur company offers expertise in areas like web designing, web development, and maintaining websites among others, as wel as CMS, reservation platforms, SEO, and Digital Marketing services. We strive to facilitate business success in terms of online marketing by providing the best online presence",
  },
  {
    id: 8,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Enterprise Web App Solutions",
    text: "The enterprise web applications offer highly customized solutions for the streamlining of operations, and securing data while enhancing customer services for the company. These s used by organizations, mobile applications for employees, as well as web portals tailored to individual re",
  },
  {
    id: 9,
    image: "/webdevpage/courselbg3.jpg",
    heading: "Real Estate Website Solutions",
    text: "Businesses can develop a professionally designed, aesthetically pleasing website to exhibit their properties or services through Real Estate Website Solutions. These usually come with unique s, interactive maps, advanced search, and marketing tool kits. They enable a business to reach out to other clients to line through enhanced brand loyalty.",
  },
];

const WebDevSolution = () => {
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
                WEB DEVELOPMENT SOLUTION
              </span>
              <h3 className="hidden md:inline-block text-xl md:text-2xl text-gray-800 font-semibold mt-2">
                Our Iterative Development Methodology for Delivering Excellence
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <p className="text-sm md:text-base font-normal text-gray-700 leading-relaxed mb-4">
                If you are on a search for a quality web application, we have
                what it takes to meet your requirements. We have a great team of
                skilled developers building high-performance and reliable web
                applications aimed at improving user experience.
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
                    className="text-2xl sm:text-3xl md:text-7xl font-bold mb-6 max-w-5xl text-orange-500"
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

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
              <button
                onClick={() => paginate(-1)}
                className="invert px-3 py-2 rounded-r transition-all"
              >
                <Image
                  src="/webdevpage/right-arrow.png"
                  alt="right-arrow"
                  width={50}
                  height={24}
                  className="object-cover rotate-180"
                />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
              <button
                onClick={() => paginate(1)}
                className=" invert px-3 py-2 rounded-l transition-all"
              >
                <Image
                  src="/webdevpage/right-arrow.png"
                  alt="right-arrow"
                  width={50}
                  height={24}
                  className="object-cover"
                />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-1 bg-white/30 rounded overflow-hidden z-20">
              <motion.div
                className="h-full"
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
          </div>
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
                  <div className="p-4 space-y-2">
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

export default WebDevSolution;

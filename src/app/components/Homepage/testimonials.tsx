"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "What Clients says",
    heading: "Testimonials",
    text: "EskyDecode recognizes the importance of developing IT solutions for our clients. We assess our clients regularly to ensure we consistently provide the best value available. By doing so, we established ourselves as the global choice of the world.",
    highlight: "Looking for Digital Solution?",
    client: "Neelpe",
    companyLogo: "/Homepage/testimonials/neelpe.png",
    review:
      "Partnering with Camlenio Software has been a great experience for us at Neelpe.The team’s professionalism, timely support, and innovative approach have truly helped us scale our services and build more trust with our customers.",
    stars: 5,
  },
  {
    title: "Happy Clients",
    heading: "Feedback",
    text: "Working with EskyDecode was seamless. Their dedication and expertise made our project successful beyond expectations.",
    highlight: "Your success is our mission!",
    client: "Kailash Seed",
    companyLogo: "/Homepage/testimonials/kailash-seed.png",
    review:
      "Camlenio Software delivered exactly what we needed for our E-commerce project at Kailash Seed. The platform they developed is fast, user-friendly, and highly secure, making it easy for us to manage products.",
    stars: 5,
  },
  {
    title: "Happy Clients",
    heading: "Feedback",
    text: "Working with EskyDecode was seamless. Their dedication and expertise made our project successful beyond expectations.",
    highlight: "Your success is our mission!",
    client: "AKMS Insurance Surveyors & Loss Assessors",
    companyLogo: "/Homepage/testimonials/akms.png",
    review:
      " They provided us with a reliable and efficient platform to manage claim services and streamline our operations. Their professional approach, timely delivery, and constant support have added great value to our business.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <span className="relative inline-block px-6 py-1 text-base font-medium text-orange-500 bg-orange-100 border-1 border-orange-50 rounded-full mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          What Clients says
        </span>
        <h6 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Testimonials That{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #F3F4F6, 4px 6px 0px #ff582336",
            }}
          >
            Inspire Us
          </span>
        </h6>
        <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans">
          We take pride in being a trusted partner for our clients. Our
          commitment lies in delivering innovative, secure, and user-friendly
          solutions that truly make a difference. We believe in building
          long-term relationships based on reliability, transparency, and
          customer satisfaction.
        </p>
        <div className="relative max-w-5xl mx-auto overflow-hidden grid md:grid-cols-2 rounded-4xl border-2 border-orange-500 mt-4">
          <div className="p-8 flex flex-col justify-center ">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-orange-500">
                Testimonials
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-sans text-justify">
                We are dedicated to providing excellence through every project
                we deliver. By combining the latest technology with a
                customer-first approach, we ensure our clients get solutions
                that are both effective and future-ready. Our goal is to create
                value and trust that last beyond the services we provide.
              </p>
            </div>
          </div>
          <div className="relative bg-orange-500 text-white text-center flex flex-col items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <div className="mb-4 overflow-hidden backdrop-blur-2xl flex items-center justify-center">
                  <Image
                    src={testimonials[index].companyLogo}
                    alt={testimonials[index].client}
                    width={100}
                    height={100}
                    className="object-contain object-center w-30 h-16"
                  />
                </div>

                <h4 className="font-bold text-lg">
                  {testimonials[index].client}
                </h4>

                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonials[index].stars }).map(
                    (_, i) => (
                      <span key={i} className="text-yellow-300 text-xl px-1">
                        <FaStar />
                      </span>
                    )
                  )}
                </div>

                <p className="text-sm md:text-base font-sans text-justify mt-1">
                  {testimonials[index].review}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="absolute left-2 top-[48%] -translate-y-1/2 bg-white text-orange-500 p-2 w-10 rounded-full shadow-md"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="absolute right-2 top-[48%] -translate-y-1/2 bg-white text-orange-500 p-2 w-10 rounded-full shadow-md"
            >
              ❯
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

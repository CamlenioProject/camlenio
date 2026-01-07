"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function BuildFintechSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          descriptionRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          [bgRef1.current, bgRef2.current],
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.2, duration: 1, stagger: 0.2 },
          "-=0.8"
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full  overflow-hidden bg-gray-950"
    >
      <div className="relative flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-0 flex items-center justify-center z-10">
          <div className="max-w-2xl w-full">
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50 mb-4 opacity-0"
            >
              Looking to Build a <br /> Powerful{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
                }}
              >
                Fintech{" "}
              </span>
              Software Solution?
            </h1>

            <p
              ref={descriptionRef}
              className="max-w-5xl mx-auto text-gray-100 text-sm md:text-base mb-6 font-sans text-justify opacity-0"
            >
              From digital banking platforms and payment systems to lending,
              insurance, and wealth management solutions, Camlenio Software Pvt
              Ltd helps businesses build secure, scalable, and compliance-ready
              fintech software that drives growth and innovation.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0"
            >
              <Link href="/contact">
                <button
                  type="button"
                  className="inline-flex max-w-md items-center justify-center rounded-xl px-4 py-3 bg-orange-500 text-gray-100 text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
                >
                  Get Your FinTech Cost Estimate
                </button>


              </Link>
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[80vh] relative opacity-0 overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dxpbriwey/image/upload/v1761981351/muha-ajjan-xTHcNZAQzbM-unsplash_11zon_ehckfj.jpg"
            alt="Modern architecture at night"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 h-32 lg:h-full lg:inset-y-0 lg:left-0 lg:w-32 bg-gradient-to-b lg:bg-gradient-to-r from-black to-transparent"></div>
        </div>
      </div>

      <div
        ref={bgRef1}
        className="hidden md:block absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
      ></div>
      <div
        ref={bgRef2}
        className="hidden md:block absolute bottom-10 sm:bottom-20 right-20 sm:right-40 w-48 h-48 sm:w-72 sm:h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
      ></div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../../../lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const smallImageRef = useRef<HTMLImageElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
        delay: 0.3,
      });

      gsap.fromTo(
        ".bg-blob",
        { opacity: 0, scale: 0.85, y: 40 },
        {
          opacity: 0.4,
          scale: 1,
          y: 0,
          duration: 2.2,
          ease: "power2.out",
          stagger: 0.5,
        }
      );

      // Tagline fade
      tl.from(taglineRef.current, {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
      });

      // Title cinematic reveal
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: "blur(10px)",
          duration: 1.2,
        },
        "-=0.8"
      );

      // Subtitle smooth fade
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 25,
          filter: "blur(6px)",
          duration: 1.1,
        },
        "-=0.9"
      );

      // Animate buttons container
      if (buttonsRef.current) {
        tl.from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }

      // Image parallax float
      if (imageRef.current) {
        tl.from(
          imageRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 1.05,
            rotateX: 8,
            transformOrigin: "center bottom",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        );
      }

      // hero section cart container images

      if (smallImageRef.current) {
        const el = smallImageRef.current;

        const tl = gsap.timeline({
          delay: 1.6,
        });

        // 1️⃣ One-time 360 rotation
        tl.to(el, {
          rotate: 360,
          duration: 0.9,
          ease: "power2.out",
        });

        // 2️⃣ FORCE reset to real initial state
        tl.set(el, {
          rotate: 0,
        });

        // 3️⃣ Start independent shake + scale loop
        tl.to(el, {
          scale: 1.08,
          rotate: 3,
          duration: 0.25,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          repeatDelay: 2,
        });
      }

      // Background gentle floating motion
      gsap.to(".bg-blob", {
        x: "random(-25, 25)",
        y: "random(-35, 35)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 2,
          from: "random",
        },
      });

      if (marqueeRef.current) {
        const el = marqueeRef.current;
        const totalWidth = el.scrollWidth / 2;

        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: -totalWidth,
            duration: 30,
            ease: "linear",
            repeat: -1,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-screen px-6 pt-20 text-center  scroll-smooth"
      >
        {/* Background Grid */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,rgba(251,146,60,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,146,60,0.4)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(251,146,60,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,146,60,0.25)_1px,transparent_1px)]"
          )}
        />

        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dxpbriwey/image/upload/v1762160535/622_uhajfi.jpg')] bg-cover bg-center opacity-30" />

        {/* Radial Mask */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove [mask-image:radial-gradient(ellipse_160%_120%_at_50%_25%,transparent_25%,black_65%)]"></div>

        {/* Floating Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-blob absolute top-20 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40" />
          <div className="bg-blob absolute bottom-20 right-1/4 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto ">
          {/* Tagline */}
          <div
            ref={taglineRef}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ShoppingBag className="text-orange-500" size={22} />
            <p className="text-xs sm:text-sm font-medium tracking-wide text-orange-600 uppercase font-sans">
              E-Commerce Reinvented
            </p>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="relative text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-gray-900 leading-tight mb-6"
          >
            E-commerce{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Software
            </span>{" "}
            <span className="relative inline-flex z-20">
              Development
              <Image
                ref={smallImageRef}
                src="/ServiceDropdown/ecommercedevelopment/cart.png"
                alt="Decoration"
                width={60}
                height={60}
                className="h-[1em] w-auto mt-1 sm:mt-2 inline-block select-none"
                priority
              />
              <motion.svg
                viewBox="0 0 460 34"
                className="absolute left-0 -bottom-4 sm:-bottom-3 w-full h-8 -z-10"
                fill="none"
                initial={{ opacity: 1 }}
              >
                <motion.path
                  d="M1 20 C120 10, 270 -4, 480 10"
                  stroke="#fb923c"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.9,
                  }}
                />
              </motion.svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="max-w-[50rem] mx-auto text-gray-600 text-sm md:text-base mb-12 font-medium font-sans text-center"
          >
            Camlenio Software Pvt. Ltd. is a leading ecommerce software
            development company that helps businesses build powerful,
            feature-rich, and fully customized ecommerce solutions. With our
            expertise, your business can grow, scale, and accelerate faster in
            today’s competitive digital marketplace.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white  px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-[1.03]">
                Get Started <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

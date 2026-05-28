"use client";

import React from "react";
import { Monitor, LayoutDashboard, Hotel, Car, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function TravelFeatures() {
  const services = [
    {
      title: "Custom travel booking software development",
      icon: Monitor,
    },
    {
      title: "B2B travel software development with agent dashboards",
      icon: LayoutDashboard,
    },
    {
      title: "Hotel management software integration",
      icon: Hotel,
    },
    {
      title: "Cab booking software solutions",
      icon: Car,
    },
    {
      title: "API integration for flights, hotels, and payment gateways",
      icon: Code2,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Column: Services list */}
        <div className="order-2 md:order-1 text-left">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-3">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Our <span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}>
              Comprehensive
            </span> Service
          </h2>

          <div className="space-y-3">
            {services.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-4 items-start sm:items-center group cursor-pointer p-3 rounded-2xl hover:bg-white/80 hover:border-orange-200 hover:shadow-[0_15px_30px_rgba(251,146,60,0.05)] transition-all duration-300 border border-transparent"
                >
                  <div className="w-12 h-12 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base md:text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-0.5">
                      {s.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3-Image Collage */}
        <div className="order-1 md:order-2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-80 mt-12 rounded-3xl overflow-hidden shadow-xl">
              <Image
                alt="Complex software architecture"
                className="object-cover"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
              />
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  alt="Data visualization dashboard"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={75}
                />
              </div>
              <div className="relative w-full h-48 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  alt="User centered design process"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Why Do Travel Agencies Trust Us Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-28 pt-16 border-t border-gray-100">

        {/* Left: Image with Glow */}
        <div className="relative">
          <div className="absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <MotionImage
            alt="Confident travel technology consultant presenting solutions"
            className="rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative z-10 w-full aspect-[4/5] object-cover border border-white/40"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80"
            width={600}
            height={750}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Right: Copy & Grid */}
        <div className="text-left">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">
            Why Us?
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Why Do Travel Agencies Trust Us?
          </h2>

          <p className="text-gray-600 text-sm md:text-base my-6 font-sans text-justify leading-relaxed mb-6">
            Camlenio is recognized as a trustworthy travel booking software development Company in Jaipur, offering advanced and affordable travel technology solutions. Our experienced team understands that the growing travel industry develops software that streamlines operations and improves customer satisfaction.
          </p>

          <p className="text-gray-600 text-sm md:text-base my-6 font-sans text-justify leading-relaxed mb-10">
            We deliver complete B2B travel software development services with modern UI/UX, secure integrations, and dedicated support. As the best travel booking app development service in India, we focus on quality and long-term business success.
          </p>

        </div>

      </div>
    </section>
  );
}

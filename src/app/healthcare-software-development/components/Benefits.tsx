"use client";

import React from "react";
import { UserCheck, ShieldCheck, Gauge, Smartphone, Puzzle, Network } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    icon: UserCheck,
    title: "Improved Patient Management",
    desc: "Our platform manages patient records, appointments, billing, medications, and documents through a centralized procedure.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Data Security",
    desc: "Our custom healthcare software development provides reliable solutions that prioritize data privacy, encryption, and secure credentials management.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Gauge,
    title: "Better Operational Efficiency",
    desc: "Automate routine healthcare processes and reduce manual errors with the smart healthcare custom software development.",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Smartphone,
    title: "Real-Time Accessibility",
    desc: "The software can access medical records, appointments, and reports anytime, with cloud-enabled healthcare application development solutions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Puzzle,
    title: "Custom and Scalable Solutions",
    desc: "Our healthcare software development company develops adaptable systems developed for clinics, hospitals, and beginners.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Network,
    title: "Seamless Healthcare Integration",
    desc: "It combines multiple healthcare systems, smooths data flow, and improves operational connectivity.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (List of benefits, no cards/boxes!) - Now on Left on Large screens */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-orange-500/10 last:border-0"
                >
                  {/* Mini Unsplash Image */}
                  <div className="relative w-full sm:w-32 h-24 rounded-2xl overflow-hidden border border-orange-500/10 flex-shrink-0 bg-white/50 shadow-sm">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex-1 text-left flex gap-4 items-start">
                    {/* Circular icon circle (orange highlight) */}
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-500/5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column (Sticky Title & Description) - Now on Right on Large screens */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 text-left order-1 lg:order-2">

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Benefits of <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #fff, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}> Healthcare Software </span> Development That Help You
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-655 font-medium font-sans leading-relaxed">
              We provide a reliable software solution in healthcare that helps your organization:
            </p>

            {/* Unsplash Image Card */}
            <div className="mt-8 relative w-full h-[280px] rounded-[2rem] overflow-hidden border border-orange-500/10 shadow-[0_12px_40px_rgba(249,115,22,0.04)] bg-white/50">
              <Image
                src="/ServiceDropdown/healthbenefits/health-Benefits.avif"
                alt="Benefits of Healthcare Software Development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

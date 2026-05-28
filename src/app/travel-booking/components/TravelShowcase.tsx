"use client";

import React from "react";
import { Inbox, Zap, Users, Smartphone, TrendingUp, RefreshCw, MapPin, Calendar, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function TravelShowcase() {
  const benefits = [
    {
      title: "Automated Booking And Reservation Management",
      icon: Inbox,
    },
    {
      title: "Faster Customer Service And Secure Online",
      icon: Zap,
    },
    {
      title: "Improved B2B Agent And Supplier Management",
      icon: Users,
    },
    {
      title: "Mobile Friendly And User Friendly Booking Experience",
      icon: Smartphone,
    },
    {
      title: "Increased Operational Efficiency And Business Growth",
      icon: TrendingUp,
    },
    {
      title: "Real-Time Travel Package and Availability Updates",
      icon: RefreshCw,
    },
  ];

  const featuresList = [
    {
      title: "Select many location",
      subtitle: "Choose your favorite location",
      icon: MapPin,
      bgClass: "bg-[#7633ff]",
      isActive: false,
    },
    {
      title: "Schedule your trip",
      subtitle: "Set the date you want",
      icon: Calendar,
      bgClass: "bg-[#f97316]",
      isActive: true,
    },
    {
      title: "Big discount",
      subtitle: "Get discount for every services",
      icon: Ticket,
      bgClass: "bg-[#d81b60]",
      isActive: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">

      {/* Subtle top background blur decoration */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. About Us - Company Profile Split Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
        <div className="text-left">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Travel Booking Software Development Company
          </h2>

          <p className="max-w-md sm:max-w-2xl text-gray-600 text-sm md:text-base my-6 font-sans text-justify leading-relaxed mb-6">
            As a trustworthy travel software development company in Jaipur, we deliver creative digital solutions for travel businesses. Our user-friendly software and customized management systems help tour companies automate procedures. We focus on delivering secure high-performance systems for travel agencies, tour operators, and B2B travel businesses.
          </p>

          <p className="max-w-md sm:max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            Our experts developed software solutions that facilitate booking management, payment integrations, itinerary management, and customer communication.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-200 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

          <MotionImage
            alt="Team working on software development in Jaipur"
            className="relative rounded-[2.5rem] md:rounded-[3rem] shadow-2xl w-full h-auto object-cover z-10 border border-white/40"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            width={800}
            height={533}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* 2. Benefits Header */}
      <div className="text-center mb-16 relative">
        <p className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">
          Benefits
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Benefits of{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}
          >
            Travel Booking Software
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base my-6 font-sans leading-relaxed">
          Using travel booking software, these benefits can easily handle the operations. Here are the benefits of developing travel booking software:
        </p>
      </div>

      {/* 3. Benefits Grid with staggered animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((b, idx) => {
          const IconComponent = b.icon;
          return (
            <motion.div
              key={idx}
              className="glass-card p-8 md:p-10 rounded-[2rem] text-center hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)] hover:border-orange-300/50 transition-all duration-500 group flex flex-col items-center justify-center border border-white/30 bg-white/70 backdrop-blur-md cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shrink-0">
                <IconComponent className="text-orange-600 w-8 h-8 stroke-[2] group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors duration-500">
                {b.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

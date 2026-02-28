"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  RotateCcw,
  Split,
  Gift,
  Banknote,
  ShieldCheck,
  Truck,
  ArrowRight
} from "lucide-react";

// Use Cases Data
const useCases = [
  {
    id: 1,
    title: "Vendor Payments",
    subtitle: "Effortless & Instant",
    description: "Make vendor payments and supplier payouts effortlessly using bulk file upload. Transfer instantly without enrollment holdups.",
    icon: Building2,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Instant Refunds",
    subtitle: "Customer Satisfaction",
    description: "Process instant online fund repayments directly to the consumer's UPI handle. Guarantee the fastest refund process.",
    icon: RotateCcw,
    color: "bg-green-500",
    lightColor: "bg-green-50 text-green-600"
  },
  {
    id: 3,
    title: "Split Settlement",
    subtitle: "Automated Logic",
    description: "Automate split settlement funds for marketplaces. Distribute funds instantly among multiple vendors and partners.",
    icon: Split,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Cashback & Rewards",
    subtitle: "User Engagement",
    description: "Perfect for dedication programs. Automate the split of settlement payments for promotions and campaigns.",
    icon: Gift,
    color: "bg-pink-500",
    lightColor: "bg-pink-50 text-pink-600"
  },
  {
    id: 5,
    title: "Salary Payouts",
    subtitle: "Timely & Secure",
    description: "Guarantee timely salary disbursement to employees and delivery partners with secure automated payments.",
    icon: Banknote,
    color: "bg-orange-500",
    lightColor: "bg-orange-50 text-orange-600"
  },
  {
    id: 6,
    title: "Bank Verification",
    subtitle: "Zero Errors",
    description: "Verify bank accounts instantly using APIs. Fetch actual beneficiary names to decrease failed transactions.",
    icon: ShieldCheck,
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50 text-indigo-600"
  },
  {
    id: 7,
    title: "COD Management",
    subtitle: "Seamless Flow",
    description: "Simplify COD refunds by transferring amounts directly to consumer bank accounts for a perfect experience.",
    icon: Truck,
    color: "bg-teal-500",
    lightColor: "bg-teal-50 text-teal-600"
  },
];

const CARD_GAP = 30;

export default function SalaryPayoutOverview() {
  // Started at index 1 so there's always a card on the left initially
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState(350);

  // Responsive Card Width
  useEffect(() => {
    const handleResize = () => {
      // Mobile devices < 768px get smaller cards
      if (window.innerWidth < 768) {
        setCardWidth(280);
      } else {
        setCardWidth(350);
      }
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center the active card on initial render and index change
  useEffect(() => {
    if (!isDragging) {
      // Calculate offset to center the card. 
      // The container starts at left-1/2 (center screen).
      // We need to shift left by (activeIndex * fullItemWidth) + (cardWidth / 2)
      // This places the center of the active card at the center of the screen.
      const targetX = -activeIndex * (cardWidth + CARD_GAP) - (cardWidth / 2);

      animate(x, targetX, {
        type: "spring",
        stiffness: 260, // Reduced stiffness for softer feel
        damping: 38,    // Increased damping for less bounce, more 'smooth arrival'
        mass: 1.2       // Slightly heavier feel
      });
    }
  }, [activeIndex, x, isDragging, cardWidth]);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      setActiveIndex((prev) => Math.min(prev + 1, useCases.length - 1));
    } else if (offset > 100 || velocity > 500) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[650px]">

        {/* Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Uses for Smart & {" "}
            <span className="text-orange-600">Scalable Payouts</span>
          </motion.h2>
          <p className="text-slate-500 text-base md:text-lg">
            Effortless power, minimalist design — built for modern financial operations.
          </p>
        </div>

        {/* 3D Carousel Container - Masked to show primarily 3 cards */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center perspective-1000 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {/* 
            Motion Track
          */}
          <motion.div
            className="flex items-center absolute left-1/2 cursor-grab active:cursor-grabbing"
            style={{ x, gap: CARD_GAP }}
            drag="x"
            // Adjust constraints to allow dragging to the first and last items centering
            dragConstraints={{
              left: -((useCases.length - 1) * (cardWidth + CARD_GAP)) - (cardWidth / 2),
              right: -(cardWidth / 2)
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            {useCases.map((item, idx) => {
              // Calculate relative distance from active index
              const dist = idx - activeIndex;
              const isActive = idx === activeIndex;

              return (
                <Card
                  key={item.id}
                  data={item}
                  isActive={isActive}
                  dist={dist}
                  width={cardWidth}
                  onClick={() => setActiveIndex(idx)}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {useCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "bg-orange-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ data, isActive, dist, onClick, width }: { data: any, isActive: boolean, dist: number, onClick: () => void, width: number }) {

  const isNeighbor = Math.abs(dist) === 1;
  const isFar = Math.abs(dist) > 1;

  // Reduced scale on mobile to prevent overflow
  const scale = isActive ? 1.05 : (isNeighbor ? 0.85 : 0.7);
  const opacity = isActive ? 1 : (isNeighbor ? 0.6 : 0.2); // Faded out far cards
  const zIndex = isActive ? 20 : 10 - Math.abs(dist);
  const blur = isActive ? "blur(0px)" : "blur(2px)";

  return (
    <motion.div
      onClick={onClick}
      animate={{
        scale,
        opacity,
        filter: blur,
        zIndex
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      style={{ width: width }}
      className={`
        relative shrink-0
        h-[380px]
        bg-white rounded-[2.5rem]
        shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] 
        border border-slate-100
        flex flex-col p-8
        will-change-transform transform-gpu
        origin-center
      `}
    >
      {/* Dynamic Shadow for Depth */}
      {isActive && (
        <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(234,88,12,0.2)] pointer-events-none" />
      )}

      {/* Top Section */}
      <div className="flex items-start justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${data.lightColor}`}>
          <data.icon className="w-7 h-7" />
        </div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase"
          >
            FEATURED
          </motion.div>
        )}
      </div>

      {/* Center Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
          {data.title}
        </h3>
        <p className="text-sm font-semibold text-orange-600 mb-4 tracking-wide uppercase">
          {data.subtitle}
        </p>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-5">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}

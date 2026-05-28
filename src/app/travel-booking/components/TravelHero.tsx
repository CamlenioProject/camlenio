"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Code, PlayCircle } from "lucide-react";
import Image from "next/image";

const MotionImage = motion(Image);

export default function TravelHero() {
  const router = useRouter();
  return (
    <header className="relative w-full max-w-[90rem] mx-auto min-h-screen lg:min-h-[90vh] flex items-center pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">

      {/* Hero Blob Background Glow */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, rgba(251, 146, 60, 0.1) 70%, transparent 100%)"
        }}
    
    />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left column: Text details */}
        <div className="z-10 text-left">

          {/* Subtitle Badge */}
          <p className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">
            Travel Booking Software Development Company in Jaipur
          </p>

          {/* Fintech Heading Size & Style */}
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Travel Booking <br />
            <span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}>
              Software Solutions
            </span>
          </h1>

          {/* Fintech Paragraph Size & Style */}
          <p className="text-gray-600 text-sm md:text-base my-6 font-sans text-justify leading-relaxed">
            Build smart, secure travel booking software with Camlenio. Your trusted partner for Travel Booking Software Development in Jaipur develops customized B2B travel software, mobile apps, and online booking platforms.
          </p>

          {/* Secondary Details Accent Paragraph */}
          <div className="my-6 border-l-4 border-orange-500 pl-4 font-sans text-left">
            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">
              Boost Your Travel Business with Advanced Booking Technology
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From travel and flight booking systems to complete B2B Travel Software development Company in India solutions. We deliver modern travel software tailored to agencies, tour operators, and travel startups.
            </p>
          </div>

          {/* Original Travel Booking Button Style */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => router.push('/contact')}
              className="group inline-flex items-center justify-center cursor-pointer rounded-full px-7 py-3.5 bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)]"
            >
              Get the Free Consultation Today!
            </button>
          </div>
        </div>

        {/* Right column: 4-image grid with stagger animations */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <MotionImage
                alt="Modern travel software interface on mobile"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                width={300}
                height={400}
                priority
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <MotionImage
                alt="Developer coding travel API"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80"
                width={300}
                height={400}
                priority
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </div>
            <div className="space-y-4">
              <MotionImage
                alt="B2B dashboard preview"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                width={300}
                height={400}
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
              <MotionImage
                alt="Secure payment integration mockup"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                width={300}
                height={400}
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

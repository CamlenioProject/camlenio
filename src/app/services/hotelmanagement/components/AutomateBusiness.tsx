"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa"; 
import { useRouter } from "next/navigation";

export const AutomateBusiness = () => {
  const router = useRouter();
  return (
    <section className="py-10 px-6  overflow-hidden">
      <div className="max-w-7xl mx-auto bg-orange-300/30 rounded-[2.5rem] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Automate Your Hotel Operations
              </h2>
              <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                Streamline reservations, housekeeping, and guest services to run your hotel on auto-pilot.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Manage bookings and check-ins effortlessly across all channels",
                "Send automated payment reminders, welcome emails, and post-stay surveys via SMS or Email",
                "Auto-assign housekeeping tasks and track room readiness in real-time",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center ">
                    <FaCheck className="text-white text-[8px] font-bold" />
                  </div>
                  <p className="text-gray-700 font-medium text-xs md:text-sm leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={() => {router.push("/contact")}} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform ">
              Learn More
            </button>
          </div>

          {/* Right Column: Visual Card */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] aspect-square md:aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
              <div className="absolute inset-0 opacity-40 mix-blend-overlay"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 Q25,60 50,70 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M0,90 Q30,80 60,85 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>

              {/* "Auto Pilot" Badge */}
              <div className="absolute top-8 left-8 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm z-10">
                Auto Pilot
              </div>

              {/* Hand Image (If available, otherwise abstract) */}
              {/* For this mock, I'll use a placeholder div that mimics the dark chart look from the user image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>

            </div>

            {/* Floating White Card */}
            {/* <div className="absolute -bottom-8 md:-bottom-3 right-6 md:right-12 left-6 md:left-12 bg-white rounded-2xl p-4 md:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-between z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-90">
                    <path d="M3 21L21 12L3 3V21Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">January</p>
                  <h4 className="text-gray-900 font-bold text-lg md:text-xl">Monthly Revenue</h4>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-500 font-black text-2xl md:text-3xl">$635</p>
                <p className="text-gray-500 text-xs font-bold">+21.01%*</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

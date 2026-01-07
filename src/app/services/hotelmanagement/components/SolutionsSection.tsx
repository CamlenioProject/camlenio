"use client";

import { solutions } from "./data";
import { RevealSection } from "../../realestatesoftware/components/RevealSection"; // Reuse RevealSection

import { FaArrowRight } from "react-icons/fa";

export const SolutionsSection = () => {
  return (
    <section className="pt-0 sm:py-20 px-4 sm:px-6 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-left sm:text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-4 leading-tight">
            Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Hotel Management{" "}
            </span>
            Software Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Complete hotel software for seamless hospitality operations
          </p>
        </RevealSection>

        {/* Horizontal Staggered Layout */}
        <div className="relative w-full mx-auto pt-4 pb-10">

          {/* Connecting Line (Horizontal) */}
          <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-300 -translate-y-1/2 hidden lg:block" />

          {/* Mobile Swipe Indicator */}
          <div className="flex lg:hidden justify-end items-center gap-2 mb-2 text-orange-500 font-medium animate-pulse">
            <span className="text-sm">Swipe to explore</span>
            <FaArrowRight />
          </div>

          {/* Grid Container */}
          <div
            className="flex overflow-x-auto pt-8 pb-12 gap-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-24 lg:overflow-visible lg:pb-0 relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {solutions.map((item, idx) => {
              // Stagger effect: Even items moved down, Odd items moved up
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`relative flex flex-col items-center group transition-transform duration-500 min-w-[44vw] sm:min-w-[260px] lg:min-w-0 snap-center ${isEven ? "translate-y-6 lg:-translate-y-12" : "-translate-y-6 lg:translate-y-12"}`}>

                  {/* Connection Dot on Line (Only visible on Desktop) */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-[3px] border-orange-200 rounded-full z-0 hidden lg:block ${isEven ? "-bottom-[3.25rem]" : "-top-[3.25rem]"}`} />
                  {/* Vertical connector line to the main horizontal line */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-gray-200 h-10 lg:h-12 -z-10 hidden lg:block ${isEven ? "-bottom-10 lg:-bottom-12" : "-top-10 lg:-top-12"}`} />

                  <RevealSection className="w-full">
                    <div className={`relative bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 ${isEven ? "rotate-1 hover:rotate-0" : "-rotate-1 hover:rotate-0"} hover:scale-105 overflow-visible group/card`}>
                      {/* Pin */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm ring-2 ring-white z-30" />
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/20 blur-[1px] -z-10 translate-y-0.5" />

                      {/* 3D Illustration Pop-up (Top Right) */}
                      <div className="absolute left-0 right-4 -top-20 flex justify-end opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-y-10 group-hover/card:translate-y-0 z-20 pointer-events-none">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transform rotate-12 relative">
                          {/* Use img for external urls to avoid config issues */}
                          <img
                            src={(item as any).illustration || "https://placehold.co/200x200"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent mix-blend-overlay" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center bg-white/95 rounded-lg pt-6">
                        <span className="absolute top-1 right-2 text-3xl font-black text-orange-50/80 -z-10 leading-none select-none">0{idx + 1}</span>

                        <div className="w-8 h-8 mx-auto bg-orange-50 rounded-md flex items-center justify-center text-orange-500 text-lg mb-2 group-hover/card:bg-orange-500 group-hover/card:text-white transition-colors duration-300 relative z-30">
                          {item.icon}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-tight relative z-30">{item.title}</h3>
                        <p className="text-xs text-gray-500 leading-snug font-medium relative z-30">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </RevealSection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

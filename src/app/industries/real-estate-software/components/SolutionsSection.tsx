"use client";

import { solutions } from "./data";
import { RevealSection } from "./RevealSection";

export const SolutionsSection = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
            Our Real Estate Software Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We offer a full range of software solutions built for the real estate ecosystem, helping businesses digitize processes and create seamless experiences:
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <RevealSection key={idx} className="h-full">
              <div className="group relative h-full bg-white rounded-[2.5rem] border border-gray-100 p-8 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/15 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-16 h-16 bg-white rounded-2xl border border-orange-100 flex items-center justify-center text-3xl text-orange-500 shadow-sm mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-base text-gray-500 font-normal font-sans text-justify leading-relaxed mb-8 flex-grow group-hover:text-gray-700 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

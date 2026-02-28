"use client";

import { m } from "framer-motion";
import { softwareTypes } from "./data";
import { RevealSection } from "./RevealSection";

export const SoftwareTypesSection = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-gray-50/50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealSection className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Software Types <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >We Develop</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From property management to advanced analytics, we engineer specialized solutions for every niche in the real estate ecosystem.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {softwareTypes.map((type, idx) => (
            <RevealSection key={idx} className="h-full">
              <div className="group h-full relative bg-white p-1 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Border Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-gray-100 rounded-[2.5rem] p-[1px] opacity-100 group-hover:from-orange-400 group-hover:to-orange-600 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full bg-white rounded-[2.4rem] p-8 md:p-10 flex flex-col overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -right-6 -top-6 text-[10rem] font-black text-gray-50 leading-none select-none group-hover:text-orange-50 transition-colors duration-500 z-0">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-8 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold text-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-6">
                      0{idx + 1}
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{type.title}</h3>
                    <p className="text-base text-gray-500 font-normal font-sans text-justify mb-8 leading-relaxed">{type.desc}</p>

                    <div className="space-y-3 mb-8">
                      {type.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                      {type.features.length > 3 && (
                        <div className="text-xs text-orange-500 font-medium pl-4">+ {type.features.length - 3} more features</div>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 pt-6 border-t border-gray-100 group-hover:border-orange-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-orange-500 transition-colors">Best For</span>
                      <span className="text-xs font-bold text-gray-900 text-right max-w-[60%]">{type.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

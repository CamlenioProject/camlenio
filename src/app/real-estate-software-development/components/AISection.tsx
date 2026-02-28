"use client";

import { m } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { aiCapabilities, whyAiMatters } from "./data";
import { RevealSection } from "./RevealSection";

export const AISection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealSection className="mb-16">
          <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold mb-4 border border-orange-500/50">
            AI INTEGRATION
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            AI-Powered Real Estate Solutions
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl leading-relaxed">
            In today’s fast-paced property market, intelligence and automation are key. Our solutions combine cutting-edge AI with expertise to help you deliver smarter experiences, make data-driven decisions, and accelerate growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {whyAiMatters.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="font-medium text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilities.map((ai, idx) => (
            <m.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-orange-600/10 hover:border-orange-500/30 transition-colors"
            >
              <h4 className="text-xl font-extrabold text-white mb-3">{ai.title}</h4>
              <p className="text-base text-gray-400 font-normal font-sans text-justify leading-relaxed">{ai.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

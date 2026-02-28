"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { featureCategories } from "./data";

export const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("Core Platform");

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-gray-200/50 rounded-full w-fit mx-auto backdrop-blur-sm border border-gray-100">
        {Object.keys(featureCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${activeTab === cat ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
          >
            {activeTab === cat && (
              <m.div
                layoutId="activeTab"
                className="absolute inset-0 bg-orange-500 rounded-full -z-10 shadow-lg shadow-orange-500/30"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featureCategories[activeTab as keyof typeof featureCategories].map((feat, idx) => (
              <m.div
                key={feat.title}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/20 group transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-gray-900 mb-2">{feat.title}</h4>
                    <p className="text-base text-gray-500 font-normal font-sans text-justify leading-relaxed group-hover:text-gray-600">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

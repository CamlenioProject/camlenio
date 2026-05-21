"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { devServicesData } from "@/config/homepage";

const DevServices = () => {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const activeFeature = devServicesData.features.find((f) => f.id === active);

  return (
    <LazyMotion features={domMax}>
      <div className="relative py-16 overflow-hidden bg-gray-800">
        <div className="mx-auto px-8 md:px-16 relative">
          <div className="max-w-6xl mx-auto text-center mb-4">
            <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-gray-100 shadow-sm text-xs md:text-sm font-medium text-black mb-4 z-20">
              <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
              {devServicesData.header.badge}
            </span>
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
              {devServicesData.header.title} {" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
                }}
              >
                {devServicesData.header.titleAccent}
              </span>
            </h4>
            <p className="max-w-5xl mx-auto text-gray-50 text-sm md:text-base mb-12 font-sans text-justify">
              {devServicesData.header.description}
            </p>
          </div>
          <div className="relative pb-10 text-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 border-2 border-black/20  p-6 rounded-4xl bg-gradient-to-r from-gray-900 via-gray-500/10 to-transparent backdrop-blur-3xl shadow-[0_-2px_28px_rgba(255,255,255,0.1)]">
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                {devServicesData.features.map((feature) => (
                  <m.button
                    key={feature.id}
                    onClick={() => setActive(feature.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center group gap-4 text-left p-2 rounded-2xl cursor-pointer transition-colors duration-300 ${active === feature.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-900 hover:bg-orange-400 hover:text-white"
                      }`}
                  >
                    <div className={clsx(
                      "relative w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-300",
                      active === feature.id ? "bg-white/20" : "bg-gray-100 group-hover:bg-orange-100"
                    )}>
                      {(() => {
                        const IconComponent = feature.icon;
                        return IconComponent ? (
                          <IconComponent 
                            size={24}
                            strokeWidth={1.5}
                            className={clsx(
                              "transition-colors duration-300",
                              active === feature.id ? "text-white" : "text-gray-600 group-hover:text-orange-600"
                            )} 
                          />
                        ) : null;
                      })()}
                    </div>
                    <span className="font-medium text-sm md:text-base lg:text-lg ">
                      {feature.title}
                    </span>
                  </m.button>
                ))}
              </div>
              <div className="w-full md:w-2/3 relative p-4">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeFeature?.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl"
                  >
                    <h3 className="text-[1.3rem] md:text-2xl lg:text-4xl font-bold mb-2 text-orange-500">
                      {activeFeature?.cardtitle}
                    </h3>
                    <p className="text-gray-300 text-[.85rem] md:text-base mb-6 font-sans text-justify">
                      {activeFeature?.desc}
                    </p>

                    <button
                      onClick={() => {
                        router.push("/contact");
                      }}
                      className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-gray-900 bg-gray-100 rounded-full group text-sm md:text-base cursor-pointer tracking-tight"
                    >
                      <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                        Talk to Experts <FaLongArrowAltRight />
                      </span>
                    </button>
                    {activeFeature?.subImages && (
                      <div className="grid grid-cols-4 gap-4 mt-8">
                        {activeFeature.subImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center group"
                          >
                            <div className="w-12 h-12 relative group-hover:scale-80 transition-transform duration-500 overflow-hidden">
                              <Image
                                src={img.src}
                                alt={img.name}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:rotate-y-360"
                              />
                            </div>
                            <span className="mt-2 text-[.50rem] lg:text-sm text-gray-50 text-center">
                              {img.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default DevServices;
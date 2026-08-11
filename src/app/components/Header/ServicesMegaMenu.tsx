"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ChevronRightIcon, CubeIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { safeLink } from "../../../../lib/utils";
import { servicesMenuData, availablePages } from "@/config/navigation";

export const ServicesMegaMenu = ({ baseHref }: { baseHref: string }) => {
  const [activeTitle, setActiveTitle] = useState<string>(servicesMenuData[0].title);
  const activeData = servicesMenuData.find(d => d.title === activeTitle);

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex w-[90vw] max-w-[1200px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1),0_0_0_1px_rgba(249,115,22,0.1)] p-3 mx-auto ring-1 ring-orange-100/50 border border-orange-100/50"
    >
      <div className="w-[28%] py-4 flex flex-col gap-1 pr-3">
        {servicesMenuData.map((group) => (
          <div
            key={group.title}
            onClick={() => setActiveTitle(group.title)}
            className={clsx(
              "px-5 py-4 text-[15px] cursor-pointer transition-all duration-300 rounded-xl flex items-center justify-between group relative isolate",
              activeTitle === group.title
                ? "bg-white text-orange-600 font-bold shadow-sm ring-1 ring-orange-100"
                : "text-gray-600 font-medium hover:text-orange-700 hover:bg-orange-100/50"
            )}
          >
            <span className="relative z-10">{group.title}</span>
            {activeTitle === group.title && (
              <m.div
                layoutId="activeGlow"
                className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <ChevronRightIcon className={clsx("w-4 h-4 transition-all duration-300 relative z-10", activeTitle === group.title ? "text-orange-500 translate-x-0 opacity-100" : "opacity-0 -translate-x-2")} />
          </div>
        ))}
      </div>

      <div className="w-px bg-gradient-to-b from-transparent via-orange-200/30 to-transparent my-4" />

      <div className="flex-1 p-6 pl-8 relative min-h-[440px]">
        <m.div
          key={activeTitle}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full w-full flex flex-col"
        >
          {(activeTitle === "App Development" || activeTitle === "Custom Web Development") && (
            <div className="mb-6 p-6 rounded-2xl bg-orange-50/50 border border-orange-200/60 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                  {activeTitle}
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">Explore our professional solutions</p>
              </div>
              <div className="relative z-10 opacity-15 rotate-12 -mr-6 -my-4 pointer-events-none">
                <CubeIcon className="w-24 h-24 text-orange-600" strokeWidth={0.8} />
              </div>
            </div>
          )}

          {activeData?.items && activeData.items.length > 0 ? (
            <div
              className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 overflow-y-auto overscroll-contain pr-2 max-h-[60vh] custom-scrollbar"
              onWheel={(e) => e.stopPropagation()}
            >
              {activeData.items.map((item, idx) => {
                const linkHref = safeLink(item.href.startsWith('/') ? item.href : `/${baseHref}/${item.href}`, availablePages);
                const isUnavailable = linkHref === "/coming-soon";
                return (
                  <Link
                    key={idx}
                    href={linkHref}
                    className={clsx(
                      "group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 border border-transparent",
                      isUnavailable
                        ? "opacity-40"
                        : "hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(249,115,22,0.15)] hover:ring-1 hover:ring-orange-100"
                    )}
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-400 group-hover:text-orange-600 group-hover:bg-orange-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      {item.icon ? (
                        <item.icon className="w-5 h-5 animate-draw" />
                      ) : (
                        <CubeIcon className="w-5 h-5 animate-draw" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-gray-700 group-hover:text-gray-900 font-bold text-[14px] leading-tight transition-colors line-clamp-2">{item.title}</span>
                    </div>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-orange-300 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                );
              })}
            </div>
          ) : (
            <Link 
              href={activeData?.href || "/coming-soon"}
              className="flex-1 w-full relative rounded-2xl overflow-hidden group shadow-lg ring-1 ring-black/5 mt-1 block"
            >
              <Image
                src={activeData?.image || "/header/hire-developer.jpg"}
                alt={activeTitle}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-orange-500 inline-block" />
                    <p className="text-orange-400 font-bold text-xs tracking-widest uppercase">Featured Category</p>
                  </div>
                  <p className="text-white font-bold text-3xl leading-none mb-3 drop-shadow-sm">{activeTitle}</p>
                  <p className="text-gray-300 text-sm max-w-md line-clamp-2 leading-relaxed opacity-90">
                    Discover our specialized {activeTitle.toLowerCase()} solutions designed to elevate your business with cutting-edge technology and design.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-orange-500 pb-0.5 group/btn cursor-pointer hover:border-white transition-colors">
                    <span>View Details</span>
                    <ArrowUpIcon className="w-3.5 h-3.5 rotate-45 group-hover/btn:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </m.div>
      </div>
    </m.div>
  );
};

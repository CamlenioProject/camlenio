"use client";

import React from "react";
import Link from "next/link";
import { CubeIcon } from "@heroicons/react/24/outline";
import { safeLink } from "../../../../lib/utils";
import { availablePages } from "@/config/navigation";
import { m } from "framer-motion";


export const UnifiedGridDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => (
  <div className="flex w-[95vw] max-w-[1240px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] p-8 mx-auto border border-orange-100/50 ring-1 ring-orange-100/50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {item.items.map((sub: any, idx: number) => {
        const title = typeof sub === "string" ? sub : sub.title;
        const href = typeof sub === "string" ? sub.replace(/\s+/g, "").toLowerCase() : sub.href;
        const Icon = sub.icon || CubeIcon;
        const fl = safeLink(href.startsWith("/") ? href : `/${baseHref}/${href}`, availablePages);

        return (
          <m.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.05,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1]
                }
              })
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <Link
              href={fl}
              className="group flex gap-4 items-center p-3 rounded-xl hover:bg-white hover:shadow-[0_4px_14px_0_rgba(249,115,22,0.1)] hover:ring-1 hover:ring-orange-200/50 transition-all duration-300 border border-transparent hover:border-orange-100 w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors shadow-sm">
                <Icon className="w-6 h-6 animate-draw" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-[15px] group-hover:text-orange-700 transition-colors leading-tight">
                  {title}
                </span>
              </div>
            </Link>
          </m.div>
        );
      })}
    </div>
  </div>
);

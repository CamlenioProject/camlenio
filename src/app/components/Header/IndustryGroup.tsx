"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpIcon, CubeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { safeLink } from "../../../../lib/utils";
import { availablePages } from "@/config/navigation";
import { m } from "framer-motion";


export const IndustryGroup = ({ group, hideHeader, baseHref }: { group: any, hideHeader?: boolean, baseHref: string }) => (
  <div className="flex flex-col gap-4">
    {!hideHeader && (
      <div className="flex items-center justify-between">
        <div className={clsx("px-4 py-1.5 rounded-full text-sm font-bold tracking-wide", group.color)}>
          {group.title}
        </div>
        <ArrowUpIcon className="w-4 h-4 text-gray-400 rotate-45" />
      </div>
    )}
    <div className="flex flex-col gap-2">
      {group.items.map((sub: any, subIdx: number) => {
        const linkHref = safeLink(sub.href.startsWith('/') ? sub.href : `/${baseHref}/${sub.href}`, availablePages);
        const isUnavailable = linkHref === "/coming-soon";
        return (
          <m.div
            key={subIdx}
            custom={subIdx}
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
              href={linkHref}
              className={clsx(
                "group flex gap-4 items-start p-3 rounded-xl transition-all duration-300 border border-transparent w-full",
                isUnavailable
                  ? "opacity-70"
                  : "hover:bg-white hover:shadow-[0_4px_14px_0_rgba(249,115,22,0.1)] hover:ring-1 hover:ring-orange-200/50 hover:border-orange-100"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors shadow-sm">
                {sub.icon ? <sub.icon className="w-5 h-5 animate-draw" /> : <CubeIcon className="w-5 h-5 animate-draw" />}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-[15px] group-hover:text-orange-700 transition-colors leading-tight mb-0.5">
                  {sub.title}
                </span>
                <span className="text-xs text-gray-500 leading-snug font-medium line-clamp-2">
                  {sub.desc}
                </span>
              </div>
            </Link>
          </m.div>
        );
      })}
    </div>
  </div>
);

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { m } from "framer-motion";
import { safeLink } from "../../../../lib/utils";
import { availablePages } from "@/config/navigation";


export const CompanyDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => {
  const standardItems = item.items.filter((i: any) => i.title !== "Blog");
  const blogItem = item.items.find((i: any) => i.title === "Blog");

  return (
    <div className="flex w-[75vw] max-w-[950px] bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] mx-auto border border-orange-100/50">
      <div className="flex-1 p-4 grid grid-cols-2 gap-2 bg-white/40">
        {standardItems.map((sub: any, idx: number) => (
          <m.div
            key={sub.title}
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
            className="flex"
            style={{ willChange: "transform, opacity" }}
          >
            <Link
              href={sub.href.startsWith("http") ? sub.href : safeLink(sub.href, availablePages)}
              target={sub.href.startsWith("http") ? "_blank" : undefined}
              className="inline-flex items-center gap-3 pl-6 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-orange-100/10 transition-all duration-300 group w-full"
            >
              <div className="w-10 h-10 flex-shrink-0 bg-white rounded-xl flex items-center justify-center text-gray-900 shadow-sm ring-1 ring-gray-100 group-hover:scale-110 transition-transform duration-300">
                {sub.icon && <sub.icon className="w-5 h-5 text-orange-500" />}
              </div>
              <div>
                <div className="text-[14px] font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-0.5">{sub.title}</div>
                <div className="text-[12px] text-gray-500 leading-snug">{sub.sub}</div>
              </div>
            </Link>
          </m.div>
        ))}
      </div>

      {blogItem && (
        <div className="w-[300px] relative p-6 flex flex-col justify-between overflow-hidden group/blog">
          <div className="absolute inset-0">
            <img
              src="/CompanyDropdown/blog/camlenio_blog_bg.png"
              alt="Blog Background"
              className="w-full h-full object-cover opacity-100 group-hover/blog:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase mb-3 backdrop-blur-sm">
              Blogs
            </span>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">Camlenio Insights</h3>
            <p className="text-orange-50 text-[13px] leading-relaxed mb-4">
              Stay ahead of the curve with our latest articles on technology, design, and innovation.
            </p>
          </div>

          <Link
            href={blogItem.href}
            className="relative z-10  inline-flex items-center gap-2 group w-fit mt-2"
          >
            <span className="text-white font-bold text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              Read Our Blog
            </span>
            <ArrowUpIcon className="w-3.5 h-3.5 text-white rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

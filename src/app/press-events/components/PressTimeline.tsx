"use client";

import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PlusIcon, MinusIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/solid";


interface TimelineEvent {
  title: string;
  description: string;
  time?: string;
  images?: string[];
}

interface PressTimelineProps {
  events: TimelineEvent[];
  openLightbox?: (images: string[], index: number) => void;
}

export default function PressTimeline({ events, openLightbox }: PressTimelineProps) {

  return (
    <LazyMotion features={domMax}>
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Big Number & Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="will-change-transform"
              >
                <h2 className="text-[12rem] leading-none font-black text-gray-100 select-none absolute -top-20 -left-10 -z-10">
                  02
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                  Event <br /> Schedule
                </h3>
                <p className="text-gray-500 text-lg mb-8 max-w-xs">
                  There are many variations of passages of leisure available, but the majority have suffered alteration in some form.
                </p>

                {/* Decoration */}
                <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
              </m.div>
            </div>

            {/* Right Column: Timeline Items */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {events.map((event, idx) => (
                <TimelineEventItem
                  key={idx}
                  event={event}
                  idx={idx}
                  onImageClick={(index) => openLightbox?.(event.images || [], index)}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function TimelineEventItem({ event, idx, onImageClick }: { event: TimelineEvent; idx: number; onImageClick: (index: number) => void }) {
  const [expanded, setExpanded] = useState(false);
  const displayImages = expanded ? event.images : event.images?.slice(0, 3);
  const hasMore = (event.images?.length || 0) > 3;

  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: idx * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      className="group border-b border-gray-100 pb-8 last:border-0 hover:border-purple-200 transition-colors duration-500 will-change-transform"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-3">
          <span className="text-sm font-bold text-purple-600 uppercase tracking-wider block mb-1">
            Highlight
          </span>
          <span className="text-2xl font-bold text-gray-900 group-hover:scale-110 group-hover:text-purple-600 transition-all duration-500 block origin-left">
            {`0${idx + 1}`}
          </span>
        </div>

        <div className="md:col-span-9">
          <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 transform group-hover:translate-x-2">
            {event.title}
          </h4>
          <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-300">
            {event.description}
          </p>

          {/* Mini Gallery Preview */}
          {event.images && event.images.length > 0 && (
            <div className="space-y-4">
              <m.div
                layout
                className={`grid grid-cols-3 gap-2 ${expanded ? 'h-auto' : 'h-40'} overflow-hidden rounded-xl bg-gray-50`}
              >
                <AnimatePresence >
                  {displayImages?.map((img, imgIdx) => (
                    <m.div
                      key={imgIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      layout
                      onClick={() => onImageClick(imgIdx)}
                      className="relative w-full h-40 bg-gray-100 overflow-hidden rounded-lg aspect-square cursor-pointer group/img will-change-transform"
                    >
                      <Image
                        src={img}
                        alt={`${event.title} ${imgIdx}`}
                        fill
                        className="object-cover object-top hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Overlay Icon */}
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px]">
                        <div className="bg-white/20 backdrop-blur-md border border-white/50 px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                          <ArrowsPointingOutIcon className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-bold uppercase tracking-wider">View</span>
                        </div>
                      </div>
                    </m.div>
                  ))}
                </AnimatePresence>
              </m.div>

              {hasMore && (
                <m.button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  {expanded ? (
                    <>
                      <MinusIcon className="w-4 h-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <PlusIcon className="w-4 h-4" />
                      View All ({event.images.length})
                    </>
                  )}
                </m.button>
              )}
            </div>
          )}
        </div>
      </div>
    </m.div>
  );
}

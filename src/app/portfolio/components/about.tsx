"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { gsap, useGSAP } from "@/lib/gsap";

const highlights = [
  { title: "Fintech-first Solutions" },
  { title: "Trusted by 100+ Businesses" },
  { title: "Secure and Scalable Platforms" },
];

export function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("[data-animate='about']", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
    });
  }, { scope: container });

  return (
    <div id="about" ref={container} className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p
            data-animate="about"
            className="text-sm font-bold text-orange-600 uppercase tracking-widest"
          >
            Who We Are
          </p>
          <h2
            data-animate="about"
            className="text-balance text-3xl font-bold md:text-5xl text-gray-900 leading-tight"
          >
            Your Partner for Digital Growth
          </h2>
          <p data-animate="about" className="text-lg text-gray-600 leading-relaxed">
            Camlenio is a global technology partner focused on transforming
            ideas into powerful digital solutions. We specialize in building
            fintech platforms, enterprise tools, and digital ecosystems that
            drive growth and innovation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {highlights.map((h) => (
            <Card
              key={h.title}
              data-animate="about"
              className="rounded-[2rem] border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <CardContent className="p-10 text-center">
                <div
                  className="mx-auto mb-6 h-1 w-12 rounded-full bg-orange-500"
                  aria-hidden="true"
                />
                <p className="font-bold text-gray-900 text-lg">{h.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

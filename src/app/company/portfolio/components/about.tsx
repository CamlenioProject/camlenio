"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/app/components/ui/card";

const highlights = [
  { title: "Fintech-first Solutions" },
  { title: "Trusted by 100+ Businesses" },
  { title: "Secure and Scalable Platforms" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='about']", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="about"  className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p
            data-animate="about"
            className="text-sm font-semibold text-primary"
          >
            Who We Are
          </p>
          <h2
            data-animate="about"
            className="text-balance text-2xl font-semibold md:text-4xl"
          >
            Your Partner for Digital Growth
          </h2>
          <p data-animate="about" className="text-pretty text-muted-foreground">
            Camlenio is a global technology partner focused on transforming
            ideas into powerful digital solutions. We specialize in building
            fintech platforms, enterprise tools, and digital ecosystems that
            drive growth and innovation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {highlights.map((h) => (
            <Card
              key={h.title}
              data-animate="about"
              className="rounded-2xl border bg-card shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div
                  className="mx-auto mb-3 h-2 w-10 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <p className="font-medium">{h.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

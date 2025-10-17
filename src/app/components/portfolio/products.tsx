"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "Fintech Admin Portal",
    desc: "Unified back-office portal for transactions, settlements, KYC, and reconciliation.",
    img: "/fintech-admin-portal.jpg",
  },
  {
    name: "Retail AEPS & BBPS Platform",
    desc: "Retailer-first portal supporting Aadhaar-enabled and bill payment services.",
    img: "/aeps-bbps-platform.jpg",
  },
  {
    name: "HRMS Dashboard System",
    desc: "Comprehensive HR suite for attendance, payroll, and performance insights.",
    img: "/hrms-dashboard-system.jpg",
  },
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='product']", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2
            data-animate="product"
            className="text-balance text-2xl font-semibold md:text-4xl"
          >
            What We’ve Built
          </h2>
          <p
            data-animate="product"
            className="mx-auto mt-3 max-w-2xl text-muted-foreground"
          >
            A sample of platforms crafted with security, scalability, and
            performance in mind.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.name}
              data-animate="product"
              className="rounded-2xl border bg-card shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-base md:text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="overflow-hidden rounded-xl border bg-muted">
                  <Image
                    src={
                      p.img ||
                      "/placeholder.svg?height=176&width=320&query=product%20mockup"
                    }
                    alt={`${p.name} mockup`}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

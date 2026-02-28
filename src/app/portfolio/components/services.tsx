"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CreditCard, Smartphone, Boxes, Palette, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Fintech Software Development",
    desc: "AEPS, BBPS, PAN, Micro ATM, wallet ledgers, compliance-first systems.",
    icon: CreditCard,
  },
  {
    title: "Web & Mobile App Development",
    desc: "High-performance apps with modern architectures and robust CI/CD.",
    icon: Smartphone,
  },
  {
    title: "ERP / CRM / HRMS Solutions",
    desc: "Enterprise suites tailored for operations, sales, and HR workflows.",
    icon: Boxes,
  },
  {
    title: "UI/UX & Branding Design",
    desc: "Clean, usable, and brand-aligned design systems and interfaces.",
    icon: Palette,
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Full-funnel growth strategies, analytics, and search optimization.",
    icon: BarChart3,
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='service']", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2 data-animate="service" className="text-balance text-2xl font-semibold md:text-4xl">
            Our Core Services
          </h2>
          <p data-animate="service" className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            End-to-end solutions to launch and scale your products with confidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <Card
              key={title}
              data-animate="service"
              className="group rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                    <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-base md:text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

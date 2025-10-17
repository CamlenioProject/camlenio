// New animated section: Process
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const steps = [
  { title: "Discover", desc: "We align on goals, constraints, and success metrics." },
  { title: "Design", desc: "UX flows and system architecture for clarity and scale." },
  { title: "Build", desc: "Iterative development with CI/CD and QA baked in." },
  { title: "Launch", desc: "Secure, observable, and ready to grow." },
]

export function Process() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='process']", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={ref} className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2 data-animate="process" className="text-balance text-2xl font-semibold md:text-4xl">
            Our Delivery Process
          </h2>
          <p data-animate="process" className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Proven, predictable, and transparent from idea to impact.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.title} data-animate="process" className="rounded-2xl border bg-card shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

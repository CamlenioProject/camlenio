"use client";
import React from "react";
import Hero from "./components/hero";
import { Features } from "./components/features";
import { DashboardPreview } from "./components/dashboard-preview";
import { Testimonials } from "./components/testimonials";
import { CTA } from "./components/cta-section";

export default function BillingSoftware() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <DashboardPreview />
      <Testimonials />
      <CTA />
    </div>
  );
}

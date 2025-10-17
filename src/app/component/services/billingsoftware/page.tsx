"use client";
import React from "react";
import Hero from "@/app/components/billingsoftware/hero";
import { Features } from "@/app/components/billingsoftware/features";
import { DashboardPreview } from "@/app/components/billingsoftware/dashboard-preview";
import { Testimonials } from "@/app/components/billingsoftware/testimonials";
import { CTA } from "@/app/components/billingsoftware/cta-section";

export default function BillingSoftware() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <DashboardPreview />
      <Testimonials/>
      <CTA/>
    </div>
  );
}

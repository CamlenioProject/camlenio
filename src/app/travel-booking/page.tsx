import React from "react";
import TravelHero from "./components/TravelHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const TravelShowcase = dynamic(() => import("./components/TravelShowcase"), { ssr: true });
const TravelFeatures = dynamic(() => import("./components/TravelFeatures"), { ssr: true });
const CTA = dynamic(() => import("../components/cta"), { ssr: true });

export const metadata: Metadata = {
  title: "Travel Booking Software Solutions | Camlenio Software",
  description: "Build smart, secure travel booking software with Camlenio. Customized B2B travel software, mobile apps, and online booking platforms developed to facilitate processes and support business growth in Jaipur.",
  keywords: [
    "Travel Booking Software Solutions",
    "Travel Booking Software Development Company in Jaipur",
    "B2B Travel Software",
    "Online Booking Platforms"
  ]
};

export default function TravelBookingPage() {
  return (
    <main className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden ">
      <TravelHero />
      <TravelShowcase />
      <TravelFeatures />
      <CTA
        title="Ready to Grow Your Travel Business?"
        highlightedTitle="Travel Business"
        subtitle="Partner with Camlenio for professional travel booking solutions tailored to your business goals. If you require a complete B2B Travel portal or a custom application, our expertise is ready to develop the perfect platforms for you."
        buttontext="Contact Us"
      />
    </main>
  );
}

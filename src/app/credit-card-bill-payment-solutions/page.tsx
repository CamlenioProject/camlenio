import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Credit Card Bill Payment Solutions for Businesses | Camlenio",
  description: "Simplify your credit card bill collection process with Camlenio's advanced, secure, and user-friendly Credit Card Bill Payment software & APIs in India.",
};

export default function CreditCardBillPaymentPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <Intro />
      <Benefits />
      <Solutions />
      <WhyChoose />
      <CTA
        title={"Get Started With Credit Card Bill Payment Solutions Today!"}
        highlightedTitle={"Credit Card Bill Payment Solutions"}
        subtitle={
          "Looking to launch a secure and scalable Credit Card Bill Payment platform? Partner with Camlenio and transform your payment services with advanced fintech solutions. Get in touch with us today for a customized solution and take your business to the next level."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}

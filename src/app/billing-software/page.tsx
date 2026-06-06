"use client";
import React from "react";
import Hero from "./components/hero";
import Intro from "./components/Intro";
import Benefits from "./components/Benefits";
import WhyChoose from "./components/WhyChoose";
import Solutions from "./components/Solutions";
import CTA from "../components/cta";

export default function BillingSoftware() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <Intro />
      <Benefits />
      <Solutions />
      <WhyChoose />
      <CTA
        title={"Transform Your Billing Process With Camlenio!"}
        highlightedTitle={"Billing Process"}
        subtitle={
          "Looking for a reliable billing software development company in Jaipur? Camlenio offers smart and secure billing solutions that help businesses grow faster. Contact us today to build customized billing software for your business goals."
        }
        buttontext={"Get a Free Quote"}
      />
    </div>
  );
}

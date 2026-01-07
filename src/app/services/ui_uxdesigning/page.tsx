"use client";
import Hero from "./components/hero";
import UIDesign from "./components/Uidesign/page";
import UiUxImportance from "./components/Uiuximportance/page";
import UxDesign from "./components/Uxdesign/page";
import CTA from "@/app/components/cta";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <UIDesign />
      <UxDesign />
      <UiUxImportance />
      <CTA
        title={"Let’s Build Software That Works for You"}
        highlightedTitle={"Build Software"}
        subtitle={
          "Looking for a software solution that truly matches your business needs?. Contact Camlenio Software Pvt. Ltd. today for a free consultation and demo."
        }
        buttontext={"Book A Free Demo"}
      />
    </div>
  );
}

"use client";
import Hero from "./components/hero";
import UIDesign from "./components/ui_design";
import UiUxImportance from "./components/ui_ux_importance";
import UxDesign from "./components/ux_design";
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

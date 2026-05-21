import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  // Global GSAP defaults for premium feel
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8
  });
  
  // Optimization for high-frequency updates
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, ScrollToPlugin, useGSAP };

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothScrolling() {
  useEffect(() => {
    let scrollTween: gsap.core.Tween | null = null;
    let targetScroll = window.scrollY;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.5;
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
      );

      if (scrollTween) scrollTween.kill();

      scrollTween = gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
        onUpdate: () => {
          targetScroll = window.scrollY;
        },
      });
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTween) scrollTween.kill();
    };
  }, []);

  return null;
}

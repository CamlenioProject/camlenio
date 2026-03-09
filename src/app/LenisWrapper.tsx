"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

interface Props {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      lerp: 0.05,
    });

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    window.scrollTo(0, 0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [pathname]);

  return <>{children}</>;
}

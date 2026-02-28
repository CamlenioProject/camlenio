"use client";

import { LazyMotion, domMax } from "framer-motion";

export const MotionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domMax}>
      {children}
    </LazyMotion>
  );
};

"use client";

import { cn } from "../../../lib/utils";
import React, { useRef } from "react";
import { motion, useAnimate } from "framer-motion";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag"> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const loaderRef = useRef<SVGSVGElement>(null);
  const checkRef = useRef<SVGSVGElement>(null);

  const animateLoading = async () => {
    if (!loaderRef.current) return;
    await animate(
      loaderRef.current,
      { opacity: 1, scale: 1, width: "20px" },
      {
        duration: 0.2,
        onPlay: () => (loaderRef.current!.style.display = "block"),
      }
    );
  };

  const animateSuccess = async () => {
    if (!loaderRef.current || !checkRef.current) return;
    await animate(
      loaderRef.current,
      { opacity: 0, scale: 0, width: "0px" },
      {
        duration: 0.2,
        onComplete: () => (loaderRef.current!.style.display = "none"),
      }
    );
    await animate(
      checkRef.current,
      { opacity: 1, scale: 1, width: "20px" },
      {
        duration: 0.2,
        onPlay: () => (checkRef.current!.style.display = "block"),
      }
    );
    await animate(
      checkRef.current,
      { opacity: 0, scale: 0, width: "0px" },
      {
        delay: 2,
        duration: 0.2,
        onComplete: () => (checkRef.current!.style.display = "none"),
      }
    );
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await animateLoading();
    await props.onClick?.(event);
    await animateSuccess();
  };

  return (
    <button
      ref={scope}
      className={cn(
        "flex min-w-[120px] items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 font-medium text-white transition duration-200",
        className
      )}
      {...props}
      onClick={handleClick}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader ref={loaderRef} />
        <CheckIcon ref={checkRef} />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </button>
  );
};

const Loader = React.forwardRef<SVGSVGElement>((_, ref) => (
  <motion.svg
    ref={ref}
    initial={{ opacity: 0, scale: 0, width: 0 }}
    style={{ display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <motion.path
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      d="M12 3a9 9 0 1 0 9 9"
    />
  </motion.svg>
));
Loader.displayName = "Loader";

const CheckIcon = React.forwardRef<SVGSVGElement>((_, ref) => (
  <motion.svg
    ref={ref}
    initial={{ opacity: 0, scale: 0, width: 0 }}
    style={{ display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l2 2l4 -4" />
  </motion.svg>
));
CheckIcon.displayName = "CheckIcon";

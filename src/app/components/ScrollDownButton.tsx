"use client";

import React from "react";
import { RiScrollToBottomLine } from "react-icons/ri";

interface ScrollDownButtonProps {
  targetId: string;
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetId,
  className,
}) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-3xl text-gray-700  cursor-pointer hidden md:block animate-bounce [animation-duration:10s] ${className}`}
      aria-label="Scroll down"
    >
      <RiScrollToBottomLine />
    </button>
  );
};

export default ScrollDownButton;

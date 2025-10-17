"use client";

import { CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  highlight?: string;
  highlightClass?: string;
  className?: string;
  once?: boolean;
  amount?: number;
  style?: CSSProperties;
  highlightStyle?: CSSProperties;
}

export default function AnimatedText({
  text,
  highlight,
  highlightClass = "text-orange-500",
  className = "text-4xl md:text-6xl font-bold",
  once = true,
  amount = 0.4,
  style,
  highlightStyle,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span span");

    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.01,
        scrollTrigger: {
          trigger: textRef.current,
          start: `top ${amount * 100}%`,
          toggleActions: once ? "play none none none" : "play reset play reset",
        },
      }
    );
  }, [once, amount]);
  let parts: { text: string; isHighlight: boolean }[] = [];
  if (highlight && text.includes(highlight)) {
    const before = text.split(highlight)[0];
    const after = text.split(highlight)[1];
    if (before) parts.push({ text: before, isHighlight: false });
    parts.push({ text: highlight, isHighlight: true });
    if (after) parts.push({ text: after, isHighlight: false });
  } else {
    parts = [{ text, isHighlight: false }];
  }

  return (
    <h1 ref={textRef} style={style} className={className}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`inline-block whitespace-pre ${
            part.isHighlight ? highlightClass : ""
          }`}
          style={part.isHighlight ? highlightStyle : undefined}
        >
          {part.text.split("").map((letter, j) => (
            <span key={j} className="inline-block opacity-0">
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

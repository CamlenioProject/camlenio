"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowPathIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface CaptchaChar {
  char: string;
  rotation: number;
  opacity: number;
  color: string;
  fontSize: number;
  fontWeight: string;
  fontFamily: string;
  marginRight: string;
}

interface CustomCaptchaProps {
  onValidate: (isValid: boolean) => void;
  className?: string;
}

export default function CustomCaptcha({ onValidate, className }: CustomCaptchaProps) {
  const [captchaData, setCaptchaData] = useState<CaptchaChar[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const generateCaptcha = useCallback(() => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789"; // Removed ambiguous chars like I, l, 1, O, 0
    const length = 6;
    const newCaptchaData: CaptchaChar[] = [];

    const colors = [
      "text-gray-800",
      "text-gray-600",
      "text-orange-600",
      "text-blue-600",
      "text-green-600",
      "text-purple-600",
      "text-red-600",
      "text-teal-600",
    ];

    const fontWeights = ["font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold"];
    const fontFamilies = ["font-sans", "font-serif", "font-mono"];

    for (let i = 0; i < length; i++) {
      newCaptchaData.push({
        char: chars.charAt(Math.floor(Math.random() * chars.length)),
        rotation: Math.floor(Math.random() * 80) - 40, // Reduced rotation range slightly for better legibility but still hard
        opacity: Math.max(0.4, Math.random()), // Increased min opacity slightly
        color: colors[Math.floor(Math.random() * colors.length)],
        fontSize: Math.floor(Math.random() * 12) + 24, // 24px - 36px
        fontWeight: fontWeights[Math.floor(Math.random() * fontWeights.length)],
        fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
        marginRight: `${Math.floor(Math.random() * 8) - 4}px` // Negative margin for overlap
      });
    }



    setCaptchaData(newCaptchaData);
    setInputValue("");
    setStatus("idle");
    onValidate(false);
  }, [onValidate]);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const checkString = captchaData.map((c) => c.char).join("");
    if (value === checkString) {
      setStatus("success");
      onValidate(true);
    } else {
      setStatus(value.length === checkString.length ? "error" : "idle");
      onValidate(false);
    }
  };

  return (
    <div className={clsx("flex flex-col sm:flex-row items-center gap-3 w-full", className)}>

      {/* Input Field */}
      <div className="relative w-full sm:flex-1">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type the characters"
          className={clsx(
            "w-full px-4 py-2.5 rounded-xl border outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm",
            status === "success"
              ? "border-green-500 ring-1 ring-green-500 focus:border-green-500"
              : status === "error"
                ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-orange-200"
                : "border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
          )}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300">
          {status === "success" && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
          {status === "error" && <XCircleIcon className="w-6 h-6 text-red-500" />}
        </div>
      </div>

      {/* Captcha Block */}
      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
        {/* Captcha Display */}
        <div
          className="relative flex items-center justify-center p-2 px-4 bg-gray-50 border border-gray-300 rounded-xl shadow-inner select-none overflow-hidden h-[46px] min-w-[140px]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), repeating-linear-gradient(45deg, #e5e7eb 25%, #f9fafb 25%, #f9fafb 75%, #e5e7eb 75%, #e5e7eb)',
            backgroundPosition: '0 0, 10px 10px',
            backgroundSize: '20px 20px'
          }}
        >


          <div className="flex items-center justify-center z-10">
            {captchaData.map((item, index) => (
              <span
                key={index}
                className={clsx(
                  "transition-all duration-300 pointer-events-none drop-shadow-sm filter blur-[0.4px]",
                  item.color,
                  item.fontWeight,
                  item.fontFamily
                )}
                style={{
                  transform: `rotate(${item.rotation}deg) translateY(${Math.random() * 4 - 2}px)`,
                  opacity: item.opacity,
                  fontSize: `${item.fontSize}px`,
                  marginRight: item.marginRight,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                {item.char}
              </span>
            ))}
          </div>

          {/* Noise Dots Overly */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '3px 3px' }}></div>

        </div>

        {/* Refresh Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            generateCaptcha();
          }}
          type="button"
          className="p-2.5 rounded-full hover:bg-gray-100 ring-1 ring-gray-200 bg-white text-gray-500 hover:text-orange-500 transition-all focus:outline-none shrink-0 shadow-sm active:scale-95 cursor-pointer"
          title="Refresh Captcha"
        >
          <ArrowPathIcon className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

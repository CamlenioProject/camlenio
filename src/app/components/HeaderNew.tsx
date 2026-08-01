"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, useScroll, useMotionValueEvent, m, LazyMotion, domMax } from "framer-motion";
import {
  ChevronDownIcon,
  PhoneIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { MobileDropdown } from "./MobileDropdown";

// Import Navigation Config
import { navItems, availablePages, socialIcons } from "@/config/navigation";

// Import Sub-Components
import { ServicesMegaMenu } from "./Header/ServicesMegaMenu";
import { FintechDropdown } from "./Header/FintechDropdown";
import { IndustriesDropdown } from "./Header/IndustriesDropdown";
import { CompanyDropdown } from "./Header/CompanyDropdown";

export default function HeaderNew() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredNav(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 200);
  };

  // Optimized Scroll Logic
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    setHoveredNav(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = latest - previous;
    if (latest > 100 && diff > 0) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }
    if (latest < 50) {
      setIsTop(true);
      setHidden(false);
    } else {
      setIsTop(false);
    }
  });

  const isPageWithSolidHeader = pathname === "/portfolio";

  return (
    <LazyMotion features={domMax}>
      <m.header
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={clsx(
          "fixed top-0 inset-x-0 z-[999] transition-all duration-500 ease-in-out bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100",
          (isPageWithSolidHeader || !isTop) ? "bg-orange-100 shadow-md" : "bg-transparent lg:bg-orange-100"
        )}
      >
        {/* Navbar Container */}
        <div className={clsx(
          "w-full flex items-center relative z-[1001] transition-all duration-500",
          isTop ? "h-20" : "h-16"
        )}>
          <div className="w-full px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <Image
                src="/logo.png"
                alt="Camlenio"
                width={150}
                height={150}
                className="w-28 sm:w-36 h-auto"
                style={{ height: "auto" }}
                unoptimized
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 relative h-full">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="cursor-pointer relative flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-orange-200/40 transition-all duration-300 group">
                    {item.dropdown ? (
                      <div className="text-[14px] text-gray-800 flex items-center gap-1.5">
                        {item.title}
                        <ChevronDownIcon className={clsx("w-3 h-3 stroke-[3] transition-transform duration-300", hoveredNav === item.title ? "-rotate-180 text-orange-600" : "text-gray-400")} />
                      </div>
                    ) : (
                      <Link href={item.href} className="text-[14px] font-semibold text-gray-800">
                        {item.title}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-full text-[14px] font-bold shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all duration-300 active:scale-95"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>

              {/* Hamburger */}
              <label className="hamburger lg:hidden p-2 text-black relative z-[1002]">
                <input type="checkbox" checked={mobileMenuOpen} onChange={() => setMobileMenuOpen(!mobileMenuOpen)} />
                <svg viewBox="0 0 32 32" className="h-8 w-8">
                  <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdowns */}
        <AnimatePresence>
          {hoveredNav && navItems.find(i => i.title === hoveredNav)?.dropdown && (
            <m.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 5, x: "-50%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-1/2 z-[2000] w-auto"
              style={{ top: isTop ? "80px" : "64px" }}
              onMouseEnter={() => handleMouseEnter(hoveredNav)}
              onMouseLeave={handleMouseLeave}
            >
              {(() => {
                const item = navItems.find(i => i.title === hoveredNav);
                if (hoveredNav === "Services") return <ServicesMegaMenu baseHref={item!.href} />;
                if (hoveredNav === "Fintech Software") return <FintechDropdown item={item} baseHref={item!.href} />;
                if (["Solutions", "Hire Talent", "Industries"].includes(hoveredNav)) return <IndustriesDropdown item={item} baseHref={item!.href} />;
                if (hoveredNav === "Our Company") return <CompanyDropdown item={item} baseHref={item!.href} />;
                return null;
              })()}
            </m.div>
          )}
        </AnimatePresence>
      </m.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[998] bg-white lg:hidden overflow-y-auto pt-24 px-6 pb-12"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <MobileDropdown
                      item={item}
                      isOpen={activeMobileTab === item.title}
                      onToggle={() => setActiveMobileTab(activeMobileTab === item.title ? null : item.title)}
                      closeMenu={() => setMobileMenuOpen(false)}
                      availablePages={availablePages}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold py-4 border-b border-gray-100 block"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

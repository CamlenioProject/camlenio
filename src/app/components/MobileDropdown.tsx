"use client";

import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { safeLink } from "../../../lib/utils";

interface MobileDropdownProps {
  item: any;
  isOpen: boolean;
  onToggle: () => void;
  closeMenu: () => void;
  availablePages: string[];
}

export const MobileDropdown = ({
  item,
  isOpen,
  onToggle,
  closeMenu,
  availablePages,
}: MobileDropdownProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-left group border-b border-gray-200"
      >
        <span
          className={clsx(
            "text-[18px] md:text-[20px] font-medium transition-colors",
            isOpen ? "text-orange-600" : "text-black"
          )}
        >
          {item.title}
        </span>
        <span
          className={clsx(
            "text-xl transition-transform duration-300",
            isOpen ? "rotate-45" : "rotate-0"
          )}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-6 pt-4 space-y-4 bg-gray-50/30 rounded-b-2xl mb-4">
              {item.isComplex ? (
                Object.values(item.items).map((col: any) => (
                  <div key={col.title} className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 pl-2 border-l-2 border-orange-200">
                      {col.title}
                    </div>
                    {col.items.map((sub: any) => {
                      const rawHref = sub.href.startsWith("/")
                        ? sub.href
                        : `/${item.href}/${sub.href}`;
                      const linkHref = safeLink(rawHref, availablePages);
                      const isUnavailable = linkHref === "/coming-soon";
                      return (
                        <Link
                          key={sub.title}
                          href={linkHref}
                          onClick={!isUnavailable ? closeMenu : undefined}
                          className={clsx(
                            "block text-[14px] py-1.5 pl-4 transition-colors",
                            isUnavailable
                              ? "text-gray-400 opacity-50"
                              : "text-gray-600 hover:text-black"
                          )}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                ))
              ) : (
                (item.items as any[]).map((sub: any, i: number) => {
                  const title = typeof sub === "string" ? sub : sub.title;
                  const href =
                    typeof sub === "string"
                      ? `/${item.href}/${sub
                        .replace(/\s+/g, "")
                        .toLowerCase()}`
                      : sub.href;
                  const linkHref = safeLink(href, availablePages);
                  const isUnavailable = linkHref === "/coming-soon";
                  return (
                    <Link
                      key={i}
                      href={linkHref}
                      onClick={!isUnavailable ? closeMenu : undefined}
                      className={clsx(
                        "block text-[14px] py-1.5 pl-4 transition-colors",
                        isUnavailable
                          ? "text-gray-400 opacity-50"
                          : "text-gray-600 hover:text-black"
                      )}
                    >
                      {title}
                    </Link>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { safeLink } from "../../../lib/utils";

const availablePages = [
  "/portfolio",
  "/services/customizedsoftware",
  "/services/crmsoftware",
  "/services/ecommerceportel",
  "/services/fintechsoftware",
  // "/services/grocerysoftware",
  "/services/realestatesoftware",
  "/services/mlmsoftware",
  "/services/hrmssoftware",
  "/services/hotelmanagement",
  // "/services/androidappdevelopment",
  // "/services/fullstackdevelopment",
  // "/services/ui_uxdesigning",
  // "/services/webdevelopment",
  // "/services/billingsoftware",
  // "/services/softwaredevelopment",
  // "/services/mobileappdevelopment",
  // "/services/iosappdevelopment",
  // "/services/iotappdevelopment",
  // "/services/ondemandappdevelopment",
  // "/services/hybridappdevelopment",
  "https://blogs.camlenio.com",
  "/about",
  "/careers",
  "/contact",
  // "/testimonials",
  // "/fintechsoftware/aepsservices",
  // "/fintechsoftware/rechargeservices",
  // "/fintechsoftware/bbpsservices",
  // "/fintechsoftware/dmtservices",
  // "/fintechsoftware/uti(pancard)services",
  // "/fintechsoftware/upipayoutservices",
  // "/fintechsoftware/m-atmservice",
  // "/fintechsoftware/m-posservice",
  // "/fintechsoftware/creditcardbillpaymentservice",
  // "/fintechsoftware/fasttagrechargeservice",
  // "/fintechsoftware/dynamicofflineservices",
  // "/services/neobanking",
  // "/services/healthcaresoftware",
  // "/services/artbankingsoftware",
  // "/services/schoolmanagementsoftware",
  // "/services/onlineeducationsoftware",
  // "/services/learningmanagementsoftware",
  // "/services/travelbookingsoftware",
  // "/services/fooddeliverysoftware",
  // "/services/restaurantmanagement",
  // "/services/employeetracking",
  // "/services/resellersoftware",
  // "/services/inventorymanagement",
  // "/services/cabbooking",
  // "/press",
  // "/hireateam/hiredevelopers",
  // "/hireateam/hirefront-enddevelopers",
  // "/hireateam/hireback-enddevelopers",
  // "/hireateam/hirecmsdevelopers",
  // "/hireateam/hireaiengineers",
  // "/hireateam/hiredigitalmarketingexperts",
  // "/hireateam/hiregraphicdesigners",
];

interface MobileDropdownItem {
  href: string;
  items: Record<string, string[]>;
}

export const MobileDropdown = ({
  item,
  setMobileMenuOpen,
}: {
  item: MobileDropdownItem;
  setMobileMenuOpen: (isOpen: boolean) => void;
}) => {
  const servicesObj = item.items as Record<string, string[]>;
  const tabs = Object.keys(servicesObj);
  const [activeMobileTab, setActiveMobileTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap border-b border-gray-300 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveMobileTab(tab)}
            className={clsx(
              "p-2 text-sm font-medium",
              activeMobileTab === tab
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600"
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div>
        {(servicesObj[activeMobileTab] || []).map((link) => (
          <Link
            key={link}
            href={safeLink(
              `/component/${item.href}/${link
                .replace(/\s+/g, "")
                .toLowerCase()}`,
              availablePages
            )}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-gray-700 hover:text-gray-900 p-2 rounded hover:bg-orange-50"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

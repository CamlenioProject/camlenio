"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, useScroll, useMotionValueEvent, m, LazyMotion, domMax } from "framer-motion";
import {
  XMarkIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  CodeBracketIcon,
  CubeIcon,
  TruckIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  PhoneIcon,
  Bars3BottomRightIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  CakeIcon,
  ComputerDesktopIcon,
  ServerIcon,
  FingerPrintIcon,
  BoltIcon,
  QrCodeIcon,
  SignalIcon
} from "@heroicons/react/24/outline";
import { safeLink } from "../../../lib/utils";
import clsx from "clsx";
import { MobileDropdown } from "./MobileDropdown";

// --- Data Constants ---
const availablePages = [
  "/company/portfolio",
  "/solutions/customized-software",
  "/services/frontend-development",
  "/solutions/crm-software",
  "/industries/ecommerce-portal",
  // "/industries/grocery-software",
  // "/industries/real-estate-software",
  "/solutions/mlm-software",
  "/solutions/hrms-software",
  "/industries/fintech-softwares",
  "/industries/hotel-management",
  // "/services/android-app-development",
  // "/services/full-stack-development",
  // "/services/ui-ux-designing",
  // "/services/web-development",
  // "/solutions/billing-software",
  // "/services/software-development",
  // "/services/mobile-app-development",
  // "/services/ios-app-development",
  // "/services/iot-app-development",
  // "/services/ondemand-app-development",
  // "/services/hybrid-app-development",
  "https://blogs.camlenio.com",
  "/company/about",
  "/careers",
  "/contact",
  // "/testimonials",
  // "/fintech-software/aeps-services",
  // "/fintech-software/recharge-services",
  // "/fintech-software/bbps-services",
  // "/fintech-software/dmt-services",
  // "/fintech-software/uti-pancard-services",
  // "/fintech-software/m-atm-service",
  "/fintech-software/imps-upi-payout-services",
  // "/fintech-software/m-pos-service",
  // "/fintech-software/credit-card-bill-payment-service",
  // "/fintech-software/fasttag-recharge-service",
  // "/fintech-software/dynamic-offline-services",
  // "/services/neobanking",
  // "/services/healthcare-software",
  // "/services/art-banking-software",
  // "/services/school-management-software",
  // "/services/online-education-software",
  // "/services/learning-management-software",
  // "/industries/travel-booking",
  // "/services/food-delivery-software",
  // "/services/restaurant-management",
  // "/services/employee-tracking",
  // "/services/reseller-software",
  // "/services/inventory-management",
  // "/services/cab-booking",
  "/company/press-events",
  // "/hireateam/hire-developers",
  // "/hireateam/hire-front-end-developers",
  // "/hireateam/hire-back-end-developers",
  // "/hireateam/hire-cms-developers",
  // "/hireateam/hire-ai-engineers",
  // "/hireateam/hire-digital-marketing-experts",
  // "/hireateam/hire-graphic-designers",
];

const servicesMenuData = [

  {
    title: "App Development",
    items: [
      { title: "Android Mobile App Development", href: "android-app-development", icon: DevicePhoneMobileIcon },
      { title: "IPhone Mobile App Development", href: "ios-app-development", icon: DevicePhoneMobileIcon },
      { title: "IoT App Development", href: "iot-app-development", icon: CpuChipIcon },
      { title: "On-Demand App Development", href: "ondemand-app-development", icon: TruckIcon },
      { title: "Hybrid App Development", href: "hybrid-app-development", icon: CodeBracketIcon },
    ]
  },
  {
    title: "Custom Web Development",
    items: [
      { title: "Web Application Development", href: "web-development", icon: GlobeAltIcon },
      { title: "Frontend Development", href: "frontend-development", icon: CodeBracketIcon },
      { title: "Backend Development", href: "backend-development", icon: ServerIcon },
      { title: "Full-Stack Development", href: "full-stack-development", icon: CommandLineIcon },
      { title: "PWA Solutions", href: "pwa-solutions", icon: DevicePhoneMobileIcon },
    ]
  },
  {
    title: "Logo & Graphic Designing",
    image: "/header/logo-graphic-designing.png",
    items: []
  },
  {
    title: "Digital Marketing",
    image: "/header/fintech-software.jpg",
    items: []
  }
];


const navItems = [
  {
    title: "Our Company",
    href: "company",
    dropdown: true,
    items: [
      { title: "About Us", href: "/company/about", sub: "About our company", icon: InformationCircleIcon },
      { title: "Portfolio", href: "/company/portfolio", sub: "Explore our work", icon: BriefcaseIcon },
      { title: "Testimonials", href: "/testimonials", sub: "What clients say", icon: ChatBubbleLeftRightIcon },
      { title: "Press & Events", href: "/company/press-events", sub: "News & Events", icon: GlobeAltIcon },
      { title: "Blog", href: "https://blogs.camlenio.com", sub: "Latest insights", icon: NewspaperIcon },
    ],
  },
  {
    title: "Services",
    href: "services",
    dropdown: true,
    isComplex: true,
    items: servicesMenuData
  },
  {
    title: "Industries",
    href: "industries",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Finance & Banking",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Neo-Banking", href: "neobanking", desc: "Next-gen digital banking solutions", icon: CurrencyRupeeIcon },
          { title: "Fintech Softwares", href: "fintech-softwares", desc: "Comprehensive financial tech", icon: CreditCardIcon },
        ]
      },
      {
        title: "Commerce & Retail",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "E-commerce Software", href: "ecommerce-portal", desc: "Robust online store platforms", icon: ShoppingBagIcon },
          { title: "Grocery Software", href: "grocery-software", desc: "Delivery & management systems", icon: ShoppingBagIcon },
          { title: "Food Delivery Software", href: "food-delivery-software", desc: "Order tracking & logistics", icon: CakeIcon },
        ]
      },
      {
        title: "Healthcare",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Healthcare Software", href: "healthcare-software", desc: "Patient management systems", icon: UserGroupIcon },
          { title: "ART Banking Software", href: "art-banking-software", desc: "Specialized fertility tools", icon: UserGroupIcon }
        ]
      },
      {
        title: "Education",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "School Management", href: "school-management-software", desc: "Streamlined administration", icon: AcademicCapIcon },
          { title: "Online Education", href: "online-education-software", desc: "Virtual classrooms & LMS", icon: AcademicCapIcon },
          { title: "Learning Management", href: "learning-management-software", desc: "Course delivery platforms", icon: AcademicCapIcon }
        ]
      },
      {
        title: "Travel & Hospitality",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Travel Booking", href: "travel-booking", desc: "Global reservation engines", icon: RocketLaunchIcon },
          { title: "Hotel Management", href: "hotel-management", desc: "Property management systems", icon: BuildingOfficeIcon },
          { title: "Cab Booking", href: "cab-booking", desc: "Ride-hailing solutions", icon: TruckIcon }
        ]
      },
      {
        title: "Real Estate",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Real Estate Software", href: "real-estate-software", desc: "Property listings & CRM", icon: HomeIcon }
        ]
      },
    ],
  },
  {
    title: "Solutions",
    href: "solutions",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Human Resources",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Employee Tracking", href: "employee-tracking", desc: "Monitor workforce efficiency", icon: UserGroupIcon },
          { title: "HRMS Software", href: "hrms-software", desc: "Complete HR management", icon: BriefcaseIcon },
        ]
      },
      {
        title: "Finance & Commerce",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Billing Software", href: "billing-software", desc: "Invoicing & accounts", icon: CreditCardIcon },
          { title: "Reseller Software", href: "reseller-software", desc: "Manage reseller networks", icon: UserGroupIcon },
        ]
      },
      {
        title: "Customer Relations",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "CRM Software", href: "crm-software", desc: "Customer relationship tools", icon: UserGroupIcon },
          { title: "MLM Software", href: "mlm-software", desc: "Multi-level marketing", icon: ChartBarIcon },
        ]
      },
      {
        title: "Operations & Inventory",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Inventory Management", href: "inventory-management", desc: "Stock tracking systems", icon: BriefcaseIcon },
        ]
      },
      {
        title: "Hospitality & Food",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Restaurant Management", href: "restaurant-management", desc: "POS & kitchen mgmt", icon: ShoppingBagIcon },
        ]
      },
      {
        title: "Software & Transport",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Customized Software", href: "customized-software", desc: "Tailored IT solutions", icon: CommandLineIcon },
          { title: "Cab Booking", href: "cab-booking", desc: "Taxi dispatch system", icon: TruckIcon },
        ]
      },
    ],
  },

  {
    title: "Fintech Software",
    href: "fintech-software",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Banking Services",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "AEPS Services", href: "aeps-services", desc: "High secure payments", icon: FingerPrintIcon },
          { title: "M-ATM Service", href: "m-atm-service", desc: "Mobile ATM Access", icon: DevicePhoneMobileIcon },
        ]
      },
      {
        title: "Money Transfer",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "DMT Services", href: "dmt-services", desc: "Instant money transfer", icon: CurrencyRupeeIcon },
          { title: "IMPS UPI Payout Services", href: "imps-upi-payout-services", desc: "Seamless UPI payments", icon: QrCodeIcon },
        ]
      },
      {
        title: "Payment Systems",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Credit Card Bill Payment", href: "credit-card-bill-payment-service", desc: "Easy bill settlements", icon: CreditCardIcon },
          { title: "M-POS Service", href: "m-pos-service", desc: "Point of sale units", icon: CreditCardIcon },
        ]
      },
      {
        title: "Utility Payments",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "BBPS Services", href: "bbps-services", desc: "Bill payment system", icon: BuildingOfficeIcon },
          { title: "UTI (Pancard) Services", href: "uti-pancard-services", desc: "Pan card services", icon: InformationCircleIcon },
        ]
      },
      {
        title: "Recharge Solutions",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Recharge Services", href: "recharge-services", desc: "Mobile & DTH", icon: BoltIcon },
          { title: "Fasttag Recharge Service", href: "fasttag-recharge-service", desc: "Toll payments", icon: TruckIcon },
        ]
      },
      {
        title: "Offline & POS",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Dynamic Offline Services", href: "dynamic-offline-services", desc: "Offline transactions", icon: SignalIcon },
        ]
      },
    ],
  },
  {
    title: "Hire Talent",
    href: "hireateam",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Dedicated Teams",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Developers", href: "hiredevelopers", desc: "Build your dream team", icon: CodeBracketIcon },
        ]
      },
      {
        title: "Web Engineering",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Front-End Developers", href: "hirefront-end-developers", desc: "UI/UX implementation", icon: ComputerDesktopIcon },
          { title: "Hire Back-End Developers", href: "hireback-end-developers", desc: "Robust server logic", icon: ServerIcon },
        ]
      },
      {
        title: "CMS Solutions",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire CMS Developers", href: "hirecmsdevelopers", desc: "WordPress & more", icon: CommandLineIcon },
        ]
      },
      {
        title: "Advanced Tech",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire AI Engineers", href: "hireaiengineers", desc: "AI & ML integration", icon: CpuChipIcon },
        ]
      },
      {
        title: "Digital Marketing",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Digital Marketing Experts", href: "hiredigitalmarketingexperts", desc: "Grow your reach", icon: ChartBarIcon },
        ]
      },
      {
        title: "Creative Design",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Graphic Designers", href: "hiregraphicdesigners", desc: "Creative visuals", icon: PaintBrushIcon },
        ]
      },
    ],
  },

];

const socialIcons = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/camleniosoftware/mentions/?_rdr",
  },
  {
    title: "Twitter",
    href: "https://x.com/camlenio",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/camleniosoftware/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/posts/camlenio_camlenio_softwaredevelopment",
  },
];

// --- Components ---



const ServicesMegaMenu = ({ baseHref }: { baseHref: string }) => {
  const [activeTitle, setActiveTitle] = useState<string>(servicesMenuData[0].title);
  const activeData = servicesMenuData.find(d => d.title === activeTitle);

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex w-[90vw] max-w-[1200px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1),0_0_0_1px_rgba(249,115,22,0.1)] p-3 mx-auto ring-1 ring-orange-100/50 border border-orange-100/50"
    >
      {/* Sidebar - Clean & Modern */}
      <div className="w-[28%] py-4 flex flex-col gap-1 pr-3">
        {servicesMenuData.map((group) => (
          <div
            key={group.title}
            onClick={() => setActiveTitle(group.title)}
            className={clsx(
              "px-5 py-4 text-[15px] cursor-pointer transition-all duration-300 rounded-xl flex items-center justify-between group relative isolate",
              activeTitle === group.title
                ? "bg-white text-orange-600 font-bold shadow-sm ring-1 ring-orange-100"
                : "text-gray-600 font-medium hover:text-orange-700 hover:bg-orange-100/50"
            )}
          >
            <span className="relative z-10">{group.title}</span>
            {/* Active Indicator & Transition */}
            {activeTitle === group.title && (
              <m.div
                layoutId="activeGlow"
                className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <ChevronRightIcon className={clsx("w-4 h-4 transition-all duration-300 relative z-10", activeTitle === group.title ? "text-orange-500 translate-x-0 opacity-100" : "opacity-0 -translate-x-2")} />
          </div>
        ))}
      </div>

      {/* Vertical Sleek Divider */}
      <div className="w-px bg-gradient-to-b from-transparent via-orange-200/30 to-transparent my-4" />

      {/* Right Content - Advanced Cards & Grids */}
      <div className="flex-1 p-6 pl-8 relative min-h-[440px]">
        <AnimatePresence mode="wait">
          <m.div
            key={activeTitle}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full w-full flex flex-col"
          >
            {/* Dynamic Header - Conditional */}
            {(activeTitle === "App Development" || activeTitle === "Custom Web Development") && (
              <div className="mb-6 p-6 rounded-2xl bg-orange-50/50 border border-orange-200/60 flex items-center justify-between relative overflow-hidden">
                {/* Decorative Background Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    {activeTitle}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-1">Explore our professional solutions</p>
                </div>

                {/* Decorative Object Right of Title */}
                <div className="relative z-10 opacity-15 rotate-12 -mr-6 -my-4 pointer-events-none">
                  <CubeIcon className="w-24 h-24 text-orange-600" strokeWidth={0.8} />
                </div>
              </div>
            )}

            {activeData?.items && activeData.items.length > 0 ? (
              <div
                className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 overflow-y-auto overscroll-contain pr-2 max-h-[60vh] custom-scrollbar"
                onWheel={(e) => e.stopPropagation()}
              >
                {activeData.items.map((item, idx) => {
                  const linkHref = safeLink(item.href.startsWith('/') ? item.href : `/${baseHref}/${item.href}`, availablePages);
                  const isUnavailable = linkHref === "/coming-soon";
                  return (
                    <Link
                      key={idx}
                      href={linkHref}
                      className={clsx(
                        "group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 border border-transparent",
                        isUnavailable
                          ? "opacity-40"
                          : "hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(249,115,22,0.15)] hover:ring-1 hover:ring-orange-100"
                      )}
                    >
                      {/* Modern Abstract Icon - Animated */}
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-400 group-hover:text-orange-600 group-hover:bg-orange-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        {item.icon ? (
                          <item.icon className="w-5 h-5 animate-draw" />
                        ) : (
                          <CubeIcon className="w-5 h-5 animate-draw" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-gray-700 group-hover:text-gray-900 font-bold text-[14px] leading-tight transition-colors line-clamp-2">{item.title}</span>
                      </div>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-orange-300 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  );
                })}
              </div>
            ) : (
              // Premium Image View
              <div className="flex-1 w-full relative rounded-2xl overflow-hidden group shadow-lg ring-1 ring-black/5 mt-1">
                <Image
                  src={activeData?.image || "/header/hire-developer.jpg"}
                  alt={activeTitle}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-[2px] bg-orange-500 inline-block" />
                      <p className="text-orange-400 font-bold text-xs tracking-widest uppercase">Featured Category</p>
                    </div>
                    <h3 className="text-white font-bold text-3xl leading-none mb-3 drop-shadow-sm">{activeTitle}</h3>
                    <p className="text-gray-300 text-sm max-w-md line-clamp-2 leading-relaxed opacity-90">
                      Discover our specialized {activeTitle.toLowerCase()} solutions designed to elevate your business with cutting-edge technology and design.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-orange-500 pb-0.5 group/btn cursor-pointer hover:border-white transition-colors">
                      <span>View Details</span>
                      <ArrowUpIcon className="w-3.5 h-3.5 rotate-45 group-hover/btn:rotate-90 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </m.div>
  )
}

const UnifiedGridDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => (
  <div className="flex w-[95vw] max-w-[1240px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] p-8 mx-auto border border-orange-100/50 ring-1 ring-orange-100/50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {item.items.map((sub: any, idx: number) => {
        const title = typeof sub === "string" ? sub : sub.title;
        const href = typeof sub === "string" ? sub.replace(/\s+/g, "").toLowerCase() : sub.href;
        const Icon = sub.icon || CubeIcon;
        const fl = safeLink(href.startsWith("/") ? href : `/${baseHref}/${href}`, availablePages);

        return (
          <Link
            key={idx}
            href={fl}
            className="group flex gap-4 items-center p-3 rounded-xl hover:bg-white hover:shadow-[0_4px_14px_0_rgba(249,115,22,0.1)] hover:ring-1 hover:ring-orange-200/50 transition-all duration-300 border border-transparent hover:border-orange-100"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors shadow-sm">
              <Icon className="w-6 h-6 animate-draw" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px] group-hover:text-orange-700 transition-colors leading-tight">
                {title}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

const CompanyDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => {
  const standardItems = item.items.filter((i: any) => i.title !== "Blog");
  const blogItem = item.items.find((i: any) => i.title === "Blog");

  return (
    <div className="flex w-[75vw] max-w-[950px] bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] mx-auto border border-orange-100/50">
      {/* Left: Main Navigation Grid */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-2 bg-white/40">
        {standardItems.map((sub: any, idx: number) => (
          <Link
            key={sub.title}
            href={sub.href.startsWith("http") ? sub.href : safeLink(sub.href, availablePages)}
            target={sub.href.startsWith("http") ? "_blank" : undefined}
            className="inline-flex items-center gap-3 pl-6 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-orange-100/10 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex-shrink-0 bg-white rounded-xl flex items-center justify-center text-gray-900 shadow-sm ring-1 ring-gray-100 group-hover:scale-110 transition-transform duration-300">
              {sub.icon && <sub.icon className="w-5 h-5 text-orange-500" />}
            </div>
            <div>
              <div className="text-[14px] font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-0.5">{sub.title}</div>
              <div className="text-[12px] text-gray-500 leading-snug">{sub.sub}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: Featured Blog Section */}
      {blogItem && (
        <div className="w-[300px] relative p-6 flex flex-col justify-between overflow-hidden group/blog">
          <div className="absolute inset-0">
            <img
              src="/CompanyDropdown/blog/camlenio_blog_bg.png"
              alt="Blog Background"
              className="w-full h-full object-cover opacity-100 group-hover/blog:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase mb-3 backdrop-blur-sm">
              Blogs
            </span>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">Camlenio Insights</h3>
            <p className="text-orange-50 text-[13px] leading-relaxed mb-4">
              Stay ahead of the curve with our latest articles on technology, design, and innovation.
            </p>
          </div>

          <Link
            href={blogItem.href}
            target="_blank"
            className="relative z-10 inline-flex items-center gap-2 group w-fit mt-2"
          >
            <span className="text-white font-bold text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              Read Our Blog
            </span>
            <ArrowUpIcon className="w-3.5 h-3.5 text-white rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}




const IndustriesDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => (
  <div className="flex w-[95vw] max-w-[1240px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] p-8 mx-auto border border-orange-100/50 ring-1 ring-orange-100/50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 w-full">
      {/* Column 1 */}
      <div className="flex flex-col gap-8">
        {[item.items[0], item.items[1]].map((group: any, idx: number) => (
          <IndustryGroup key={idx} group={group} hideHeader={item.title === "Hire Talent"} baseHref={baseHref} />
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-8">
        {[item.items[2], item.items[3]].map((group: any, idx: number) => (
          <IndustryGroup key={idx} group={group} hideHeader={item.title === "Hire Talent"} baseHref={baseHref} />
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-8">
        {[item.items[4], item.items[5]].map((group: any, idx: number) => (
          <IndustryGroup key={idx} group={group} hideHeader={item.title === "Hire Talent"} baseHref={baseHref} />
        ))}
      </div>
    </div>
  </div>
);



const IndustryGroup = ({ group, hideHeader, baseHref }: { group: any, hideHeader?: boolean, baseHref: string }) => (
  <div className="flex flex-col gap-4">
    {!hideHeader && (
      <div className="flex items-center justify-between">
        <div className={clsx("px-4 py-1.5 rounded-full text-sm font-bold tracking-wide", group.color)}>
          {group.title}
        </div>
        <ArrowUpIcon className="w-4 h-4 text-gray-400 rotate-45" />
      </div>
    )}
    <div className="flex flex-col gap-2">
      {group.items.map((sub: any, subIdx: number) => {
        const linkHref = safeLink(sub.href.startsWith('/') ? sub.href : `/${baseHref}/${sub.href}`, availablePages);
        const isUnavailable = linkHref === "/coming-soon";
        return (
          <Link
            key={subIdx}
            href={linkHref}
            className={clsx(
              "group flex gap-4 items-start p-3 rounded-xl transition-all duration-300 border border-transparent",
              isUnavailable
                ? "opacity-70"
                : "hover:bg-white hover:shadow-[0_4px_14px_0_rgba(249,115,22,0.1)] hover:ring-1 hover:ring-orange-200/50 hover:border-orange-100"
            )}
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors shadow-sm">
              {sub.icon ? <sub.icon className="w-5 h-5 animate-draw" /> : <CubeIcon className="w-5 h-5 animate-draw" />}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px] group-hover:text-orange-700 transition-colors leading-tight mb-0.5">
                {sub.title}
              </span>
              <span className="text-xs text-gray-500 leading-snug font-medium line-clamp-2">
                {sub.desc}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

// --- Main Header ---

export default function HeaderNew() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
  const pathname = usePathname();

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
    <>
      <LazyMotion features={domMax}>
        <m.header
          variants={{
            visible: { y: 0 },
            hidden: { y: 0 },
          }}
          initial="visible"
          animate="visible"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={clsx(
            "fixed top-0 inset-x-0 z-[999] transition-all duration-500 ease-in-out bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove ",
            (isPageWithSolidHeader || !isTop)
              ? "bg-orange-100"
              : "bg-transparent lg:bg-orange-100 "
          )}
        >
          {/* Navbar Container */}
          <div className={clsx(
            "w-full flex items-center relative z-[1001] transition-all duration-500",
            isTop ? "h-18" : "h-16"
          )}>
            <div className="w-full px-6 md:px-8 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-1 relative z-50 flex-shrink-0 group">
                <div className="relative mb-1">
                  <Image
                    src="/logo-icon.png"
                    alt="Camlenio"
                    width={40}
                    height={40}
                    className="w-9 h-auto transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>
                <span className={clsx("flex items-center text-2xl font-bold tracking-tight transition-colors duration-300", isTop ? "text-gray-900" : "text-black")}>
                  {"Camlenio".split("").map((char, index) => {
                    // Replicating specific legacy animations per character
                    let animateProps: any = {};
                    const isLooping = index === 6 || index === 7; // i and o

                    switch (index) {
                      case 0: // C
                        animateProps = {
                          initial: { y: -5, opacity: 0, rotateX: -15, rotateY: -10 },
                          animate: { y: 0, opacity: 1, rotateX: 0, rotateY: 0 },
                          transition: { duration: 0.8, ease: "easeInOut" }
                        };
                        break;
                      case 1: // a
                        animateProps = {
                          initial: { y: 50, opacity: 0, rotateX: -90, transformOrigin: "bottom center" },
                          animate: { y: 0, opacity: 1, rotateX: 0 },
                          transition: { duration: 1, ease: "easeOut" }
                        };
                        break;
                      case 2: // m
                        animateProps = {
                          initial: { x: 0 },
                          animate: { x: [0, 20, 0] },
                          transition: { duration: 1.2, ease: "easeOut", times: [0, 0.6, 1] }
                        };
                        break;
                      case 3: // l (Was missing in legacy, adding simple fade)
                        animateProps = {
                          initial: { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          transition: { duration: 0.5, delay: 0.2 }
                        };
                        break;
                      case 4: // e
                        animateProps = {
                          initial: { y: -30, opacity: 0 },
                          animate: { y: 0, opacity: 1 },
                          transition: { type: "spring", bounce: 0.6, duration: 0.8 }
                        };
                        break;
                      case 5: // n
                        animateProps = {
                          initial: { scale: 0, opacity: 0 },
                          animate: { scale: 1, opacity: 1 },
                          transition: { type: "spring", stiffness: 200 }
                        };
                        break;
                      case 6: // i
                        animateProps = {
                          animate: { rotateX: [0, 360], scale: [1, 1.2, 1] },
                          transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5, ease: "easeInOut" }
                        };
                        break;
                      case 7: // o
                        animateProps = {
                          animate: { rotateY: [0, -15, 0] },
                          transition: { duration: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 8, ease: "easeInOut" }
                        };
                        break;
                      default:
                        break;
                    }

                    return (
                      <m.span
                        key={index}
                        className="inline-block origin-center"
                        {...animateProps}
                      >
                        {char}
                      </m.span>
                    );
                  })}
                </span>
              </Link>

              {/* Desktop Nav - Just Links, No Dropdown Rendering */}
              <nav className="hidden lg:flex items-center gap-2 relative h-full">
                {navItems.map((item) => (
                  <div
                    key={item.title}
                    className="h-full flex items-center px-1"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="cursor-pointer relative flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-orange-200/60 transition-all duration-300 group">
                      {item.dropdown ? (
                        <div
                          className={clsx(
                            "text-[13px] font-medium transition-colors flex items-center gap-1.5",
                            isTop ? "text-gray-800" : "text-gray-900"
                          )}
                        >
                          {item.title}
                          <ChevronDownIcon className={clsx("w-3 h-3 stroke-[3] transition-transform duration-300", hoveredNav === item.title ? "-rotate-180 text-orange-600" : "text-gray-400 group-hover:text-orange-600")} />
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={clsx(
                            "text-[15px] font-medium transition-colors flex items-center gap-1.5",
                            isTop ? "text-gray-800" : "text-gray-900"
                          )}
                        >
                          {item.title}
                        </Link>
                      )}

                      {item.title === "Portfolio" && (
                        <span className={clsx(
                          "absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 transform origin-left transition-transform duration-300 ease-out",
                          hoveredNav === item.title ? "scale-x-100" : "scale-x-0"
                        )} />
                      )}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Right Side */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 active:scale-95 group/btn"
                >
                  <PhoneIcon className="w-4 h-4 text-white/90 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Contact Us</span>
                </Link>

                <label className="hamburger lg:hidden p-2 text-black relative z-[1002] block">
                  <input
                    type="checkbox"
                    checked={mobileMenuOpen}
                    onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                  <svg viewBox="0 0 32 32" className="h-10 w-10">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>

          {/* Desktop Mega Menu Dropdowns */}
          <AnimatePresence>
            {navItems.map((item) => (
              hoveredNav === item.title && item.dropdown && (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: -20, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed left-1/2 z-[2000] w-auto"
                  style={{
                    top: isTop ? "72px" : "64px",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title === "Services" ? (
                    <ServicesMegaMenu baseHref={item.href} />
                  ) : item.title === "Solutions" || item.title === "Hire Talent" || item.title === "Fintech Software" || item.title === "Industries" ? (
                    <IndustriesDropdown item={item} baseHref={item.href} />
                  ) : item.title === "Our Company" ? (
                    <CompanyDropdown item={item} baseHref={item.href} />
                  ) : null}
                </m.div>
              )
            ))}
          </AnimatePresence>


        </m.header>

        {/* Mobile Menu Overlay - Positions below header and slides down */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 bottom-0 z-[998] bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 flex flex-col lg:hidden overflow-y-auto border-t border-gray-100/50 shadow-xl"
              style={{ top: isTop ? "4.5rem" : "4rem", transformOrigin: "top" }}
            >
              <div className="flex-1 px-6 md:px-10 py-4 flex flex-col gap-0 overflow-y-auto pb-4">
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
                        className="text-[18px] md:text-[20px] font-medium text-black hover:text-orange-600 transition-colors block py-2 border-b border-gray-200"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full bg-orange-500 text-white py-3 rounded-full font-medium text-lg hover:bg-orange-600 transition-colors">
                    Contact
                  </Link>
                  <div className="flex gap-6 justify-center mt-4">
                    {socialIcons.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" className="text-gray-500 hover:text-black transition-colors text-sm font-medium">{s.title}</a>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion >
    </>
  );
}

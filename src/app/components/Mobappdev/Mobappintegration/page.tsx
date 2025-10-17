"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { label: "Third Party App Integration", id: "thirdparty" },
  { label: "CRM Integration for Mobile Applications", id: "crm" },
  { label: "Ecommerce App Integration", id: "ecommerce" },
];

const cardData: Record<
  string,
  {
    title: string;
    description: string;
    apiList: { label: string; icon: string }[];
  }
> = {
  thirdparty: {
    title: "Third Party App Integration",
    description:
      "Third-party app integration refers to the process of integrating other applications into a website or app. Integrating services enhances connectivity, such that users can move from one page to another on their device without exiting. It is very crucial especially when a business wants to incorporate new features on its product or even on a website as they need not start creating these features de novo. That is why, a website can implement a payment gateway like PayPal or Stripe, or a third-party service like Google Maps. It does assist firms in cutting down on time, and money, while at the same time enhancing the features and options for its users. Third-party integration can also aid in enhancing the end user’s experience by supplying additional data or functions that are not offered within the primary site or application.",
    apiList: [
      { label: "Zapier", icon: "/mobappdev/discovery.svg" },
      { label: "IFTTT", icon: "/mobappdev/discovery.svg" },
      { label: "Slack Integration", icon: "/mobappdev/discovery.svg" },
      { label: "Google Maps API", icon: "/mobappdev/discovery.svg" },
    ],
  },
  crm: {
    title: "CRM Integration for Mobile Applications",
    description:
      "CRM integration for mobile applications is the process of connecting customer relationship management (CRM) software with mobile applications. This integration delivers companies mechanisms to handle their customer information as well as communication via mobiles. Businesses can monitor customer engagement as well as evaluate their demands while responding to queries promptly through it. Further, mobile applications allow business organizations to enhance customization and relationship tracking of clients. Through CRM integration on mobile applications, businesses can understand customers’ concerns and develop specific products or services that they need. Providing this high-quality customer service could generate customer loyalty, increase satisfaction levels, and in turn increase sales and revenues.",
    apiList: [
      { label: "Salesforce API", icon: "/mobappdev/discovery.svg" },
      { label: "HubSpot API", icon: "/mobappdev/discovery.svg" },
      { label: "Zoho CRM", icon: "/mobappdev/discovery.svg" },
      { label: "Pipedrive API", icon: "/mobappdev/discovery.svg" },
    ],
  },
  ecommerce: {
    title: "Ecommerce App Integration",
    description:
      "eCommerce App Integrations are an essential part of running an online store. This type of integration enables businesses to link their store to third-party apps to automatically run operations and improve productivity. E-commerce app integrations help companies store stock effectively, be in contact with buyers, and observe income rates. These kinds of apps work with various payment gateways, carrier connections, and other application integrations providing companies with a simplified client experience. Furthermore, through eCommerce App Integrations, companies can be able to get customer information, develop customized stores, and a variety of other features like creating loyal programs. eCommerce app integrations also allow businesses’ stores to grow by scaling as they increase their customer base. The use of eCommerce app integrations leads to a customer experience that flows, increases efficiency, and generates more money for a business.",
    apiList: [
      { label: "Shopify API Integration", icon: "/mobappdev/discovery.svg" },
      {
        label: "BigCommerce API Integration",
        icon: "/mobappdev/discovery.svg",
      },
      {
        label: "Squarespace API Integration",
        icon: "/mobappdev/discovery.svg",
      },
      {
        label: "WooCommerce API Integration",
        icon: "/mobappdev/discovery.svg",
      },
      { label: "Wix API Integration", icon: "/mobappdev/discovery.svg" },
    ],
  },
};

export default function MobAppIntegration() {
  const [activeTab, setActiveTab] = useState("thirdparty");
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div
        id="next-section"
        className="max-w-7xl scroll-mt-30  mx-auto px-4 md:px-16 py-12 min-h-screen "
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Mobile Application Integration
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Mobile application integration involves integrating apps with
            services and systems to enable data sharing and better user
            experience.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            ref={sliderRef}
            className="flex gap-4 py-6 overflow-x-auto scroll-smooth px-2 no-scrollbar"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 px-4 py-4 md:px-6 md:py-6 rounded-full w-full text-center font-medium transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg shadow-[inset_0_4px_8px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(255,255,255,0.6)] ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-gray-800 hover:bg-orange-500 hover:text-gray-100"
                }`}
              >
                <span className="whitespace-nowrap capitalize">
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <div className="absolute left-1/2 -bottom-1 md:-bottom-2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rotate-45 transition duration-300" />
                )}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-xl shadow-[inset_0_8px_16px_rgba(0,0,0,0.07),0_4px_20px_rgba(0,0,0,0.1)] w-full text-left"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-orange-500">
                  {cardData[activeTab].title}
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-medium mb-6 py-6">
                  {cardData[activeTab].description}
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 justify-items-center">
                  {cardData[activeTab].apiList.map((api, index) => (
                    <li
                      key={index}
                      className="bg-white hover:bg-orange-100 p-3 sm:p-4 rounded-full flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left transition-all shadow-[inset_0_4px_8px_rgba(0,0,0,0.08),inset_0_-4px_4px_rgba(0,0,0,0.08),0_4px_20px_rgba(0,0,0,0.1)]
"
                    >
                      <Image
                        src={api.icon}
                        alt={api.label}
                        width={32}
                        height={32}
                        className="object-contain mb-1 sm:mb-0"
                      />
                      <span className="text-xs sm:text-sm md:text-base capitalize break-words">
                        {api.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

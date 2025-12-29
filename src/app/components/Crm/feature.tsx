"use client";
import React from "react";
import { motion } from "framer-motion";
import { StickyScrollGSAP as StickyScroll } from "../sticky-scroll-reveal";

const content = [
  {
    title: "Custom CRM Development",
    description:
      "Build a CRM solution perfectly aligned with your business workflow. From contact management to advanced reporting, our custom CRM development ensures scalability, automation, and seamless integration with your existing tools.",
    imageSrc: "/ServiceDropdown/crmsoftware/crm-setup.webp",
  },
  {
    title: "Sales & Marketing Automation",
    description:
      "Automate your entire sales cycle — from lead capture to deal closure. We design CRM systems that simplify tracking, nurture customer relationships, and help your teams focus on conversions instead of manual tasks.",
    imageSrc: "/ServiceDropdown/crmsoftware/sales-automation.webp",
  },
  {
    title: "Data Analytics & Reporting",
    description:
      "Turn data into insights with real-time analytics dashboards. Monitor customer behavior, sales performance, and marketing ROI to make data-driven decisions that drive growth and efficiency.",
    imageSrc: "/ServiceDropdown/crmsoftware/data-analytics.webp",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Integrate your CRM with leading tools like email platforms, payment gateways, or ERP systems. We ensure seamless connectivity that enhances productivity and creates a unified business ecosystem.",
    imageSrc: "/ServiceDropdown/crmsoftware/third-party-integrations.webp",
  },
];

export default function Features() {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Camlenio Software Development Company
        </div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Excellence – Our foundation for every project{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            We Deliver
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify"
        >
          Our journey at Camlenio Software is a testament to what can be
          achieved when people are genuinely committed to making a meaningful
          impact. We are driven by a team of experienced and passionate
          professionals who bring creativity, innovation, and dedication to
          every project.
          <br />
          Each member of our team is focused on delivering high-quality digital
          solutions that empower businesses to grow, adapt, and succeed in an
          ever-evolving technological landscape. From developing cutting-edge
          software to creating seamless user experiences, our story is built on
          innovation, collaboration, and a relentless pursuit of excellence.
        </motion.p>
      </div>

      <StickyScroll content={content} />
    </div>
  );
}

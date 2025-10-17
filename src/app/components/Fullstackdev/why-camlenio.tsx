"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = [
  {
    icon: "/ServiceDropdown/fullstackdev/Customer-satisfaction.webp",
    title: "Satisfied Customers with Every Project",
    content:
      "As a trusted full-stack development company, we have successfully delivered several full-stack web applications using the latest tools and technologies. Our skilled developers ensure every project aligns perfectly with client requirements and exceeds expectations.",
  },

  {
    icon: "/ServiceDropdown/fullstackdev/Risk-Free.webp",
    title: "Risk-Free and Secure Engagement Options",
    content:
      "Not sure where to start? We offer risk-free engagement options, including detailed MVPs, to help you evaluate our services before committing. Our expertise ensures measurable business benefits and client satisfaction.",
  },
  {
    icon: "/ServiceDropdown/fullstackdev/Highest-Standard.svg",
    title: "Highest Standard of Quality Assurance",
    content:
      "Our iterative development process ensures the development of highest quality full-stack applications. We promptly address any issues to deliver products that meet your exact requirements. Partner with us for unparalleled quality assurance.",
  },
  {
    icon: "/ServiceDropdown/fullstackdev/Tailored-Solutions.webp",
    title: "Tailored Solutions for Your Business Needs",
    content:
      "We recognize that every business is unique. Our cost-effective, custom enterprise full-stack solutions are designed to meet your specific objectives and give you a competitive edge in the market.  ",
  },
  {
    icon: "/ServiceDropdown/fullstackdev/Affordable.webp",
    title: "Affordable Web and Mobile Solutions",
    content:
      "With extensive experience in full-stack web and mobile app development, we provide affordable, high-quality solutions tailored to your needs. We aim to turn your vision into reality and set your business on the path to success.",
  },
  {
    icon: "/ServiceDropdown/fullstackdev/Technical-Support.webp",
    title: "24/7 Technical Support and Maintenance",
    content:
      "We offer round-the-clock technical support and maintenance to ensure your applications run smoothly and efficiently at all times. Connect with us to experience seamless service and ongoing support.",
  },
];

const WhyCamlenio = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove px-8 py-16">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          className="text-left md:text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why{" "}
            <span
              className="text-orange-500 font-bold"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              Camlenio
            </span>{" "}
            Stands Out as a Full-Stack Development Company
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify">
            At Camlenio Software Pvt. Ltd. we harness the power of modern
            technologies—AI, AR/VR, and custom integrations—to deliver dynamic,
            scalable, and future-ready digital solutions. Security is built into
            every layer of our architecture, with advanced practices like SSL
            encryption, firewalls, and role-based access control to keep your
            systems and users safe.
          </p>
        </motion.div>

        <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative overflow-visible">
          {Services.map((service, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileTap={{ scale: 1.03 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              key={index}
              className="relative group overflow-hidden rounded-xl border-2 border-orange-100 p-6 bg-transparent text-gray-900 duration-200 shadow-md hover:shadow-lg "
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-white to-white transform scale-x-0 group-hover:scale-x-100 origin-left duration-700 ease-in-out z-0" /> */}

              <div className="relative z-10 duration-700 ease-in-out group-hover:text-black">
                <div className="flex justify-start mb-4  transition duration-700 ease-in-out">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-18 object-contain"
                    priority
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  {service.title}
                </h1>
                <p className="text-base md:text-base">{service.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCamlenio;

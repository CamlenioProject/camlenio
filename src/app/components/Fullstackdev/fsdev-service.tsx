"use client";
import React from "react";
import { motion } from "framer-motion";
import { Carousel, Card } from "./Servicecoursel/Carousel";

const services = [
  {
    title: "End-to-End Web Solutions",
    content:
      "Our services cover the entire web development lifecycle, including UI/UX design, coding, testing, debugging, and deploying software. We also handle backend development, database management,",
  },
  {
    title: "Secure & Scalable Backends",
    content:
      "Our backend solutions include server-side logic development and database design. We focus on API integrations, scalability, and robust data security to ensure your applications remain functional and future-ready.",
  },
  {
    title: "Modernize Your Applications",
    content:
      "We ensure safe migration of data and IT assets to new platforms while upgrading legacy software with modern functionalities. Our focus is on preventing data loss and improving system reliability.",
  },
  {
    title: "Beautiful & Responsive UI",
    content:
      "We specialize in building interactive and responsive UIs using React, Angular, and modern frontend tech. Our seamless backend integrations ensure smooth digital experiences.",
  },
  {
    title: "Seamless Integrations",
    content:
      "We develop integrated systems combining multiple software components into cohesive apps. Our open APIs ensure data accessibility and integration with other platforms.",
  },
  {
    title: "Dynamic Online Stores",
    content:
      "We build e-commerce platforms with sleek UIs, secure backends, payment gateways, and shipping APIs. From design to deployment, we create complete online store solutions.",
  },
];

const FsDevServices = () => {
  const cards = services.map((service, index) => (
    <Card key={index} card={service} />
  ));

  return (
    <div className=" bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove flex flex-col justify-center items-center mx-auto px-8 py-10 md:py-20">
      <motion.div
        initial={{ y: 50, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-20 max-w-7xl "
      >
        <h2 className=" max-w-6xl mx-auto text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
          Full-Stack Development Services{" "}
          <span
            className="text-orange-500"
            style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
          >
            Camlenio
          </span>{" "}
          Offer
        </h2>
        <p className="max-w-6xl mx-auto inline-block text-gray-900 mb-6 text-base">
          Helpful Insight offers comprehensive full-stack development services
          tailored to address every aspect of your project requirements. Our
          expertise spans both frontend and backend development, ensuring
          high-quality results and on-time delivery.
        </p>
      </motion.div>
      <Carousel items={cards} />
    </div>
  );
};

export default FsDevServices;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";

const Blogs = () => {
  const words = ["Blogs"];
  const blogs = [
    {
      id: 1,
      img: "/Homepage/blogs/Grocery-Delivery.png",
      date: "September 9, 2025",
      comments: 23,
      title:
        "Grocery Delivery App Development Company in India: Build Your Blinkit Style App",
      href: "https://camlenio.com/blogs/grocery-delivery-app-development-company/",
    },
    {
      id: 2,
      img: "/Homepage/blogs/M-ATM-Software-Image.png",
      date: "September 4, 2025",
      comments: 23,
      title:
        "M-ATM Software Development in India: Secure Banking Solutions for Rural Areas 2025",
      href: "https://camlenio.com/blogs/m-atm-software-development-in-india/",
    },
    {
      id: 3,
      img: "/Homepage/blogs/SaaS-Product.png",
      date: "August 27, 2025",
      comments: 23,
      title:
        "SaaS Product Development Services in India: A Complete 2025 Guide",
      href: "https://camlenio.com/blogs/saas-product-development-services-in-india/",
    },
    {
      id: 4,
      img: "/Homepage/blogs/Reputation-Management.png",
      date: "September 9, 2025",
      comments: 23,
      title: "How Reputation Management Services Protect and Grow Your Brand",
      href: "https://camlenio.com/blogs/how-reputation-management-services-protect-grow-brand/",
    },
    {
      id: 5,
      img: "/Homepage/blogs/Custom-Software-vs-Ready-Made-Software.png",
      date: "September 4, 2025",
      comments: 23,
      title:
        "Custom Software vs Ready-Made Software: A Complete Business Guide",
      href: "https://camlenio.com/blogs/custom-software-vs-ready-made-software/",
    },
    {
      id: 6,
      img: "/Homepage/blogs/Boost-Local-SEO.png",
      date: "August 27, 2025",
      comments: 23,
      title:
        "Generative Engine Optimization for Mobile: Boost Local SEO & Speed in 2025",
      href: "https://camlenio.com/blogs/generative-engine-optimization-for-mobile/",
    },
  ];

  return (
    <div className="relative py-16 sm:py-16 md:py-18 lg:py-18 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="relative py-4 px-2 sm:px-4 md:px-6 lg:px-8">
        <Image
          src="/CompanyDropdown/blog/blogs-bg.jpg"
          alt="blogs"
          width={1000}
          height={900}
          className="w-full h-48 sm:h-55 md:h-65 lg:h-68 xl:h-70 object-cover object-top rounded-[1.5rem]"
        />
        <motion.h1 className="absolute inset-0 flex items-center justify-center text-gray-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {words[0].split("").map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.08 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="text-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl shadow-md overflow-hidden flex flex-col h-full bg-orange-100 border-1 border-gray-300 group"
              >
                <div className="relative glare-img hover:scale-102 transition-all duration-300">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-85 object-cover object-center "
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-1">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {blog.date}
                    </span>
                    <span>-</span>
                    <span className="flex items-center gap-1">
                      <FaComments /> Comments ({blog.comments})
                    </span>
                  </div>

                  <h3 className="text-base font-semibold mb-1 text-gray-800 text-left transition-colors duration-500 ease-in-out">
                    <a href={blog.href}>{blog.title}</a>
                  </h3>

                  <div className="mt-auto flex items-center justify-between">
                    <a
                      href={blog.href}
                      className="flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all duration-300 group-hover:scale-x-110 group-hover:tracking-wider origin-left"
                    >
                      Read More →
                    </a>
                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glare-img {
          position: relative;
          overflow: hidden;
        }

        .glare-img::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            -30deg,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          transition: 800ms ease;
          background-size: 200% 200%;
          background-position: -100% -100%;
        }

        .glare-img:hover::before {
          background-position: 100% 100%;
        }
      `}</style>
    </div>
  );
};
export default Blogs;

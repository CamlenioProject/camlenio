"use client";
import Image from "next/image";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const BlogSection = () => {
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
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Blogs
        </div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Blogs
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans"
        >
          Camlenio is an established software development company in India that
          is committed to helping businesses thrive through innovative digital
          solutions. Our expert team Blends creativity, technology, and strategy
          to build custom websites, mobile apps, and fintech platforms that
          actually transact business.
        </motion.p>
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
export default BlogSection;

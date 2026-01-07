"use client";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { easeInOut } from "framer-motion";

const migrationlist = [
  {
    img: "/webdevpage/php-laravel.svg",
    text: "php to laravel Migration",
  },
  {
    img: "/webdevpage/laravel-py.svg",
    text: "laravel to python Migration",
  },
  {
    img: "/webdevpage/cl-laravel.svg",
    text: "cl to laravel Migration",
  },
  {
    img: "/webdevpage/php-node.svg",
    text: " php to node js Migration",
  },
  {
    img: "/webdevpage/laravel-node.svg",
    text: "PHP to laravel Migration",
  },
  {
    img: "/webdevpage/php-laravel.svg",
    text: "html to react js Migration",
  },
];

const Migration = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="px-6 md:px-16 py-10 overflow-hidden">
        <div className="max-w-[85rem] mx-auto">
          <div className="flex flex-col md:flex-row items-left md:items-start justify-between gap-2 md:gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-2/5 space-y-3"
            >
              <span
                className="text-xl md:text-4xl font-bold tracking-wider text-orange-500"
                style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
              >
                MIGRATIONS
              </span>
              <h3 className="hidden md:inline-block text-xl md:text-3xl text-gray-800 font-semibold">
                Migration and Modernization
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-3/5"
            >
              <p className="text-sm md:text-lg font-normal text-gray-700 leading-relaxed">
                Migration and modernization are the activities that entail the
                relocation of applications, data, and ICT infrastructure to
                advanced contemporary cloud computing solutions. They allow
                businesses to achieve increased performance, scalability, and
                agility at reduced costs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 bg-orange-200 gap-4 my-6 rounded-2xl"
          >
            {migrationlist.map((migrationlist, idx) => (
              <motion.li
                key={idx}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.01 }}
                className="list-none flex text-left items-center justify-start gap-4 bg-orange-100 hover:bg-orange-300 transition-colors duration-500 p-6 rounded-2xl "
              >
                <Image
                  src={migrationlist.img}
                  alt="php-to-laravel"
                  width={50}
                  height={30}
                  className="object-contain "
                />
                <span className="lg:text-xl mx-auto text-left justify-start flex capitalize text-black ">
                  {migrationlist.text}
                </span>
              </motion.li>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Migration;

"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = [
  {
    title: "Custom Mobile Application Development",
    content:
      "Custom mobile application development is the process of creating custom mobile apps to meet the specific needs of a business. This is an essential process where you design, code, test, and release an app that meets expectations. It may assist companies to adopt newer mobile solutions and enhance consumer experiences.",
  },

  {
    title: "Mobile application UI/UX design",
    content:
      "Mobile Application UI/UX design deals with making a mobile application interface that enables a simple, convenient, and enjoyable user experience. It involves researching user needs, creating wireframes, designing visual elements, and testing prototypes to ensure a high level of usability. It is also important for developers to understand user behaviour patterns to be able to produce better app experiences.",
  },
  {
    title: "App prototyping & strategy",
    content:
      "App prototyping and strategy is creating a model of the app and developing a plan to achieve success. This involves conducting needs analysis, setting the objectives, and a way of achieving the objectives. This process involves the study of the market, creation of a wireframe, testing of the prototype, and release of the app.",
  },
  {
    title: "App Integration with Web",
    content:
      "App integration with the web allows users to access web content, services, and applications from within a mobile app. The integration enables people to use the apps and view the web content at the same time without any complications. Also, it goes a long way in ensuring more user engagement and improving user experiences.",
  },
  {
    title: "Existing Mobile app revamp",
    content:
      "Mobile app revamp involves redesigning the current apps in a way that will improve the quality and utility of the consumers. This may involve such factors as introducing new traits, refreshing old traits, or remodelling the interface of the application. The developers must see to it that the application does not lose its user-friendliness and at the same time provide a much better service.",
  },
  {
    title: "Mobile App Quality Assurance",
    content:
      "Mobile App Quality Assurance is the process of testing mobile applications to ensure they meet specified requirements and are fit for purpose. This involves testing with different devices and platforms to check on the reliability of the app. It is important to ensure that the app conforms to user expectations, and is free of bugs.",
  },
];

const AppDevServices = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-[80rem] min-h-screen flex flex-col justify-center items-center mx-auto px-4 py-10 md:py-20">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Mobile App Development Services That Drives Real Results in
            Real-Time
          </h2>
          <p className="inline-block text-gray-900   mb-6 text-xl">
            Mobile app development services give businesses special apps that
            can show real-time results. These apps are made to make things
            better for users, get them more involved and help with customer
            relationships. These services help companies to get real results and
            reach their goals quickly.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center grid grid-cols-1 md:grid-cols-2 gap-6 
"
        >
          {Services.map((service, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
                },
              }}
              whileTap={{ scale: 1.01 }}
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-gray-50 p-6 text-left rounded-xl shadow-[inset_0_6px_12px_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(0,0,0,0.1)] rounded-tr-[3rem] rounded-bl-[3rem]"
            >
              {" "}
              <div
                className="absolute top-0 left-1/2 w-0 h-2 bg-orange-500 rounded-t-xl 
               transition-all duration-700 ease-in-out 
               group-hover:w-full group-hover:left-0"
              ></div>
              <h1 className="text-2xl text-orange-500 font-semibold mb-2">
                {service.title}
              </h1>
              <p className="text-base text-gray-700">{service.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppDevServices;

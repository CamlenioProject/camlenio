"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "mobile", label: "Mobile App" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "design", label: "Design" },
];

const content = {
  mobile: [
    { name: "iOS", icon: "/Homepage/svg/apple2.svg" },
    { name: "Android", icon: "/Homepage/svg/android2.svg" },
    { name: "Ionic", icon: "/Homepage/svg/ionic.svg" },
    { name: "Flutter", icon: "/Homepage/svg/flutter2.svg" },
    { name: "Xamarin", icon: "/Homepage/svg/xamarin.svg" },
    { name: "React Native", icon: "/Homepage/svg/react_native.svg" },
    { name: "Cordova", icon: "/Homepage/svg/cordova.svg" },
    { name: "Swift", icon: "/Homepage/svg/swift.svg" },
    { name: "Kotlin", icon: "/Homepage/svg/kotlin.svg" },
    { name: "Java", icon: "/Homepage/svg/java.svg" },
  ],
  frontend: [
    { name: "Html", icon: "/Homepage/html5.webp" },
    { name: "Css", icon: "/Homepage/css3.webp" },
    { name: "Bootstrap", icon: "/Homepage/bootstrap.webp" },
    { name: "jquery", icon: "/Homepage/jquery.webp" },
    { name: "Angular JS", icon: "/Homepage/angular.webp" },
    { name: "React JS", icon: "/Homepage/svg/react.svg" },
    { name: "Next js", icon: "/Homepage/svg/Next.svg" },
    { name: "Php", icon: "/Homepage/php.webp" },
  ],
  backend: [
    { name: ".Net", icon: "/Homepage/svg/dot_net.svg" },
    { name: "Java", icon: "/Homepage/svg/java.svg" },
    { name: "Python", icon: "/Homepage/svg/python.svg" },
    { name: "Php", icon: "/Homepage/php.webp" },
    { name: "Node JS", icon: "/Homepage/nodejs.webp" },
    { name: "Next JS", icon: "/Homepage/svg/Next.svg" },
  ],
  database: [
    { name: "Docker", icon: "/Homepage/svg/docker.svg" },
    { name: "SQL", icon: "/Homepage/svg/sql_server.svg" },
    { name: "Google Cloud", icon: "/Homepage/svg/google_cloud.svg" },
    { name: "AWS", icon: "/Homepage/svg/aws.svg" },
    { name: "Azure", icon: "/Homepage/svg/azure.svg" },
  ],
  design: [
    { name: "illustrator", icon: "/Homepage/adobe-illustrator-cc.webp" },
    { name: "Figma", icon: "/Homepage/figma.webp" },
    { name: "InVision", icon: "/Homepage/invision.webp" },
    { name: "Justinmind", icon: "/Homepage/justinmind.webp" },
    { name: "Photoshop", icon: "/Homepage/photoshop-cc.webp" },
    { name: "Sketch", icon: "/Homepage/sketch.webp" },
  ],
};

const TechnologiesTabs = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <div className=" py-16 text-white relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className=" relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-gray-50 shadow-sm text-sm font-medium text-gray-950 mb-4">
            <span className="absolute w-8 h-2 rounded-full bg-orange-500 left-[-1.4rem] top-1/2 -translate-y-1/2"></span>
            Technologies - Now About our Weapons
          </span>
          <h6 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Latest and Smart{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #033f57, 4px 6px 0px #ff582336",
              }}
            >
              Technologies
            </span>
          </h6>
          <p className="max-w-5xl mx-auto flex-wrap text-gray-50 text-sm text-justify break-words sm:text-base mb-12 font-sans">
            We aim to deliver high-quality, beautifully crafted web
            and mobile applications using the latest technologies and
            frameworks. Our focus is on building scalable, durable, and
            future-ready solutions that ensure long-term success for your
            business.
          </p>
        </div>
        <div className="flex justify-center space-x-6 border-b border-gray-500 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 text-xs sm:text-sm md:text-xl ${
                activeTab === tab.id
                  ? "text-orange-500 after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-orange-500 after:origin-center after:scale-x-100 after:transition-transform after:duration-500"
                  : "text-white hover:text-orange-400 after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-orange-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  justify-center max-w-7xl  mx-auto">
          {content[activeTab as keyof typeof content].map(
            (item: { name: string; icon: string }, idx: number) => (
              <div
                key={idx}
                className="bg-gray-100 group text-gray-800 rounded-xl shadow-md flex flex-col items-center justify-center p-6  transition cursor-pointer text-center "
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-10 md:w-18 h-auto mb-3 object-contain group-hover:scale-[0.8] transition-transform duration-300"
                />
                <span className="font-medium">{item.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default TechnologiesTabs;

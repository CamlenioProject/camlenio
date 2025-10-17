import React from "react";
import { Lightbulb, Users, TrendingUp, Heart } from "lucide-react";

const WorkWithUs = () => {
  const benefits = [
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Innovation-Driven Projects",
      description:
        "Work on cutting-edge technology solutions that shape the future of IT",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Flexible Remote Culture",
      description:
        "Enjoy the freedom to work from anywhere with our remote-first approach",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Career Growth",
      description:
        "Accelerate your professional development with mentorship and learning opportunities",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Team Collaboration",
      description:
        "Join a supportive team that values creativity, diversity, and innovation",
    },
  ];
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why work {""}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            With us
          </span>
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify">
          Our journey at Camlenio Software is a testament to what can be
          achieved when people are genuinely committed to making a meaningful
          impact. We are driven by a team of experienced and passionate
          professionals who bring creativity, innovation, and dedication to
          every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl border border-orange-200 bg-orange-100 shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl text-gray-800 font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;

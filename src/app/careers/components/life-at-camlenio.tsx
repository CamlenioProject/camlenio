"use client";
import Image from "next/image";
import React from "react";

const LifeAtCamlenio = () => {
  const lifeAtCamlenio = [
    {
      image:
        "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627728/education_dajq0f.jpg",
      title: "Collaborative Workspace",
    },
    {
      image:
        "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/travel_z5e0tn.jpg",
      title: "Innovation Sessions",
    },
    {
      image:
        "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/healthcare_drftbk.jpg",
      title: "Team Building",
    },
    {
      image:
        "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627726/fintech_l4mial.jpg",
      title: "Learning & Growth",
    },
  ];

  return (
    <div className="pt-20 px-8 md:px-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Life at {""}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Camlenio
          </span>
        </h2>

        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify">
          Our journey at Camlenio Software is a testament to what can be
          achieved when people are genuinely committed to making a meaningful
          impact. We are driven by a team of experienced and passionate
          professionals who bring creativity, innovation, and dedication to
          every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifeAtCamlenio.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl ">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 px-8 md:px-16 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Camlenio
              </span>
              ? <br />
              {"Let's Build the Future Together."}
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Take the next step in your career and become part of our
              innovative team.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtCamlenio;

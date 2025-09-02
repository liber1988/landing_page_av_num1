import React from "react";
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaInfinity,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FaD } from "react-icons/fa6";
import { text } from "stream/consumers";

function Feature() {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      text: " 50+ Unique Design Blocks",
    },
    {
      icon: <FaLaptop className="text-red-500" />,
      text: " 50+ Unique Design Blocks",
    },
    {
      icon: <FaMobileAlt className="text-red-500" />,
      text: " 50+ Unique Design Blocks",
    },
    {
      icon: <FaDesktop className="text-red-500" />,
      text: " Mobile first design",
    },
    {
      icon: <FaCog className="text-3xl text-red-500" />,
      text: " Customizable Features",
    },
    {
      icon: <FaHeadset className="text-green-500 text-3xl" />,
      text: " Humanly supportive",
    },
    {
      icon: <FaInfinity className="text-3xl text-red-500" />,
      text: " Infinite Possibilities",
    },
    {
      icon: <FaBook className="text-3xl text-red-500" />,
      text: " 50+ Unique Design Blocks",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      text: " 50+ Unique Design Blocks",
    },
  ];

  return (
    <div className="bg-pink-50 pt-20 pb-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Its Everything you will ever need
        </h1>
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={index * 50}
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                <span>{feature.icon}</span>
              </div>
              <span className="font-semibold">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;

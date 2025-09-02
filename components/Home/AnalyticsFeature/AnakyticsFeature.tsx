import React from "react";
import Image from "next/image";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/images/a.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base  font-semibold text-orangey-500">
            Audience tracking and analytics
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Power analytics tools that put you in control and are fully
            customizable.
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]  ">
            Get insights into user behavior, track engagement, and make
            data-driven decisions to enhance your application. Our analytics
            tools are designed to be user-friendly and customizable, allowing
            you to tailor the data to your specific needs. Whether you're
            looking to monitor user activity, track conversions, or analyze
            performance metrics, our platform provides the tools you need to
            succeed.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li>
              <FaCheckCircle className="inline text-green-500 mr-2" />
              Real-time user tracking
            </li>
            <li>
              <FaCheckCircle className="inline text-green-500 mr-2" />
              Customizable dashboards
            </li>
            <li>
              <FaCheckCircle className="inline text-green-500 mr-2" />
              In-depth performance analysis
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-400 text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-200 hover:text-white">
            Explore More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsFeature;

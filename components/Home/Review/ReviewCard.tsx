import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
};

const ReviewCard = ({ image, name }: Props) => {
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center ">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]">
            This is a sample review text. The service was excellent and exceeded
            my expectations. I would highly recommend it to others!
          </p>
          <div className="flex items-center mt-6">
            <FaStar className="text-yellow-600 w-6 h-6 " />
            <FaStar className="text-yellow-600 w-6 h-6 " />
            <FaStar className="text-yellow-600 w-6 h-6 " />
            <FaStar className="text-yellow-600 w-6 h-6 " />
            <FaStar className="text-yellow-600 w-6 h-6 " />
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-8">{name}</h1>
            <p className="text-sm text-gray-500">Fullstack Developer</p>
          </div>
        </div>
        <div className="col-span-2 mx-auto order-1 lg:order-2">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-full shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;

import React from "react";
import Image from "next/image";
type Props = {
  title: string;
  image: string;
  linkText: string;
};

const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto w-20 h-auto"
      />
      <h1 className="text-center mt-5 text-lg mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-center text-gray-600 font-medium mb-7 tesxt-sm">
        kjsdkjfkjsdfkjsdkfjsdkjfksdjfksdjfkj
      </p>
      <p className="text-center text-blue-900 font-semibold cursor-pointer hover:text-blue-950 transition-all duration-200">
        {linkText} &#8594;
      </p>
    </div>
  );
};

export default WhyChooseCard;

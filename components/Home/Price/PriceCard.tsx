import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  price: number;
  plan: string;
  features?: string[];
};

const defaultFeatures = [
  "Unlimited access to all features",
  "24/7 customer support",
  "Advanced analytics dashboard",
  "Free updates",
  "Cancel anytime",
];

const PriceCard: React.FC<Props> = ({ plan, price, features }) => {
  const featureList =
    features && features.length > 0 ? features : defaultFeatures;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white p-8 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-xs mx-auto border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-700 mb-3 uppercase tracking-wide drop-shadow">
        {plan}
      </h2>
      <div className="flex items-end mb-6">
        <span className="text-5xl font-black text-gray-900 mr-2 drop-shadow">
          ${price}
        </span>
        <span className="text-lg text-gray-500 mb-1">/month</span>
      </div>
      <div className="w-full mb-6 flex flex-col gap-3">
        {featureList.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm"
          >
            <FaCheck className="inline-block mr-2 text-green-600" />
            <span className="text-gray-600 font-semibold text-base w-full ">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <button className="bg-gray-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all shadow-lg mt-2 w-full text-lg tracking-wide">
        Choose {plan}
      </button>
    </div>
  );
};

export default PriceCard;

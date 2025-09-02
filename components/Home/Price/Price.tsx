import React from "react";
import PriceCard from "./PriceCard";

function Price() {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Meet exiting Pricing Plan
      </h2>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mt-20 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div>
          <PriceCard price={15} plan="Starter" />
        </div>
        <div>
          <PriceCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
}

export default Price;

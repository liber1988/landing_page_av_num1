"use client";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";

import AnalyticsFeature from "./AnalyticsFeature/AnakyticsFeature";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Price from "./Price/Price";
function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
      <Review />
      <Price />
    </div>
  );
}

export default Home;

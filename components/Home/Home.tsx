"use client";

import React, { useEffect } from "react";

import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnakyticsFeature";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Price from "./Price/Price";

function Home() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import("aos")).default;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
      document.head.appendChild(link);

      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    loadAOS();
  }, []);

  return (
    <div>
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
      <Review />
      <Review />
      <Price />
    </div>
  );
}

export default Home;

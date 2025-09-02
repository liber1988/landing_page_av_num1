"use client";

import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Navbar";
import { useState } from "react";
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleNavHide = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </div>
  );
};

export default ResponsiveNav;

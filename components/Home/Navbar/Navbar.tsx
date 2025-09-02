"use client";

import Link from "next/link";
import { navLinks } from "../../../constants/Constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-[1000] transition-all duration-200
        ${navBg ? "bg-white shadow-md" : "bg-transparent shadow-none"}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-3xl font-extrabold">
          <span className="text-3xl md:text-4xl text-pink-700">L</span>iber
        </h1>

        {/* LINKS */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="nav__link whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/*buttons*/}
        <div className="flex items-center gap-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            Join Now
          </button>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

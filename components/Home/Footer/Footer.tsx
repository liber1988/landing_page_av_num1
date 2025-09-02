import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white border-t border-gray-200 py-8 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold text-gray-700 tracking-wide mb-2">
            LandingPage
          </span>
          <span className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <nav className="flex gap-6 text-gray-600 font-semibold text-base">
          <a href="#home" className="hover:text-gray-800 transition">
            Home
          </a>
          <a href="#features" className="hover:text-gray-800 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-800 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-gray-800 transition">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition shadow-md"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition shadow-md"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.126-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 1.997 1.397 3.872 3.448 4.292a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.459-2.548z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition shadow-md"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.851c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.67.012-4.947.071-1.276.059-2.687.334-3.678 1.325-.991.991-1.266 2.402-1.325 3.678-.059 1.277-.071 1.688-.071 4.947s.012 3.67.071 4.947c.059 1.276.334 2.687 1.325 3.678.991.991 2.402 1.266 3.678 1.325 1.277.059 1.688.071 4.947.071s3.67-.012 4.947-.071c1.276-.059 2.687-.334 3.678-1.325.991-.991 1.266-2.402 1.325-3.678.059-1.277.071-1.688.071-4.947s-.012-3.67-.071-4.947c-.059-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.266-3.678-1.325-1.277-.059-1.688-.071-4.947-.071z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

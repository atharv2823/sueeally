
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#860764] dark:bg-gray-900 fixed w-full z-50 top-0 start-0 shadow-md transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./bg-logo.jpg"
            className="h-10 rounded-full shadow-lg"
            alt="SueeAlly Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white dark:text-white hover:text-gray-300 transition-all">
            SueeAlly
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#860764] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:e dark:bg-gray-800 md:dark:bg-gray-900">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`block py-2 px-4 rounded-sm md:p-2 transition-all duration-200 ${
                    pathname === item.path
                      ? "bg-white text-[#860764] font-bold"
                      : "text-white md:hover:text-[#860764] md:hover:bg-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

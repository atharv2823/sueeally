"use client"

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#860764] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./bg-logo.jpg" className="h-8" alt="SueellAlly Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">SueellAlly</span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#860764] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:e  dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <a href="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-2 md:dark:text-[#860764] md:hover:text-[#860764] md:hover:bg-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="./about" className="block py-2 px-3 rounded-sm text-white md:hover:text-[#860764] md:hover:bg-white md:p-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</a>
            </li>
            <li>
              <a href="./services" className="block py-2 px-3 rounded-sm text-white md:hover:text-[#860764] md:hover:bg-white md:p-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
            </li>
            <li>
              <a href="./contact" className="block py-2 px-3 rounded-sm text-white md:hover:text-[#860764] md:hover:bg-white md:p-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

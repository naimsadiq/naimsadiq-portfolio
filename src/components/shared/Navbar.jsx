"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      {[
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
      ].map((link) => (
        <li key={link.name}>
          <Link
            className="relative group py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            href={link.href}
          >
            {link.name}
            {/* Animated Underline */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group"
            >
              Naim{" "}
              <span className="text-indigo-600 transition-colors group-hover:text-indigo-500">
                Sadiq
              </span>
              <span className="text-indigo-600">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-8 items-center">{links}</ul>
            {/* Optional: Let's Talk Button on Navbar */}
            <Link
              href="#contact"
              className="ml-8 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 p-4 shadow-2xl bg-white dark:bg-[#0F172A] dark:text-white rounded-2xl w-56 border border-gray-100 dark:border-gray-800 space-y-2"
              >
                {links}
                <li className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href="#contact"
                    className="block text-center w-full px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

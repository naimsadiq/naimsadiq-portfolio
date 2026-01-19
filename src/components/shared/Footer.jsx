"use client";

import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo / Name */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group"
            >
              Naim <span className="text-indigo-600">Sadiq</span>
              <span className="text-indigo-600">.</span>
            </Link>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Building modern web experiences with the MERN stack and a passion
              for clean code.
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-bold uppercase tracking-widest">
            <Link
              href="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <nav className="flex justify-center gap-5 mb-12">
            {[
              {
                icon: <FaGithub size={20} />,
                link: "https://github.com/naimsadiq",
              },
              {
                icon: <FaLinkedin size={20} />,
                link: "https://linkedin.com/in/naimsadiq",
              },
              {
                icon: <FaFacebook size={20} />,
                link: "https://facebook.com/naimsadiq.info",
              },
              {
                icon: <FaWhatsapp size={20} />,
                link: "https://wa.me/01326098250",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-8"></div>

          {/* Copyright Information */}
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              © {currentYear}{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                Naim Sadiq
              </span>
              . All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Designed & Built with ❤️ using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

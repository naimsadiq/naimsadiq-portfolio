"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] px-6 py-12 lg:py-0 overflow-hidden">
      {/* Background Orbs - (পেছনের হালকা রঙের আভা) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:row items-center justify-between gap-12 lg:flex-row">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Internship
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Naim Sadiq
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-8">
            Junior{" "}
            <span className="text-indigo-600 dark:text-indigo-400">MERN</span>{" "}
            Stack Developer
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build real-world web applications using
            <span className="mx-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              MongoDB
            </span>
            ,
            <span className="mx-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              Express
            </span>
            ,
            <span className="mx-1 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 font-bold text-indigo-600 dark:text-indigo-400">
              React
            </span>
            , and
            <span className="mx-1 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 font-bold text-indigo-600 dark:text-indigo-400">
              Next.js
            </span>
            .
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-10">
            <Link href="#contact">
              <button className="group flex items-center gap-2 bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-95">
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Let&apos;s Talk
              </button>
            </Link>

            <Link href="/naimsadiq-resume.pdf" target="_blank">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-600 px-8 py-4 rounded-2xl transition-all dark:text-white active:scale-95 shadow-sm">
                <FileText size={20} className="text-indigo-600" /> Get Resume
              </button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/naimsadiq"
              target="_blank"
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-indigo-100 dark:hover:border-slate-700 shadow-sm transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/naimsadiq"
              target="_blank"
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-blue-100 dark:hover:border-slate-700 shadow-sm transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative flex justify-center items-center"
        >
          {/* Animated Background Blur Orb */}
          <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>

          {/* Main Illustration */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/images/web-design.svg"
              alt="Developer Illustration"
              width={500}
              height={500}
              priority
              className="w-full max-w-100 md:max-w-125 drop-shadow-2xl dark:invert dark:opacity-80"
            />
          </motion.div>

          {/* Floating Badges with better styling */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-50/50 dark:border-slate-700 hidden md:block"
          >
            <Image
              src="/images/react-native.png"
              width={40}
              height={40}
              alt="React"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-50/50 dark:border-slate-700 hidden md:block"
          >
            <Image src="/images/nodejs.png" width={40} height={40} alt="Node" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

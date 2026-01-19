"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const AboutPage = () => {
  // স্কিলগুলোর তালিকা
  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-[#000000] dark:text-gray-300" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  // অ্যানিমেশন ভ্যারিয়েন্টস
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* --- শীর্ষের শিরোনাম --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-2">
            About Me
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Frontend Developer | React & Next.js
          </h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* --- মূল কন্টেন্ট গ্রিড --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* বাম পাশ - ইমেজ সেকশন (অ্যানিমেটেড) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 -z-10"></div>
            <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group">
              <Image
                src="https://i.ibb.co/PvM0LVdk/naimsadiq-7.png"
                alt="Naim Sadiq"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* ডান পাশ - টেক্সট সেকশন (অ্যানিমেটেড) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-4 order-1 md:order-2 text-center md:text-left"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
            >
              I am a passionate{" "}
              <strong className="font-bold text-gray-900 dark:text-white">
                Frontend Web Developer
              </strong>{" "}
              with a strong focus on{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                React and Next.js
              </span>
              . I enjoy building{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">
                clean, responsive, and user-friendly
              </strong>{" "}
              web applications using{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                Tailwind CSS
              </span>{" "}
              and modern frontend best practices.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4"
            >
              I also have experience working with{" "}
              <strong className="font-bold text-gray-900 dark:text-white">
                Express.js and MongoDB
              </strong>{" "}
              to build simple backend APIs and handle data effectively. I
              leverage{" "}
              <span className="italic font-medium text-indigo-600 dark:text-indigo-400 underline decoration-indigo-500/30">
                AI-assisted tools
              </span>{" "}
              to improve productivity, write cleaner code faster, and focus more
              on problem-solving.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-600 rounded-r-lg shadow-sm"
            >
              I am currently seeking an{" "}
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-tight">
                internship or junior developer role
              </strong>{" "}
              where I can apply my skills, learn from experienced developers,
              and grow through real-world projects.
            </motion.p>
          </motion.div>
        </div>

        {/* --- স্কিলস সেকশন (অ্যানিমেটেড) --- */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10"
          >
            Tech Stack & Tools
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 w-24 h-24 md:w-28 md:h-28 group"
              >
                <div className="text-3xl md:text-4xl mb-2 group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

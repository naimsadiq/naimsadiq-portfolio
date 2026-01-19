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
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      color: "hover:border-[#61DAFB]/50 hover:shadow-[#61DAFB]/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      color: "hover:border-white/50 hover:shadow-white/10",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      color: "hover:border-[#06B6D4]/50 hover:shadow-[#06B6D4]/10",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-[#000000] dark:text-gray-300" />,
      color: "hover:border-gray-500/50 hover:shadow-gray-500/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      color: "hover:border-[#47A248]/50 hover:shadow-[#47A248]/10",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-[#FFCA28]" />,
      color: "hover:border-[#FFCA28]/50 hover:shadow-[#FFCA28]/10",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-[#F05032]" />,
      color: "hover:border-[#F05032]/50 hover:shadow-[#F05032]/10",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative bg-slate-50 dark:bg-[#020617] min-h-screen py-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
            Getting to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The Offset Frame */}
            <div className="absolute top-5 left-5 w-full h-full border-2 border-indigo-600 rounded-2xl -z-10 hidden md:block"></div>

            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <Image
                src="/images/naimsadiq.png"
                alt="Naim Sadiq"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold italic">MERN</p>
              <p className="text-xs uppercase tracking-widest opacity-80">
                Stack Dev
              </p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
            >
              I am a passionate{" "}
              <span className="text-slate-900 dark:text-white font-bold underline decoration-indigo-500/30">
                Frontend Web Developer
              </span>{" "}
              based in Rajshahi. My expertise lies in building high-performance
              web apps using
              <span className="mx-1 font-bold text-indigo-600 dark:text-indigo-400">
                React & Next.js
              </span>
              .
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
            >
              I don&apos;t just write code; I focus on{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                User Experience
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Clean Architecture
              </span>
              . With experience in{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Node.js
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                MongoDB
              </span>
              , I can handle both sides of the coin. I also love exploring{" "}
              <span className="italic">AI tools</span> to speed up development
              without compromising quality.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl"
            >
              <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 uppercase text-sm tracking-widest">
                Target
              </h4>
              <p className="text-slate-700 dark:text-slate-200 font-medium">
                Seeking an{" "}
                <span className="text-indigo-600 font-bold">Internship</span> to
                contribute to real-world projects and grow alongside industry
                leaders.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12"
          >
            My Tech Stack
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className={`group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 ${skill.color}`}
              >
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
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

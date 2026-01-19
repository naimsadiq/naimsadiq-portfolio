"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout, Wrench } from "lucide-react"; // আইকন যোগ করলে আরও ভালো লাগবে

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-indigo-600" size={24} />,
    desc: "Building responsive, accessible, and modern user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="text-indigo-600" size={24} />,
    desc: "Developing secure and scalable server-side applications",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST API", "JWT"],
  },
  {
    title: "Full-Stack Capabilities",
    icon: <Layout className="text-indigo-600" size={24} />,
    desc: "Handling complete application workflows from UI to database",
    skills: [
      "Role-based Dashboard",
      "Stripe Payment",
      "API Integration",
      "Auth",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="text-indigo-600" size={24} />,
    desc: "Development, deployment, and collaboration tools",
    skills: ["Git", "GitHub", "Figma", "Photoshop", "Vercel", "VS Code"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
            Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Skills & <span className="text-indigo-600">Expertise</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            A list of languages and tools I use to turn ideas into digital
            reality.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-1.5 w-20 bg-indigo-600 rounded-full"></span>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="
                relative overflow-hidden rounded-2xl p-8
                bg-white dark:bg-slate-900/50
                border border-slate-200 dark:border-slate-800
                hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                shadow-sm hover:shadow-xl hover:shadow-indigo-500/5
                transition-all duration-300
              "
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-600"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {group.desc}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1.5 text-xs font-bold tracking-wide rounded-lg
                      bg-indigo-50 text-indigo-700
                      dark:bg-indigo-500/10 dark:text-indigo-300
                      border border-indigo-100 dark:border-indigo-500/20
                      hover:bg-indigo-600 hover:text-white transition-colors cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

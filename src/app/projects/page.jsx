"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiUsers,
  FiDatabase,
  FiShield,
} from "react-icons/fi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // ৩টি পারফেক্ট প্রজেক্ট ডাটা
  const projects = [
    {
      id: 1,
      featured: true,
      type: "fullstack",
      title: "TaskFlow Pro",
      subtitle: "Advanced Task Management System",
      description:
        "A full-stack task management application with real-time collaboration, role-based authentication, and drag-drop functionality.",
      longDescription:
        "Implemented JWT authentication, team management, file uploads, and real-time notifications using WebSockets. Features include project timelines, progress tracking, and advanced filtering.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      imageColor: "from-purple-500 to-pink-500",
      demoLink: "https://taskflow-demo.vercel.app",
      githubLink: "https://github.com/yourusername/taskflow-pro",
      features: [
        "User Authentication",
        "CRUD Operations",
        "Real-time Updates",
        "File Upload",
        "Responsive Design",
      ],
      status: "Live",
    },
    {
      id: 2,
      featured: false,
      type: "frontend",
      title: "WeatherDash",
      subtitle: "Interactive Weather Dashboard",
      description:
        "Beautiful weather application with 7-day forecast, location-based services, and interactive data visualization.",
      longDescription:
        "Integrates with multiple weather APIs, displays data using charts and graphs, supports location search, and saves user preferences in local storage.",
      tech: ["React", "Chart.js", "Axios", "Tailwind CSS", "Geolocation API"],
      imageColor: "from-cyan-500 to-blue-500",
      demoLink: "https://weatherdash-demo.vercel.app",
      githubLink: "https://github.com/yourusername/weatherdash",
      features: [
        "API Integration",
        "Data Visualization",
        "Geolocation",
        "Search Functionality",
        "Dark Mode",
      ],
      status: "Live",
    },
    {
      id: 3,
      featured: false,
      type: "frontend",
      title: "DevConnect Form",
      subtitle: "Smart Contact Form Suite",
      description:
        "A sophisticated multi-step form with real-time validation, file upload, and automated email responses.",
      longDescription:
        "Includes form state management, input masking, conditional fields, CAPTCHA verification, and integration with email services like SendGrid.",
      tech: ["React", "Formik", "Yup", "React Hook Form", "Tailwind CSS"],
      imageColor: "from-green-500 to-teal-500",
      demoLink: "https://devconnect-form.vercel.app",
      githubLink: "https://github.com/yourusername/devconnect-form",
      features: [
        "Form Validation",
        "Multi-step Flow",
        "File Upload",
        "Success Notifications",
        "Responsive Design",
      ],
      status: "Live",
    },
  ];

  // অ্যানিমেশন ভ্যারিয়েন্টস
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* সেকশন হেডার */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
            <MdOutlineFeaturedPlayList />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are 3 key projects that showcase my skills in React, full-stack
            development, and creating user-friendly applications.
          </p>
        </motion.div>

        {/* ফিল্টার বাটনস (Optional) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "fullstack", "frontend"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter === "all"
                ? "All Projects"
                : filter === "fullstack"
                ? "Full Stack"
                : "Frontend"}
            </button>
          ))}
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                project.featured ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* ফিচার্ড ব্যাজ */}
              {project.featured && (
                <div className="absolute -top-3 left-6 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold shadow-lg">
                    <FiStar className="text-yellow-300" />
                    <span>Main Project</span>
                  </div>
                </div>
              )}

              {/* প্রজেক্ট কার্ড */}
              <div
                className={`h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  project.featured
                    ? "ring-2 ring-purple-500/20 dark:ring-purple-500/30"
                    : ""
                }`}
              >
                {/* ইমেজ/থাম্বনেইল */}
                <div
                  className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.imageColor}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* কন্টেন্ট */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.featured && (
                      <FiShield className="text-2xl text-purple-500" />
                    )}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* ফিচার্স লিস্ট */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* টেক স্ট্যাক */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* বাটনস */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group/btn"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                      <div className="w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">
                        →
                      </div>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FiGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* এক্সট্রা তথ্য */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-purple-100 dark:border-gray-700">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Why These 3 Projects?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Each project demonstrates a different skill set:{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  TaskFlow Pro
                </span>{" "}
                shows full-stack CRUD + Auth capabilities,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  WeatherDash
                </span>{" "}
                focuses on API integration and UI/UX, and{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  DevConnect Form
                </span>{" "}
                emphasizes form handling and user experience.
              </p>
            </div>
            <a
              href="https://github.com/yourusername?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
            >
              View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

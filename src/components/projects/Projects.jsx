"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/data/projectsData.json");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A showcase of my expertise in MERN stack development, focusing on
            performance and user experience.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-1.5 w-24 bg-indigo-600 rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

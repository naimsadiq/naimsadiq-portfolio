"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectDetailsBtn from "./ProjectDetailsBtn";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const {
    image,
    title,
    shortDescription,
    sortTechStack = [],
    github,
    live,
  } = project;

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
      {/* Image Container - Fixed Aspect Ratio */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section - Flex Grow keeps buttons at bottom */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
          {shortDescription}
        </p>

        {/* Tech Stack - Self Aligned */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sortTechStack.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Always Pushed to Bottom */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </Link>
            )}
            {live && (
              <Link
                href={live}
                target="_blank"
                className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </Link>
            )}
          </div>
          <ProjectDetailsBtn project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

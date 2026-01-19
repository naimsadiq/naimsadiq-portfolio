"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetailsContent = ({ project }) => {
  const {
    title,
    image,
    fullDescription,
    sortTechStack = [],
    github,
    live,
    features,
  } = project;

  return (
    <div className="p-8 md:p-12 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Image */}
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Right Side: Header Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {live && (
              <a
                href={live}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
              >
                <FaExternalLinkAlt size={16} /> Live Preview
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
              >
                <FaGithub size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100 dark:border-slate-800">
        {/* Features */}
        {features && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-indigo-600 rounded-full inline-block"></span>
              Key Features
            </h3>
            <ul className="space-y-3">
              {(Array.isArray(features)
                ? features
                : Object.values(features).flat()
              ).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-violet-600 rounded-full inline-block"></span>
            Built With
          </h3>
          <div className="flex flex-wrap gap-2">
            {sortTechStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;

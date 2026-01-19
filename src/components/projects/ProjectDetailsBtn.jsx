"use client";

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectDetailsContent from "./ProjectDetailsContent";

const ProjectDetailsBtn = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 underline underline-offset-4 decoration-2 decoration-indigo-500/30 flex items-center gap-1 transition-all"
      >
        View Details →
      </button>
      <ProjectDetailsModal open={open} onClose={() => setOpen(false)}>
        <ProjectDetailsContent project={project} />
      </ProjectDetailsModal>
    </>
  );
};

export default ProjectDetailsBtn;

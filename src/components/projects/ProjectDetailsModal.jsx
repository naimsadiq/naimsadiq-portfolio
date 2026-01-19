"use client";

import { X } from "lucide-react";

const ProjectDetailsModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0F172A] shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ProjectDetailsModal;

import Link from "daisyui/components/link";
import { FileText } from "lucide-react";
import React from "react";

const Resume = () => {
  return (
    <Link href="/resume.pdf" target="_blank">
      <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-600 px-8 py-4 rounded-2xl transition-all dark:text-white active:scale-95">
        <FileText size={20} /> Get Resume
      </button>
    </Link>
  );
};

export default Resume;

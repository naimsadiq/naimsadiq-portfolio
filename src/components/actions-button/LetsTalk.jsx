import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const LetsTalk = () => {
  return (
    <Link href="#contact">
      <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/50 active:scale-95">
        <Send size={20} /> Let&apos;s Talk
      </button>
    </Link>
  );
};

export default LetsTalk;

"use client";

import { Icon } from "@iconify/react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto mt-6">
      <Icon
        icon="lucide:search"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search scents or brands..."
        className="w-full pl-9 pr-4 py-2.5 text-sm bg-transparent border-b border-slate-300 focus:border-slate-900 focus:outline-none text-slate-800 placeholder:text-slate-400 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          <Icon icon="lucide:x" className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

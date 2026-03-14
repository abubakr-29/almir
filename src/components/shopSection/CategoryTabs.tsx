"use client";

import { PRODUCT_CATEGORIES, type ProductCategory } from "./types";

export const ALL_TAB = "All" as const;
export type FilterTab = typeof ALL_TAB | ProductCategory;

export const TABS: FilterTab[] = [ALL_TAB, ...PRODUCT_CATEGORIES];

interface CategoryTabsProps {
  active: FilterTab;
  onChange: (tab: FilterTab) => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <nav
      aria-label="Filter products by category"
      className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10"
    >
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          aria-current={active === tab ? "true" : undefined}
          className={[
            "pb-1 text-xs md:text-sm font-medium uppercase tracking-wide transition-colors duration-200 cursor-pointer",
            active === tab
              ? "text-slate-900 border-b-2 border-slate-900"
              : "text-slate-400 hover:text-slate-900",
          ].join(" ")}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

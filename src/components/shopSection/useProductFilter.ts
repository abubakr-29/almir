"use client";

import { useState, useMemo } from "react";
import { ALL_TAB, type FilterTab } from "./CategoryTabs";
import type { Product } from "./types";

interface UseProductFilterReturn {
  activeTab: FilterTab;
  setActiveTab: (tab: FilterTab) => void;
  filtered: Product[];
}

/**
 * Handles category filtering with two modes:
 *
 * CLIENT MODE (default — `onCategoryChange` not provided):
 *   Filters the full `products` array in memory. Fast, no network.
 *
 * CMS MODE (`onCategoryChange` provided):
 *   Calls your callback on every tab change so the parent can re-fetch
 *   from the CMS. `filtered` returns `products` as-is (CMS already filtered).
 *
 * @example Client mode
 *   const { activeTab, setActiveTab, filtered } = useProductFilter({ products });
 *
 * @example CMS mode
 *   const { activeTab, setActiveTab, filtered } = useProductFilter({
 *     products,
 *     onCategoryChange: async (tab) => {
 *       const data = await cms.getProducts({ category: tab === "All" ? undefined : tab });
 *       setProducts(data);
 *     },
 *   });
 */
export function useProductFilter({
  products,
  onCategoryChange,
}: {
  products: Product[];
  onCategoryChange?: (tab: FilterTab) => void;
}): UseProductFilterReturn {
  const [activeTab, setActiveTabState] = useState<FilterTab>(ALL_TAB);

  const setActiveTab = (tab: FilterTab) => {
    setActiveTabState(tab);
    onCategoryChange?.(tab);
  };

  const filtered = useMemo(() => {
    // CMS mode: products are already filtered externally
    if (onCategoryChange) return products;
    // Client mode: filter in memory
    if (activeTab === ALL_TAB) return products;
    return products.filter((p) => p.category === activeTab);
  }, [products, activeTab, onCategoryChange]);

  return { activeTab, setActiveTab, filtered };
}

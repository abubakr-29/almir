"use client";

import { useState, useMemo } from "react";
import type { Product, FilterTab } from "./types";
import { ALL_TAB } from "./types";

export function useProductFilter(products: Product[]) {
  const [activeTab, setActiveTab] = useState<FilterTab>(ALL_TAB);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return products.filter((p) => {
      const matchesCategory = activeTab === ALL_TAB || p.category === activeTab;

      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.inspiredBy.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeTab, search]);

  return { activeTab, setActiveTab, search, setSearch, filtered };
}

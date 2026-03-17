"use client";

import { CategoryTabs } from "./CategoryTabs";
import { SearchBar } from "./SearchBar";
import { ProductGrid } from "./ProductGrid";
import { useProductFilter } from "./useProductFilter";
import { type Product } from "./types";

interface ShopSectionProps {
  products: Product[];
  categories: string[];
}

export default function ShopSection({
  products,
  categories,
}: ShopSectionProps) {
  const { activeTab, setActiveTab, search, setSearch, filtered } =
    useProductFilter(products);

  return (
    <section className="w-full pt-30 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-10">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-slate-900 text-center tracking-tight mb-4">
            Scents That Stay With You
          </h2>
          <div className="w-16 h-1 bg-[#FF3B30] rounded-full" />
          <p className="text-sm md:text-base text-slate-500 text-center max-w-2xl mt-6 mb-4">
            Each fragrance is designed to match a different mood, moment, and
            personality.
          </p>
          <SearchBar value={search} onChange={setSearch} />
          <CategoryTabs
            categories={categories}
            active={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}

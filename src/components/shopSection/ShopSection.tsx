"use client";

import { CategoryTabs, type FilterTab } from "./CategoryTabs";
import { ProductGrid } from "./ProductGrid";
import { useProductFilter } from "./useProductFilter";
import type { Product } from "./types";

// ─── Placeholder data ─────────────────────────────────────────────────────────
// TODO: delete once wired to CMS — pass real data via the `products` prop.

const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Maison Francis",
    brand: "Viktor & Rolf",
    image: "/perfume.jpeg",
    category: "Oud",
  },
  {
    id: 2,
    name: "Philosophy",
    brand: "YSL Saint",
    image: "/perfume.jpeg",
    category: "Floral",
  },
  {
    id: 3,
    name: "Aerin",
    image: "/perfume.jpeg",
    brand: "Viktor & Rolf",
    category: "Fresh",
  },
  {
    id: 4,
    name: "Viktor & Rolf",
    brand: "YSL Saint",
    image: "/perfume.jpeg",
    category: "Floral",
  },
  {
    id: 5,
    name: "Estee Lauder",
    brand: "Chanel",
    image: "/perfume.jpeg",
    category: "Woody",
  },
  {
    id: 6,
    name: "Escentric",
    brand: "Dior",
    image: "/perfume.jpeg",
    category: "Citrus",
  },
  {
    id: 7,
    name: "Gucci",
    brand: "Chanel",
    image: "/perfume.jpeg",
    category: "Woody",
  },
  {
    id: 8,
    name: "Elizabeth Arden",
    brand: "Dior",
    image: "/perfume.jpeg",
    category: "Citrus",
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface ShopSectionProps {
  /**
   * Pass CMS-fetched products here.
   * Falls back to placeholder data during development.
   */
  products?: Product[];
  /**
   * Optional: provide this to switch to CMS mode.
   * Called with the selected FilterTab whenever the user changes category.
   * When provided, `products` is treated as already-filtered data from the CMS.
   *
   * @example
   * onCategoryChange={async (tab) => {
   *   const data = await cms.getProducts({
   *     category: tab === "All" ? undefined : tab,
   *   });
   *   setProducts(data);
   * }}
   */
  onCategoryChange?: (tab: FilterTab) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShopSection({
  products = PLACEHOLDER_PRODUCTS,
  onCategoryChange,
}: ShopSectionProps) {
  const { activeTab, setActiveTab, filtered } = useProductFilter({
    products,
    onCategoryChange,
  });

  return (
    <section className="w-full pt-30 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-10">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-slate-900 text-center tracking-tight mb-4">
            Scents That Stay With You
          </h2>
          <div className="w-16 h-1 bg-[#FF3B30] rounded-full" />
          <CategoryTabs active={activeTab} onChange={setActiveTab} />
        </div>

        {/* Grid */}
        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}

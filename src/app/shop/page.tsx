import { type SanityProduct } from "@/components/shopSection/types";
import ShopSection from "@/components/shopSection/ShopSection";
import { capitalizeName } from "@/libs/utils";
import { ALL_CATEGORIES_QUERY, ALL_PRODUCTS_QUERY } from "@/libs/queries";
import { client } from "@/sanity/client";
import { Metadata } from "next";

interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
}

export const metadata: Metadata = {
  title: "Shop All Fragrances",
  description:
    "Browse AL-MIR™'s full collection of premium inspired fragrances — Oud, Floral, Woody, Fresh & Citrus. Long-lasting scents at accessible prices.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop All Fragrances | AL-MIR™",
    description: "Browse our full collection of premium inspired fragrances.",
    url: "https://almir.co.in/shop",
  },
};

export default async function ShopPage() {
  const [rawProducts, rawCategories] = await Promise.all([
    client.fetch<SanityProduct[]>(ALL_PRODUCTS_QUERY),
    client.fetch<SanityCategory[]>(ALL_CATEGORIES_QUERY),
  ]);

  const products = rawProducts.map((p: SanityProduct) => ({
    id: p._id,
    name: capitalizeName(p.name),
    inspiredBy: capitalizeName(p.inspiredBy),
    image: p.image,
    category: capitalizeName(p.category?.title ?? ""),
  }));

  const categories: string[] = rawCategories.map((c) =>
    capitalizeName(c.title),
  );

  return <ShopSection products={products} categories={categories} />;
}

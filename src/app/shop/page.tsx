import { type SanityProduct } from "@/components/shopSection/types";
import ShopSection from "@/components/shopSection/ShopSection";
import { capitalizeName } from "@/libs/utils";
import { ALL_CATEGORIES_QUERY, ALL_PRODUCTS_QUERY } from "@/libs/queries";
import { client } from "@/sanity/client";

interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
}

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

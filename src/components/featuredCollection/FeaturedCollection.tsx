import Link from "next/link";
import ProductCard from "./ProductCard";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {
  FEATURED_PRODUCTS_QUERY,
  LATEST_PRODUCTS_QUERY,
  options,
} from "@/libs/queries";

interface Product extends SanityDocument {
  _id: string;
  name: string;
  slug: string;
  image: string;
  inspiredBy: string;
}

export default async function FeaturedCollection() {
  const featured = await client.fetch<Product[]>(
    FEATURED_PRODUCTS_QUERY,
    {},
    options,
  );
  const latest = await client.fetch<Product[]>(
    LATEST_PRODUCTS_QUERY,
    {},
    options,
  );
  const products: Product[] = featured.length > 0 ? featured : latest;

  return (
    <section id="products" className="py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#EA4036]" />
          <span className="text-xs tracking-widest text-slate-500 uppercase">
            Featured
          </span>
          <span className="w-12 h-px bg-[#EA4036]" />
        </div>
        <h2 className="font-playfair-display text-3xl lg:text-4xl text-slate-900">
          Signature Scents
        </h2>
      </div>

      {products.length === 0 ? (
        // Empty state
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-slate-400 text-sm tracking-widest uppercase mb-2">
            Coming Soon
          </p>
          <p className="text-slate-500 text-base">
            Our new collection is being prepared.
          </p>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <Link
              href={"/shop"}
              target="_self"
              rel="noopener noreferrer"
              aria-label="View more products in Al Mir's collection"
              className="bg-[#FF3B30] hover:bg-red-600 text-white text-base lg:text-lg font-medium px-8 py-4 lg:px-10 lg:py-4 shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Find Yours
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

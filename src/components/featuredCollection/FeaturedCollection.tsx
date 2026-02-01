import Link from "next/link";
import ProductCard from "./ProductCard";

interface Products {
  id: number;
  image: string;
  name: string;
  brand: string;
  rating: number;
}

const products: Products[] = [
  {
    id: 1,
    image: "/perfume.avif",
    name: "Golden Elegance",
    brand: "Viktor & Rolf",
    rating: 5,
  },
  {
    id: 2,
    image: "/perfume.avif",
    name: "Silver Mist",
    brand: "YSL Saint",
    rating: 4,
  },
  {
    id: 3,
    image: "/perfume.avif",
    name: "Noir Classic",
    brand: "Chanel",
    rating: 5,
  },
  {
    id: 4,
    image: "/perfume.avif",
    name: "Rose Blush",
    brand: "Dior",
    rating: 5,
  },
];

export default function FeaturedCollection() {
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
          New Collection
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-12">
        <Link
          href={"#"}
          className="bg-[#FF3B30] hover:bg-red-600 text-white text-base lg:text-lg font-medium px-8 py-4 lg:px-10 lg:py-4 shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          View More
        </Link>
      </div>
    </section>
  );
}

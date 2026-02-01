import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  rating: number;
}

export default function ProductCard({
  image,
  name,
  brand,
  rating,
}: ProductCardProps) {
  return (
    <Link
      href={"#"}
      className="flex flex-col items-center group cursor-pointer group"
    >
      <div className="relative w-full aspect-square bg-white shadow-sm group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 overflow-hidden">
        <Image
          src={image}
          alt="Blue Perfume Bottle"
          fill
          className="h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          priority
        />
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-0.5 mt-4 mb-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon={i < rating ? "solar:star-bold" : "solar:star-outline"}
            className="h-4 w-4 text-[#FF3B30]"
          />
        ))}
      </div>

      <p className="text-xs text-slate-500 uppercase tracking-wide mt-2">
        {brand}
      </p>
      <h3 className="text-xl text-slate-900 mt-1 font-medium tracking-tight">
        {name}
      </h3>
      <div className="mt-1 text-[#FF3B30] text-sm font-semibold underline underline-offset-4 decoration-[#FF3B30] group-hover:text-red-700 group-hover:decoration-red-700 transition-colors cursor-pointer">
        Buy Now
      </div>
    </Link>
  );
}

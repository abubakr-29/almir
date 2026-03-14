import Image from "next/image";
import { type Product } from "./types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const buildWhatsAppUrl = (productName: string): string => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the *${productName}* fragrance. Could you please share more details?`,
    );
    return `https://wa.me/971501234567?text=${message}`;
  };

  return (
    <Link
      href={buildWhatsAppUrl(product.name)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${product.name} on WhatsApp`}
      className="flex flex-col items-center group cursor-pointer group"
    >
      <div className="relative w-full aspect-square bg-white shadow-sm group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl text-slate-900 mt-3 mb-2 font-medium tracking-tight">
        {product.name}
      </h3>
      <p className="text-xs text-slate-500 uppercase tracking-wide">
        {product.brand}
      </p>
      <div className="mt-1 text-[#FF3B30] text-sm font-semibold underline underline-offset-4 decoration-[#FF3B30] group-hover:text-red-700 group-hover:decoration-red-700 transition-colors cursor-pointer">
        Buy Now
      </div>
    </Link>
  );
}

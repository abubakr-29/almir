import { capitalizeName } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  inspiredBy: string;
}

export default function ProductCard({
  name,
  image,
  inspiredBy,
}: ProductCardProps) {
  const buildWhatsAppUrl = (productName: string): string => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the *${productName}* fragrance. Could you please share more details?`,
    );
    return `https://wa.me/919051879009?text=${message}`;
  };

  return (
    <Link
      href={buildWhatsAppUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${name} on WhatsApp`}
      className="flex flex-col items-center group cursor-pointer group"
    >
      <div className="relative w-full aspect-square bg-white shadow-sm group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          priority
        />
      </div>
      <h3 className="text-xl text-slate-900 mt-3 mb-1 font-medium tracking-tight">
        {capitalizeName(name)}
      </h3>
      <p className="text-xs tracking-wide text-neutral-500 mb-0.5">
        Inspired by
      </p>
      <p className="text-xs text-slate-500 uppercase tracking-wide">
        {inspiredBy}
      </p>
      <div className="mt-1 text-[#FF3B30] text-sm font-semibold underline underline-offset-4 decoration-[#FF3B30] group-hover:text-red-700 group-hover:decoration-red-700 transition-colors cursor-pointer">
        Buy Now
      </div>
    </Link>
  );
}

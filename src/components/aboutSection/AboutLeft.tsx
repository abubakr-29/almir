import Link from "next/link";
import { Icon } from "@iconify/react";

interface FocusPoint {
  text: string;
}

const FOCUS_POINTS: FocusPoint[] = [
  { text: "High oil concentration for long-lasting performance" },
  { text: "Carefully balanced top, heart, and base notes" },
  { text: "Premium packaging that reflects the fragrance inside" },
];

export default function AboutLeft() {
  return (
    <div className="flex flex-col items-center lg:items-start z-10 w-full lg:w-1/2 text-center lg:text-left">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="w-12 h-px bg-[#EA4036]" />
        <span className="text-xs tracking-widest text-slate-500 uppercase">
          About Al Mir
        </span>
        <span className="w-12 h-px bg-[#EA4036]" />
      </div>
      <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tighter leading-[1.1] mb-6">
        Where Tradition Meets Modern Luxury.
      </h2>
      <div className="text-slate-700 space-y-4 text-base lg:text-lg leading-relaxed">
        <p>
          Al Mir was created with one goal — to deliver premium fragrances that
          feel luxurious without being unreachable.
        </p>
        <p>
          Inspired by the richness of Middle Eastern perfumery and refined for
          the modern generation, every bottle represents quality, intensity, and
          character.
        </p>
        <p>We focus on:</p>
        <ul className="space-y-2 inline-block text-left">
          {FOCUS_POINTS.map((item) => (
            <li key={item.text} className="flex items-center gap-3">
              <Icon
                icon="lucide:diamond"
                className="w-3.5 h-3.5 text-[#EA4036] shrink-0"
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <p>We do not chase trends. We build timeless scents.</p>
      </div>
      <div className="flex items-center mt-6">
        <Link
          href={"/shop"}
          target="_self"
          rel="noopener noreferrer"
          aria-label="Explore Al Mir's fragrance collection"
          className="bg-slate-900 hover:bg-slate-700 text-white text-base lg:text-lg font-medium px-8 py-4 lg:px-10 lg:py-4 shadow-lg shadow-slate-700/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
}

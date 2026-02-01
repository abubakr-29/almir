import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="w-full">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
        {/* Floating shapes */}
        <div className="absolute top-10 left-8 text-pink-300 opacity-80">
          <Icon icon="lucide:flower" className="w-6 h-6 rotate-12" />
        </div>

        {/* Left Text Content */}
        <div className="flex flex-col items-start z-10 w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6">
            New Perfume <br className="hidden md:block" />
            Collection
          </h2>
          <span className="text-[#FF3B30] text-3xl md:text-4xl font-playfair-display italic mb-8">
            $320.00
          </span>
          <div className="flex items-center gap-6">
            <Link
              href={"#"}
              className="bg-slate-900 hover:bg-slate-700 text-white text-base lg:text-lg font-medium px-8 py-4 lg:px-10 lg:py-4 shadow-lg shadow-slate-700/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Buy Now
            </Link>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Squiggle Line */}
          <svg
            className="absolute -top-8 left-4 md:left-10 w-20 h-20 md:w-24 md:h-24 text-[#FF3B30] opacity-80 z-20"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M10 80 Q 20 20 40 50 T 70 50 T 100 20" />
          </svg>

          {/* Main Image Container */}
          <div className="z-10">
            <Image
              src={"/perfume.jpg"}
              alt="Perfume"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Red Circle Decoration */}
          <div className="absolute -bottom-8 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-[#FF3B30] rounded-full z-0 opacity-90" />
        </div>
      </div>
    </section>
  );
}

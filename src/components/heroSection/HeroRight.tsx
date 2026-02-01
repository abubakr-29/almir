import Link from "next/link";

export default function HeroRight() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center pl-0 md:pl-8 order-1 md:order-2 mt-10 md:mt-0 text-center md:text-left">
      <span className="text-slate-500 font-medium text-base lg:text-lg mb-4 tracking-wide">
        Luxury Fragrance Store
      </span>

      <h1 className="text-5xl lg:text-7xl text-slate-900 leading-[1.1] mb-8 tracking-tight font-playfair-display">
        Smell is a word <br className="hidden md:block" />
        Perfume is <br className="hidden md:block" />
        Literature
      </h1>

      <p className="text-base lg:text-lg text-slate-500 max-w-md mb-10 leading-relaxed">
        Discover the essence of elegance with our curated collection of fine
        fragrances designed to tell your unique story.
      </p>

      <div className="flex items-center gap-6">
        <Link
          href={"#"}
          className="bg-[#FF3B30] hover:bg-red-600 text-white text-base lg:text-lg font-medium px-8 py-4 lg:px-10 lg:py-4 shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function AboutRight() {
  return (
    <div className="relative w-full lg:w-1/2 flex justify-center items-center">
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
          src={"/bleu.jpg"}
          alt="Perfume"
          width={500}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Red Circle Decoration */}
      <div className="absolute -bottom-8 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-[#FF3B30] rounded-full z-0 opacity-90" />
    </div>
  );
}

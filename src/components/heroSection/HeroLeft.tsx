import Image from "next/image";

export default function HeroLeft() {
  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center order-2 md:order-1">
      {/* Red Circle Background */}
      <div className="absolute w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-[#FF3B30] rounded-full left-[43%] top-[45%] -translate-x-2/3 -translate-y-1/2" />

      {/* Product Image */}
      <div className="relative z-10">
        <Image
          src={"/heroImage.png"}
          alt="Blue Perfume Bottle"
          width={400}
          height={400}
          className="w-70 h-70 sm:w-87.5 sm:h-87.5 lg:w-100 lg:h-100 object-cover -rotate-12"
          priority
        />
      </div>
    </div>
  );
}

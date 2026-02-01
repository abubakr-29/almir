import HeroLeft from "./HeroLeft";
import { Icon } from "@iconify/react";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-between pb-16 pt-24 px-4"
    >
      {/* Abstract Floating Shapes */}
      <Icon
        className="absolute top-35 left-10 text-[#FFD6C9] opacity-80 text-4xl"
        icon="solar:record-bold"
      />
      <Icon
        className="absolute bottom-20 left-15 text-red-400 opacity-80 text-2xl"
        icon="solar:box-minimalistic-linear"
        style={{ transform: "rotate(15deg)" }}
      />
      <Icon
        className="absolute top-20 right-20 text-red-500 text-xl rotate-45"
        icon="solar:play-bold"
      />
      <Icon
        className="absolute top-3/4 right-12 text-slate-800 text-xl"
        icon="solar:play-bold"
        style={{ transform: "rotate(-15deg)" }}
      />

      {/* Left: Image Composition */}
      <HeroLeft />

      {/* Right: Content */}
      <HeroRight />
    </section>
  );
}

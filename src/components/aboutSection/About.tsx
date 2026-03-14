import { Icon } from "@iconify/react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

export default function PromoBanner() {
  return (
    <section id="about" className="w-full">
      <div className="relative w-full flex flex-col gap-10 lg:gap-2 lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
        {/* Floating shapes */}
        <div className="absolute top-8 left-8 text-pink-300 opacity-80">
          <Icon icon="lucide:flower" className="w-6 h-6 rotate-12" />
        </div>

        {/* Left Text Content */}
        <AboutLeft />

        {/* Right Image Content */}
        <AboutRight />
      </div>
    </section>
  );
}

"use client";

import { useState, useCallback, useRef, createRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

import { TestimonialCard } from "./TestimonialCard";
import { useDragSwipe } from "./useDragSwipe";
import { getSlot, getSlotProps } from "./carousel.utils";

interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  name: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = testimonials.length;

  const cardRefs = useMemo(
    () => testimonials.map(() => createRef<HTMLDivElement | null>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [total],
  );

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const swipe = useDragSwipe(next, prev);

  // containerRef lets useGSAP scope its context to the carousel
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      testimonials.forEach((_, index) => {
        const el = cardRefs[index]?.current;
        if (!el) return;

        const slot = getSlot(index, activeIndex, total);
        const props = getSlotProps(slot);

        gsap.to(el, {
          ...props,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });

        el.setAttribute("aria-hidden", slot !== 0 ? "true" : "false");
      });
    },
    { scope: containerRef, dependencies: [activeIndex] },
  );

  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 md:px-12 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-100 bg-white/40 blur-[100px] rounded-full z-0 pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-10">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-slate-900 text-center tracking-tight mb-4">
            Loved by Creatives
          </h2>
          <div className="w-16 h-1 bg-[#FF3B30] rounded-full" />
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative w-full max-w-125 h-87.5 sm:h-70 mb-8 flex justify-center mt-6 z-10 cursor-grab active:cursor-grabbing select-none"
          role="region"
          aria-label="Testimonials carousel"
          {...swipe}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              cardRef={cardRefs[index]}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5 mt-10 z-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300 bg-white shadow-sm hover:shadow-md cursor-pointer"
          >
            <Icon icon="lucide:chevron-left" className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#F97316] hover:border-orange-200 transition-all duration-300 bg-white shadow-sm hover:shadow-md cursor-pointer"
          >
            <Icon icon="lucide:chevron-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

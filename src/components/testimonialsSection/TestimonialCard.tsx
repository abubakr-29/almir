import { Icon } from "@iconify/react";
import { capitalizeName, getInitials } from "./carousel.utils";

interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  name: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export function TestimonialCard({
  testimonial,
  cardRef,
}: TestimonialCardProps) {
  return (
    <div
      ref={cardRef}
      className="absolute top-0 w-[95%] sm:w-112.5 bg-white rounded-4xl p-8 origin-center border border-slate-50 flex flex-col will-change-transform"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1 text-[#F97316]">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon={
                i < testimonial.rating
                  ? "solar:star-bold"
                  : "solar:star-outline"
              }
              className="h-4 w-4 fill-current"
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Footer */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 font-semibold text-sm">
            {getInitials(testimonial.name)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              {capitalizeName(testimonial.name)}
            </span>
            {/* <span className="text-xs font-medium text-slate-500">
              {testimonial.title}
            </span> */}
          </div>
        </div>
        {/* <Icon
          icon="lucide:link"
          className="w-5 h-5 text-slate-300 -rotate-45"
        /> */}
      </div>
    </div>
  );
}

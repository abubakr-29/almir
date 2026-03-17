import { client } from "@/sanity/client";
import TestimonialsSectionClient from "./TestimonialsSectionClient";
import { TESTIMONIALS_QUERY } from "@/libs/queries";
import { capitalizeName } from "./carousel.utils";

interface Testimonial {
  _id: string;
  quote: string;
  rating: number;
  name: string;
}

export default async function TestimonialsSection() {
  const raw = await client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);

  if (!raw || raw.length === 0) {
    return (
      <section id="testimonials" className="w-full py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-playfair-display text-3xl md:text-4xl text-slate-900 text-center tracking-tight mb-4">
              Loved by Creatives
            </h2>
            <div className="w-16 h-1 bg-[#FF3B30] rounded-full" />
          </div>
          <p className="text-slate-400 text-xs tracking-widest uppercase">
            Reviews coming soon
          </p>
        </div>
      </section>
    );
  }

  const testimonials = raw.map((t: Testimonial) => ({
    id: t._id,
    name: capitalizeName(t.name),
    quote: t.quote,
    rating: t.rating,
  }));

  return <TestimonialsSectionClient testimonials={testimonials} />;
}

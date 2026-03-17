import ReasonCardItem from "./ReasonCardItem";

interface ReasonCard {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const REASONS: ReasonCard[] = [
  {
    number: "01",
    icon: "solar:hourglass-bold-duotone",
    title: "Long-Lasting Performance",
    description:
      "Our fragrances are meticulously formulated to linger gracefully on your skin, evolving beautifully over time and ensuring you leave a lasting impression from day to night.",
  },
  {
    number: "02",
    icon: "solar:crown-bold-duotone",
    title: "Finest Ingredients",
    description:
      "We source only the high-quality fragrance oils and carefully selected notes to ensure unparalleled longevity and sillage.",
  },
  {
    number: "03",
    icon: "solar:star-bold-duotone",
    title: "Distinctive Identity",
    description:
      "Each scent is designed to stand apart, giving you a unique olfactory signature that captures attention and sets you apart in every room you enter.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-slate-900 text-center tracking-tight mb-4">
            Why AL-MIR?
          </h2>
          <div className="w-16 h-1 bg-[#FF3B30] rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason) => (
            <ReasonCardItem key={reason.number} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

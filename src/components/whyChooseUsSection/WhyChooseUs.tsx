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
    icon: "solar:crown-bold-duotone",
    title: "Finest Ingredients",
    description:
      "We source only the rarest and most exquisite raw materials from around the globe to ensure unparalleled longevity and sillage.",
  },
  {
    number: "02",
    icon: "solar:magic-stick-3-bold-duotone",
    title: "Master Perfumers",
    description:
      "Every fragrance is meticulously crafted by world-renowned artisans, blending tradition with modern olfactory innovation.",
  },
  {
    number: "03",
    icon: "solar:box-minimalistic-bold-duotone",
    title: "Luxury Packaging",
    description:
      "Encased in bespoke glass flacons, our perfumes are presented in elegant, sustainable packaging that honors the art of gifting.",
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

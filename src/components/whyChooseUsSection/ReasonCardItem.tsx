import { Icon } from "@iconify/react";

interface ReasonCard {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export default function ReasonCardItem({
  number,
  icon,
  title,
  description,
}: ReasonCard) {
  return (
    <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <span className="absolute -top-6 right-2 text-8xl font-playfair-display font-semibold text-slate-100 group-hover:scale-110 transition-transform duration-500 pointer-events-none select-none">
        {number}
      </span>
      <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
        <Icon icon={icon} className="text-3xl text-[#FF3B30]" />
      </div>
      <h3 className="serif text-xl font-semibold tracking-tight text-slate-900 mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}

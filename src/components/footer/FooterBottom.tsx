import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-slate-300 pt-8 sm:pt-12 relative flex items-end justify-between w-full">
      <h2 className="text-[5.5rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[20rem] leading-[0.75] text-slate-900 tracking-tighter uppercase -ml-2 whitespace-nowrap">
        AL-MIR
      </h2>

      <div className="relative h-full flex items-end justify-end pb-4 md:pb-8 pr-2">
        {/* Copyright */}
        <span
          className="font-semibold text-xs sm:text-sm text-slate-500 tracking-widest uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          &copy; AL-MIR™ {new Date().getFullYear()}
        </span>

        {/* Made by */}
        <Link
          href="https://famedia.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[10px] text-slate-500 hover:text-slate-700 tracking-widest uppercase transition-colors duration-200 whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Made by FAMedia
        </Link>
      </div>
    </div>
  );
}

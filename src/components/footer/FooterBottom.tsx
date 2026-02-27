export default function FooterBottom() {
  return (
    <div className="border-t border-dashed border-slate-300 pt-8 sm:pt-12 relative flex items-end justify-between w-full">
      <h2 className="serif text-[8rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[20rem] leading-[0.75] text-slate-900 tracking-tighter uppercase -ml-2 whitespace-nowrap">
        AL-MIR
      </h2>
      <div className="relative h-full flex flex-col justify-end pb-4 md:pb-8 pr-2">
        <span
          className="text-sm text-slate-500 tracking-widest uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          &copy; AL-MIR {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}

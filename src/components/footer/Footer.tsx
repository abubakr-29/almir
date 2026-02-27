import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";
import BrandMission from "./BrandMission";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2ECE4] pt-20 md:pt-28 px-6 md:px-12 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row w-full mb-16 gap-12 md:gap-0">
          <BrandMission />
          <FooterNav />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

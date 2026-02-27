import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface FooterColumn {
  links: NavLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    links: [
      { label: "Shop", href: "#" },
      { label: "About", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Download App", href: "#" },
    ],
  },
  {
    links: [
      { label: "Terms and Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies Policy", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export default function FooterNav() {
  return (
    <div className="w-full md:w-7/12 flex flex-col sm:flex-row gap-8 sm:gap-24 md:pl-20 pt-2 md:pt-0">
      {FOOTER_COLUMNS.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {col.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-slate-800 hover:text-[#FF3B30] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

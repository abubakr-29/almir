import Link from "next/link";
import { Icon } from "@iconify/react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading?: string;
  links: NavLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface ContactItem {
  icon: string;
  label: string;
  href: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Download App", href: "/app" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookies Policy", href: "/cookies" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "lucide:phone",
    label: "+971 50 123 4567",
    href: "tel:+971501234567",
  },
  {
    icon: "lucide:mail",
    label: "hello@almir.com",
    href: "mailto:hello@almir.com",
  },
  {
    icon: "lucide:map-pin",
    label: "Kolkata, India",
    href: "https://maps.google.com",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "mdi:instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "mdi:facebook",
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: "ri:twitter-x-fill",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971501234567",
    icon: "ic:baseline-whatsapp",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FooterNav() {
  return (
    <div className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:pl-20 pt-2 md:pt-0">
      {/* Nav columns */}
      {FOOTER_COLUMNS.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-1">
          {col.heading && (
            <p className="text-xs tracking-[0.15em] uppercase text-slate-400 mb-3 font-medium">
              {col.heading}
            </p>
          )}
          <div className="flex flex-col gap-3.5">
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-slate-800 hover:text-[#FF3B30] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Contact column */}
      <div className="flex flex-col gap-1 col-span-2 lg:col-span-1">
        <p className="text-xs tracking-[0.15em] uppercase text-slate-400 mb-3 font-medium">
          Contact
        </p>

        <div className="flex flex-col gap-3.5">
          {CONTACT_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center gap-2.5 text-base text-slate-800 hover:text-[#FF3B30] transition-colors duration-200 group"
            >
              <Icon
                icon={item.icon}
                className="w-4 h-4 text-slate-400 group-hover:text-[#FF3B30] transition-colors duration-200 shrink-0"
              />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-6">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#FF3B30] hover:border-[#FF3B30] transition-all duration-200"
            >
              <Icon icon={social.icon} className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

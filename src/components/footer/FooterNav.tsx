import Link from "next/link";
import { Icon } from "@iconify/react";

interface NavLink {
  label: string;
  href: string;
}

interface ContactItem {
  icon: string;
  label: string;
  href: string;
}

const EXPLORE_COLUMN: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/#about" },
];

const LEGAL_COLUMN: NavLink[] = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "lucide:phone",
    label: "+91 90518 79009",
    href: "tel:+919051879009",
  },
  {
    icon: "lucide:mail",
    label: "hello@almir.com",
    href: "mailto:hello@almir.com",
  },
];

const SOCIAL_LINKS: ContactItem[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "mdi:instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "mdi:facebook" },
  { label: "X / Twitter", href: "https://x.com", icon: "ri:twitter-x-fill" },
  {
    label: "WhatsApp",
    href: "https://wa.me/919051879009?text=Hi%20AL-MIR%2C%20I%27d%20love%20to%20know%20more%20about%20your%20fragrances%20and%20get%20recommendations%20for%20my%20style.",
    icon: "ic:baseline-whatsapp",
  },
];

export default function FooterNav() {
  return (
    <div className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:pl-20 pt-2 md:pt-0">
      {/* Explore + Legal */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs tracking-[0.15em] uppercase text-slate-400 mb-3 font-medium">
            Explore
          </p>
          <div className="flex flex-col gap-3">
            {EXPLORE_COLUMN.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-slate-800 hover:text-[#FF3B30] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs tracking-[0.15em] uppercase text-slate-400 mb-3 font-medium">
            Legal
          </p>
          <div className="flex flex-col gap-2.5">
            {LEGAL_COLUMN.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-slate-800 hover:text-[#FF3B30] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex flex-col gap-1">
        <p className="text-xs tracking-[0.15em] uppercase text-slate-400 mb-3 font-medium">
          Find Us
        </p>
        <div className="w-full h-40 overflow-hidden rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.32857896841747!2d88.32435340039879!3d22.53203370510108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779358174ab5%3A0xa516acf13936b8bd!2sAL-MIR%20fragrances!5e0!3m2!1sen!2sin!4v1773759819762!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) contrast(0.9)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Mir location"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-1">
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

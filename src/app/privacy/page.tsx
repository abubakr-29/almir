import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AL-MIR® Fragrances.",
  robots: { index: false },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content:
      "When you interact with AL-MIR™ — whether through our website, WhatsApp, or direct communication — we may collect your name, contact number, email address, and delivery details. We do not collect sensitive financial data.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used solely to process orders, respond to enquiries, and improve your experience with AL-MIR™. We do not use your data for unsolicited marketing without your consent.",
  },
  {
    title: "3. Data Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your delivery details with trusted courier partners strictly for order fulfilment purposes.",
  },
  {
    title: "4. Data Retention",
    content:
      "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable law.",
  },
  {
    title: "5. Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us directly via email or WhatsApp.",
  },
  {
    title: "7. Security",
    content:
      "We take reasonable precautions to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to external sites. AL-MIR™ is not responsible for the privacy practices or content of those sites.",
  },
  {
    title: "9. Updates to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We encourage you to review it periodically. Continued use of our website constitutes acceptance of any changes.",
  },
  {
    title: "10. Contact",
    content:
      "For any privacy-related concerns, please reach out at hello@almir.com or via WhatsApp at +91 90518 79009.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#EA4036]" />
            <span className="text-[#EA4036] text-xs uppercase tracking-[0.2em] font-medium">
              Legal
            </span>
          </div>
          <h1 className="font-playfair-display text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-700 text-base leading-relaxed mb-12 border-l-2 border-[#EA4036] pl-5">
          At AL-MIR™, your privacy is important to us. This policy explains what
          data we collect, how we use it, and your rights regarding your
          personal information.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-playfair-display text-xl text-slate-900 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-20 pt-10 border-t border-slate-300">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-[#EA4036] transition-colors duration-200 tracking-wide"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

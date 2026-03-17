import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions — AL-MIR",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the AL-MIR™ website and purchasing our products, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.",
  },
  {
    title: "2. Products",
    content:
      "All fragrances listed on our website are subject to availability. We reserve the right to discontinue any product at any time. Product images are for illustrative purposes and may slightly differ from the actual product.",
  },
  {
    title: "3. Orders & Payments",
    content:
      "Orders are confirmed only upon receipt of full payment. We accept payments via WhatsApp-based ordering. AL-MIR™ reserves the right to cancel any order due to pricing errors or stock unavailability.",
  },
  {
    title: "4. Shipping & Delivery",
    content:
      "We ship to selected regions. Delivery timelines are estimates and may vary due to courier delays or unforeseen circumstances. AL-MIR™ is not responsible for delays caused by third-party shipping providers.",
  },
  {
    title: "5. Returns & Refunds",
    content:
      "Due to the nature of fragrance products, we do not accept returns or offer refunds once a product has been opened or used. Damaged or incorrect items must be reported within 48 hours of delivery with supporting evidence.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content on this website — including text, imagery, logos, and branding — is the intellectual property of AL-MIR™. Unauthorized reproduction or distribution is strictly prohibited.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "AL-MIR™ shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the value of the product purchased.",
  },
  {
    title: "8. Changes to Terms",
    content:
      "We reserve the right to update these Terms at any time. Continued use of our website after changes constitutes acceptance of the revised Terms.",
  },
  {
    title: "9. Contact",
    content:
      "For any questions regarding these Terms, please contact us at hello@almir.com or via WhatsApp at +91 90518 79009.",
  },
];

export default function TermsPage() {
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
            Terms & Conditions
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
          Please read these Terms and Conditions carefully before using the
          AL-MIR™ website or placing an order. These terms govern your
          relationship with AL-MIR™ Fragrances.
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

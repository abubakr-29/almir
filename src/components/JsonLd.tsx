export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Local Business ───────────────────────────────────────────────────
      {
        "@type": "LocalBusiness",
        "@id": "https://almir.co.in/#business",
        name: "AL-MIR™ Fragrances",
        description:
          "Premium long-lasting fragrances inspired by the world's finest luxury perfume houses. Oud, Floral, Woody and Fresh scents.",
        url: "https://almir.co.in",
        telephone: "+919051879009",
        email: "hello@almir.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.532,
          longitude: 88.324,
        },
        sameAs: [
          "https://instagram.com/almir_fragrances",
          "https://facebook.com/almir_fragrances",
          "https://wa.me/919051879009",
        ],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        openingHours: "Mo-Sa 09:00-20:00",
      },
      // ── Organization ─────────────────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://almir.co.in/#organization",
        name: "AL-MIR™ Fragrances",
        url: "https://almir.co.in",
        logo: {
          "@type": "ImageObject",
          url: "https://almir.co.in/almir_logo.svg",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971501234567",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
      },
      // ── Website ──────────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://almir.co.in/#website",
        url: "https://almir.co.in",
        name: "AL-MIR™ Fragrances",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://almir.co.in/shop?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/JsonLd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AL-MIR™ Fragrances | Premium Perfumes Inspired by Luxury Brands",
    template: "%s | AL-MIR™ Fragrances",
  },
  description:
    "Discover AL-MIR™ — premium long-lasting fragrances inspired by the world's finest luxury perfume houses. Shop Oud, Floral, Woody & Fresh scents. Based in Kolkata, India.",

  keywords: [
    "perfume",
    "fragrance",
    "luxury perfume India",
    "inspired perfume",
    "oud perfume",
    "long lasting perfume",
    "perfume Kolkata",
    "affordable luxury fragrance",
    "AL-MIR fragrances",
    "buy perfume online India",
    "perfume inspired by designer brands",
    "floral perfume",
    "woody perfume",
    "fresh perfume",
    "Middle Eastern fragrance",
  ],

  authors: [{ name: "AL-MIR Fragrances", url: "https://almir.co.in" }],
  creator: "AL-MIR Fragrances",
  publisher: "AL-MIR Fragrances",

  metadataBase: new URL("https://almir.co.in"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://almir.co.in",
    siteName: "AL-MIR™ Fragrances",
    title: "AL-MIR™ Fragrances | Premium Perfumes Inspired by Luxury Brands",
    description:
      "Premium long-lasting fragrances inspired by the world's finest luxury perfume houses. Oud, Floral, Woody & Fresh scents. Based in Kolkata, India.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "AL-MIR™ Fragrances — Premium Inspired Perfumes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AL-MIR™ Fragrances | Premium Perfumes Inspired by Luxury Brands",
    description:
      "Premium long-lasting fragrances inspired by the world's finest luxury perfume houses.",
    images: ["/og-image.webp"],
    creator: "@almir_fragrances",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}

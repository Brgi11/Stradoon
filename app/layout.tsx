import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

const cardo = localFont({
  src: [
    { path: "../public/fonts/Cardo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Cardo-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Cardo-Bold.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-cardo",
  display: "swap"
});

const snell = localFont({
  src: [
    { path: "../public/fonts/snellroundhand_bold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/snellroundhand_black.otf", weight: "700", style: "normal" }
  ],
  variable: "--font-snell",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stradoon.com"),
  title: "Stradoon | Breakfast & Martini Bar",
  description:
    "Start your day with an elegant breakfast and enjoy expertly crafted Martinis in the heart of Dubrovnik.",
  icons: {
    icon: "/images/stradoon-mini-logo.jpg",
    shortcut: "/images/stradoon-mini-logo.jpg",
    apple: "/images/stradoon-mini-logo.jpg"
  },
  openGraph: {
    type: "website",
    siteName: "Stradoon",
    title: "Stradoon | Breakfast, Handmade Pasta & Martini Bar",
    description:
      "Start your day with an elegant breakfast and enjoy expertly crafted Martinis in the heart of Dubrovnik.",
    images: [
      {
        url: "/images/stradoon-mini-logo.jpg",
        width: 500,
        height: 500,
        alt: "Stradoon logo"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Stradoon | Breakfast, Handmade Pasta & Martini Bar",
    description:
      "Start your day with an elegant breakfast and enjoy expertly crafted Martinis in the heart of Dubrovnik.",
    images: ["/images/stradoon-mini-logo.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${cardo.variable} ${snell.variable} bg-ivory text-deepText antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ivory focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

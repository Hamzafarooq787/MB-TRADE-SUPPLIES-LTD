import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const productionUrl = "https://mbtradesupplies.com";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_ENV === "production"
    ? productionUrl
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : productionUrl);

const title = "MB Trade Supplies Ltd - Wholesale Supplies";
const description =
  "Reliable wholesale supply of drinks and pre-packaged chicken to trade customers across the UK.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "MB Trade Supplies Ltd",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1162,
        height: 608,
        alt: "MB Trade Supplies Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

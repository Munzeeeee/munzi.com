import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Munzeer.com — Web, Marketing & AI for Growing Businesses",
    template: "%s | Munzeer.com",
  },
  description:
    "Premium digital agency offering web development, digital marketing, AI automation, marketplace listings, and smart business tools for businesses worldwide.",
  keywords: [
    "web development",
    "digital marketing",
    "AI automation",
    "Shopify development",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Amazon listing",
    "NFC card",
    "digital business card",
    "MVP development",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://munzeer.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://munzeer.com",
    siteName: "Munzeer.com",
    title: "Munzeer.com — Web, Marketing & AI for Growing Businesses",
    description:
      "Premium digital agency offering web development, digital marketing, AI automation, marketplace listings, and smart business tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munzeer.com — Web, Marketing & AI for Growing Businesses",
    description:
      "Premium digital agency offering web development, digital marketing, AI automation, marketplace listings, and smart business tools.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

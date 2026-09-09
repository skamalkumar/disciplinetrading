import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://disciplinetrading.com"),

  title: {
    default: "Discipline Trading — Expert Equities & Options Education",
    template: "%s | Discipline Trading",
  },

  description:
    "Expert equities investing and options trading education by S. Kamal Kumar. M.Sc. Finance and Investment, ex-Lloyds Bank London, 15 years experience. Learn stock market investing, fundamental analysis, NIFTY and SENSEX options, and practical trading strategies.",

  keywords: [
    "equity investing India",
    "stock market investing India",
    "fundamental analysis India",
    "options trading India",
    "NIFTY options",
    "SENSEX options",
    "stock market Telugu",
    "options trading Telugu",
    "equity investing Telugu",
    "call put options explained",
    "Finworld Telugu",
    "discipline trading",
  ],

  authors: [{ name: "S. Kamal Kumar" }],
  creator: "S. Kamal Kumar",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://disciplinetrading.com",
  },

  openGraph: {
    title: "Discipline Trading",
    description:
      "Expert equities investing and options trading education by Kamal Kumar.",
    url: "https://disciplinetrading.com",
    siteName: "Discipline Trading",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#0a0a0a] text-[#e8e0d0] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
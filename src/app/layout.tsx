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
  title: {
    default: "Discipline Trading — Expert Options Trading Education",
    template: "%s | Discipline Trading",
  },
  description:
    "Expert options trading education by Kamal Kumar. M.Sc. Finance and Investment, ex-Lloyds Bank London, 15 years experience. Learn Nifty and BankNifty options strategies.",
  keywords: [
    "options trading India",
    "Nifty options",
    "Sensex options",
    "options trading Telugu",
    "call put options explained",
    "Finworld Telugu",
    "discipline trading",
  ],
  authors: [{ name: "Kamal Kumar" }],
  creator: "Kamal Kumar",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e8e0d0] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.disciplinetrading.com"),

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.disciplinetrading.com",
  },

  openGraph: {
    title: "Discipline Trading",
    description:
      "Expert options trading education by Kamal Kumar.",
    url: "https://www.disciplinetrading.com",
    siteName: "Discipline Trading",
    locale: "en_US",
    type: "website",
  },
};
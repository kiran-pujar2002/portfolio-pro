import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sangamesh Halepujari — Finance Professional",
    template: "%s · Sangamesh",
  },
  description:
    "Finance professional with 3+ years in asset management, mutual fund analysis, portfolio analytics, and investment research.",
  keywords: [
    "Sangamesh Halepujari",
    "Equity Research",
    "Investment Research",
    "Financial Analysis",
    "Portfolio Analytics",
    "Mutual Fund Analysis",
    "DCF Valuation",
    "CAPM",
    "CFA Level I",
    "NISM Research Analyst",
  ],
  authors: [{ name: "Sangamesh Halepujari" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col text-cream-200 antialiased">
        <Navigation />
        <main className="flex-1 mx-10xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
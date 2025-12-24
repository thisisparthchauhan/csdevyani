import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSDEVYANI | AI-Powered Corporate Governance Platform",
  description: "The unified AI-powered platform for automated company law compliance, secretarial audits, and legal excellence in India and Gift City.",
  keywords: ["Company Law", "Corporate Governance", "Secretarial Audit", "AI Compliance", "Gift City", "CSDEVYANI", "Legal Tech"],
  authors: [{ name: "CSDEVYANI" }],
  openGraph: {
    title: "CSDEVYANI | AI-Powered Corporate Governance",
    description: "Automate your secretarial compliance with next-gen AI tools.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSDEVYANI | AI-Powered Corporate Governance",
    description: "Automate your secretarial compliance with next-gen AI tools.",
  },
};

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChatWidget from "@/components/layout/AIChatWidget";
import AuthPopup from "@/components/layout/AuthPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}
      >
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AIChatWidget />
        <AuthPopup />
      </body>
    </html>
  );
}

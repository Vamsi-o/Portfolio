import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vamshi - Full Stack  AI Engineer",
  description: "Portfolio of Vamshi - Full Stack Developer specializing in React, Next.js, Node.js, and AI/ML. Building innovative solutions from idea to scale.",
  keywords: ["Vamshi", "Full Stack Developer", "AI Engineer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Vamshi" }],
  openGraph: {
    title: "Vamshi - Full Stack AI Engineer",
    description: "Building innovative solutions from idea to scale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <AnalyticsTracker />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE RED FLASH DRIVE — A Short Film",
  description:
    "Sometimes the smallest file contains the biggest secret. THE RED FLASH DRIVE — a college action-thriller short film. Read the full screenplay.",
  keywords: [
    "short film",
    "screenplay",
    "action thriller",
    "The Red Flash Drive",
    "student film",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-ink font-sans text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eqlair | Portfolio de Design et Développement Web",
  description:
    "Découvrez Eqlair, le portfolio créatif de Quillan Favey. Des sites modernes, élégants et responsives, conçus avec Next.js et une passion pour le design.",
  keywords: [
    "Eqlair",
    "design web",
    "portfolio",
    "Next.js",
    "développeur frontend",
    "sites web créatifs",
    "UI/UX design",
    "Quillan Favey",
  ],
  openGraph: {
    title: "Eqlair | Portfolio de Design et Développement Web",
    description:
      "Explorez une sélection de sites modernes, élégants et responsives, conçus et développés par Eqlair.",
    url: "https://eqlair.vercel.app/", // remplace par ton domaine
    siteName: "Eqlair",
    images: [
      {
        url: "/og-image.png", // génère une belle image preview
        width: 1200,
        height: 630,
        alt: "Eqlair Portfolio Design Web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eqlair | Portfolio de Design et Développement Web",
    description:
      "Découvrez Eqlair, un portfolio créatif présentant des sites modernes, élégants et responsives.",
    images: ["/og-image.png"], // même image que pour OpenGraph
    creator: "@tonhandle", // si tu as un Twitter
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}

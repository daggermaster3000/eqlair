import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eqlair Studio - Création Site Web Lausanne | Agence Web Design Vaud",
  description:
    "Agence web design à Lausanne spécialisée dans la création de sites internet modernes et responsives. Développement web sur mesure pour entreprises dans le canton de Vaud. Devis gratuit.",
  keywords: [
    "création site web Lausanne",
    "agence web Lausanne",
    "web design Lausanne",
    "développeur web Vaud",
    "site internet Lausanne",
    "agence digitale Lausanne",
    "création site vitrine Lausanne",
    "développement web Suisse romande",
    "web designer Lausanne",
    "refonte site web Lausanne",
    "e-commerce Lausanne",
    "SEO Lausanne",
    "UI/UX design Vaud",
    "site responsive Lausanne",
    "Next.js développeur Lausanne",
    "portfolio web design",
    "Quillan Favey",
    "Eqlair Studio",
    "agence web Morges",
    "création site Nyon",
    "web design Yverdon"
  ],
  authors: [{ name: "Quillan Favey", url: "https://eqlair.ch" }],
  creator: "Quillan Favey - Eqlair Studio",
  publisher: "Eqlair Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Eqlair Studio - Création Site Web Lausanne | Agence Web Design",
    description:
      "Agence web design à Lausanne. Création de sites internet modernes, responsives et optimisés SEO pour entreprises du canton de Vaud. Portfolio et devis gratuit.",
    url: "https://eqlair.ch/",
    siteName: "Eqlair Studio - Agence Web Lausanne",
    images: [
      {
        url: "/logo.png", // Image spécifique avec éléments de Lausanne
        width: 1200,
        height: 630,
        alt: "Eqlair Studio - Agence Web Design Lausanne",
      },
    ],
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eqlair Studio - Création Site Web Lausanne",
    description:
      "Agence web design à Lausanne spécialisée dans la création de sites modernes et responsives. Développement sur mesure canton de Vaud.",
    images: ["/og-image-lausanne.jpg"],
    creator: "@eqlairstudio", // Adapte selon ton handle
  },
  alternates: {
    canonical: "https://eqlair.ch",
    languages: {
      'fr-CH': 'https://eqlair.ch',
      'fr': 'https://eqlair.ch',
    },
  },
  verification: {
    google: "ton-code-verification-google", // Ajoute ton code Google Search Console
    // yandex: "ton-code-yandex", // Si pertinent pour la Suisse
  },
  category: "Web Design & Development",
  classification: "Business",
  other: {
    'geo.region': 'CH-VD',
    'geo.placename': 'Lausanne',
    'geo.position': '46.5197;6.6323', // Coordonnées de Lausanne
    'ICBM': '46.5197, 6.6323',
    'DC.title': 'Eqlair Studio - Création Site Web Lausanne',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH">
      <head>
        {/* Schema.org structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://eqlair.ch/#organization",
                  "name": "Eqlair Studio",
                  "alternateName": "Eqlair",
                  "url": "https://eqlair.ch",
                  "logo": "https://eqlair.ch/logo.png",
                  "sameAs": [
                    "https://www.instagram.com/eqlair.studio",
                    // Ajoute tes autres réseaux sociaux
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "areaServed": "CH-VD",
                    "availableLanguage": ["French"]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lausanne",
                    "addressRegion": "Vaud",
                    "addressCountry": "CH"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://eqlair.ch/#website",
                  "url": "https://eqlair.ch",
                  "name": "Eqlair Studio",
                  "description": "Agence web design à Lausanne spécialisée dans la création de sites internet",
                  "publisher": {
                    "@id": "https://eqlair.ch/#organization"
                  },
                  "inLanguage": "fr-CH"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://eqlair.ch/#localbusiness",
                  "name": "Eqlair Studio",
                  "description": "Agence web design et développement à Lausanne",
                  "url": "https://eqlair.ch",
                  "telephone": "+41-XX-XXX-XX-XX", // Ajoute ton numéro
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lausanne",
                    "addressRegion": "Vaud",
                    "postalCode": "1000", // Code postal approximatif
                    "addressCountry": "CH"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 46.5197,
                    "longitude": 6.6323
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Lausanne"
                    },
                    {
                      "@type": "State",
                      "name": "Vaud"
                    }
                  ],
                  "serviceType": ["Web Design", "Web Development", "SEO"],
                  "priceRange": "$$"
                },
                {
                  "@type": "Person",
                  "@id": "https://eqlair.ch/#person",
                  "name": "Quillan Favey",
                  "jobTitle": "Web Designer & Developer",
                  "worksFor": {
                    "@id": "https://eqlair.ch/#organization"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lausanne",
                    "addressRegion": "Vaud",
                    "addressCountry": "CH"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics ou ton script analytics */}
        <Script
          src="https://eqlair-analytics.vercel.app/script.js"
          data-website-id="6cb9035b-35e7-4938-a373-339b0f1a3d62"
          strategy="afterInteractive"
        />
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Meta tags additionnels pour le SEO local */}
        <meta name="geo.region" content="CH-VD" />
        <meta name="geo.placename" content="Lausanne" />
        <meta name="geo.position" content="46.5197;6.6323" />
        <meta name="ICBM" content="46.5197, 6.6323" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://eqlair.ch" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
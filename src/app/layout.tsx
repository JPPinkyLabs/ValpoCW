import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Valpo Cocktail Week 2026",
    template: "%s | Valpo Cocktail Week 2026",
  },
  description:
    "Una semana de coctelería en los cerros y el plan de Valparaíso. 40+ bares, 120+ cócteles, 7 días de experiencias únicas. 9–15 Junio 2026.",
  keywords: [
    "cocktail week",
    "valparaíso",
    "coctelería",
    "bares",
    "restaurantes",
    "pisco",
    "chile",
    "festival",
    "VCW",
  ],
  authors: [{ name: "Fundación No Me Olvides & Pinky Labs" }],
  openGraph: {
    title: "Valpo Cocktail Week 2026",
    description:
      "Una semana de coctelería en los cerros y el plan de Valparaíso. 9–15 Junio 2026.",
    url: "https://valpococktailweek.cl",
    siteName: "Valpo Cocktail Week",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valpo Cocktail Week 2026",
    description:
      "40+ locales, 120+ cócteles, 7 días. Valparaíso, 9–15 Junio 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

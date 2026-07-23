import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matafuegos Leo | Recarga y Venta de Extintores en CABA",
  description: "Expertos con más de 40 años de trayectoria en recarga y revisación de matafuegos bajo normas IRAM para consorcios, empresas y particulares. Venta de matafuegos y kits de seguridad vehicular en Capital Federal.",
  keywords: [
    "matafuegos",
    "recarga de matafuegos",
    "venta de matafuegos",
    "matafuegos caba",
    "seguridad vehicular",
    "kit de seguridad auto",
    "kit vtv",
    "matafuegos consorcios",
    "matafuegos Leo",
    "MT Seguridad Industrial",
    "recarga matafuegos nuñez",
    "recarga matafuegos bajo flores",
    "matafuego 1kg",
    "matafuego 5kg"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matafuegos Leo | Recarga y Venta de Extintores en CABA",
    description: "Expertos con más de 40 años de trayectoria en recarga y revisación de matafuegos bajo normas IRAM para consorcios, empresas y particulares. Venta de matafuegos y kits de seguridad vehicular en Capital Federal.",
    url: "/",
    siteName: "Matafuegos Leo",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Matafuegos Leo - MT Seguridad Industrial",
  "description": "Especialistas en recarga, revisación y venta de matafuegos bajo normas IRAM para consorcios, empresas y particulares. Venta de matafuegos y kits de seguridad vehicular.",
  "url": "https://www.mtseguridadindustrial.com.ar", // Nota: cambiar cuando se configure el dominio
  "telephone": "+5491136378942",
  "email": "info@mtseguridadindustrial.com.ar",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. LaFuente 1191",
    "addressLocality": "Buenos Aires",
    "addressRegion": "CABA",
    "postalCode": "1406",
    "addressCountry": "AR"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Capital Federal" },
    { "@type": "AdministrativeArea", "name": "Núñez" },
    { "@type": "AdministrativeArea", "name": "Bajo Flores" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

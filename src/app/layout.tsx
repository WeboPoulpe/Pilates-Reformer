import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yanna Pilates Studio | Pilates Reformer Mauguio - Montpellier",
    template: "%s | Yanna Pilates Studio",
  },
  description:
    "Studio haut de gamme de Pilates Reformer a Mauguio, pres de Montpellier. Cours en petit groupe (4-6 pers.) et seances privees. Fonde par Priscillia Bunoust. Parking gratuit.",
  keywords: [
    "Pilates Reformer",
    "Pilates Reformer Montpellier",
    "Pilates Reformer Mauguio",
    "Pilates Baillargues",
    "studio Pilates",
    "cours Pilates",
    "Priscillia Bunoust",
    "Yanna Pilates",
  ],
  authors: [{ name: "Priscillia Bunoust" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Yanna Pilates Studio",
    title: "Yanna Pilates Studio | Pilates Reformer Mauguio - Montpellier",
    description:
      "Studio haut de gamme de Pilates Reformer a Mauguio. Cours en petit groupe et seances privees. Parking gratuit, zone Aeroport/Frejorgues.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://yanna-pilates.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

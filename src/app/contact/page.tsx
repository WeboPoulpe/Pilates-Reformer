import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact - Yanna Pilates Studio | Mauguio pres de Montpellier",
  description: "Contactez Yanna Pilates Studio a Mauguio. Adresse, horaires, telephone, email. Zone Aeroport Frejorgues, parking gratuit. Ouvert du lundi au samedi 8h-20h.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24" />
      <Contact />
    </>
  );
}

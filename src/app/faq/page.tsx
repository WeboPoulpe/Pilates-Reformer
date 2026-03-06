import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ - Yanna Pilates Studio | Questions Frequentes Pilates Reformer",
  description: "Toutes les reponses a vos questions sur le Pilates Reformer a Mauguio. Debutants, horaires, parking, reservations, tarifs et plus encore.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-24" />
      <FAQ />
    </>
  );
}

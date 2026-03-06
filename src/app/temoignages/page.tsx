import type { Metadata } from "next";
import Temoignages from "@/components/Temoignages";

export const metadata: Metadata = {
  title: "Temoignages - Yanna Pilates Studio | Avis Clients Mauguio",
  description: "Decouvrez les avis et temoignages de nos clientes sur Yanna Pilates Studio a Mauguio. Note 5.0 sur Google. Pilates Reformer en petit groupe.",
};

export default function TemoignagesPage() {
  return (
    <>
      <div className="pt-24" />
      <Temoignages />
    </>
  );
}

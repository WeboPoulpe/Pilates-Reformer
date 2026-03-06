import type { Metadata } from "next";
import Tarifs from "@/components/Tarifs";

export const metadata: Metadata = {
  title: "Tarifs - Yanna Pilates Studio | Prix Pilates Reformer Mauguio",
  description: "Tarifs Pilates Reformer a Mauguio. Abonnements a partir de 104€/mois, cours a l'unite 30€, carnet 5 seances 135€, carnet 10 seances 250€. Paiement en ligne securise.",
};

export default function TarifsPage() {
  return (
    <>
      <div className="pt-24" />
      <Tarifs />
    </>
  );
}

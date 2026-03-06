import type { Metadata } from "next";
import Cours from "@/components/Cours";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nos Cours - Yanna Pilates Studio | Reformer Groupe, Prive, Duo",
  description: "Decouvrez nos cours de Pilates Reformer a Mauguio : groupe (4-6 pers.), seance privee, duo. 55 min de renforcement profond adapte a tous niveaux.",
};

export default function CoursPage() {
  return (
    <>
      <div className="pt-24" />
      <Cours />
      <CTABanner />
    </>
  );
}

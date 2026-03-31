import type { Metadata } from "next";
import Cours from "@/components/Cours";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nos Cours - Yanna Pilates Studio | Reformer Groupe, Prive, Duo",
  description: "Decouvrez nos cours de Pilates Reformer a Mauguio : L'Integral, Abs & Glutes, Cardio Sculpt. Renforcement profond adapte a tous niveaux.",
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

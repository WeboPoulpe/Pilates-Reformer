import type { Metadata } from "next";
import Concept from "@/components/Concept";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Le Concept - Yanna Pilates Studio | Studio Reformer Mauguio",
  description: "Decouvrez le concept unique de Yanna Pilates Studio a Mauguio. Un studio haut de gamme dedie au Pilates Reformer, espace detente et boutique bien-etre.",
};

export default function ConceptPage() {
  return (
    <>
      <div className="pt-24" />
      <Concept />
      <CTABanner />
    </>
  );
}

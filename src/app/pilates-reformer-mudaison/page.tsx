import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Mudaison | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer pres de Mudaison. Cours en petit groupe et seances privees a Mauguio, a quelques minutes de Mudaison. Parking gratuit.",
  keywords: ["Pilates Reformer Mudaison", "Pilates Mudaison", "studio Pilates pres Mudaison"],
};

export default function PilatesMudaison() {
  return (
    <CityPage
      city="Mudaison"
      slug="pilates-reformer-mudaison"
      distance="7 minutes"
      description="Habitants de Mudaison, decouvrez le Pilates Reformer dans un studio haut de gamme a seulement 7 minutes de chez vous. Yanna Pilates Studio vous accueille pour des cours en petit groupe et des seances sur mesure."
      localInfo="Mudaison est idealement situee a 7 minutes de notre studio de Mauguio. Les pratiquantes de Mudaison beneficient d'un acces rapide via les routes locales, d'un parking gratuit et d'un studio equipe de Reformers de derniere generation."
      faqItems={[
        {
          question: "Quelle est la distance entre Mudaison et le studio Yanna Pilates ?",
          answer: "Le studio est situe a environ 7 minutes en voiture de Mudaison, dans la zone Aeroport/Frejorgues a Mauguio. L'acces est simple et direct.",
        },
        {
          question: "Le Pilates Reformer convient-il aux seniors de Mudaison ?",
          answer: "Oui, le Pilates Reformer est particulierement adapte aux seniors. Il permet de travailler la mobilite, l'equilibre et le renforcement musculaire en douceur. Priscillia adapte chaque exercice a votre niveau.",
        },
        {
          question: "Quels jours sont disponibles pour les cours depuis Mudaison ?",
          answer: "Le studio est ouvert du lundi au samedi, de 8h a 20h. Plusieurs creneaux sont disponibles chaque jour pour s'adapter a votre emploi du temps.",
        },
        {
          question: "Proposez-vous des seances privees pour les habitants de Mudaison ?",
          answer: "Oui, nous proposons des seances privees individuelles et des cours duo. Ces formats permettent un accompagnement 100% personnalise, ideal pour atteindre vos objectifs specifiques.",
        },
      ]}
    />
  );
}

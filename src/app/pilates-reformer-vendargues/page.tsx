import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Vendargues | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer pres de Vendargues. Cours en petit groupe et seances privees a Mauguio, a quelques minutes de Vendargues. Parking gratuit.",
  keywords: ["Pilates Reformer Vendargues", "Pilates Vendargues", "studio Pilates pres Vendargues"],
};

export default function PilatesVendargues() {
  return (
    <CityPage
      city="Vendargues"
      slug="pilates-reformer-vendargues"
      distance="10 minutes"
      description="Depuis Vendargues, rejoignez facilement Yanna Pilates Studio a Mauguio en 10 minutes. Un studio de Pilates Reformer haut de gamme avec des cours en petit groupe et des seances personnalisees."
      localInfo="Vendargues est a seulement 10 minutes du studio via la D613. Les residentes de Vendargues trouvent chez Yanna Pilates un espace de qualite pour pratiquer le Pilates Reformer, avec un equipement haut de gamme et une instructrice certifiee."
      faqItems={[
        {
          question: "Comment se rendre au studio depuis Vendargues ?",
          answer: "Depuis Vendargues, prenez la D613 en direction de Mauguio. Le studio est situe dans la zone Aeroport/Frejorgues, a environ 10 minutes de route. Parking gratuit sur place.",
        },
        {
          question: "Le Pilates Reformer est-il adapte aux debutants de Vendargues ?",
          answer: "Absolument ! Nos cours sont accessibles a tous les niveaux. Priscillia adapte chaque exercice en fonction de votre condition physique. Nous recommandons de commencer par une seance decouverte.",
        },
        {
          question: "Quels sont les tarifs pour les cours de Pilates pres de Vendargues ?",
          answer: "Nos tarifs sont identiques pour tous : cours a l'unite a 30 euros, carnet 5 cours a 135 euros, carnet 10 cours a 250 euros, ou abonnements mensuels a partir de 104 euros/mois.",
        },
        {
          question: "Peut-on reserver en ligne depuis Vendargues ?",
          answer: "Oui, la reservation se fait entierement en ligne via notre plateforme. Vous pouvez reserver 24h/24, payer en ligne et meme rejoindre une liste d'attente si un cours est complet.",
        },
      ]}
    />
  );
}

import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Candillargues | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer pres de Candillargues. Cours en petit groupe et seances privees a Mauguio, a quelques minutes de Candillargues. Parking gratuit.",
  keywords: ["Pilates Reformer Candillargues", "Pilates Candillargues", "studio Pilates pres Candillargues"],
};

export default function PilatesCandillargues() {
  return (
    <CityPage
      city="Candillargues"
      slug="pilates-reformer-candillargues"
      distance="8 minutes"
      description="Habitants de Candillargues, decouvrez le Pilates Reformer chez Yanna Pilates Studio a Mauguio, a seulement 8 minutes de chez vous. Un studio premium pour des seances en petit groupe ou en prive."
      localInfo="Candillargues est a 8 minutes de notre studio de Mauguio. Les pratiquantes de Candillargues beneficient d'un cadre haut de gamme, d'un equipement professionnel et de l'expertise de Priscillia Bunoust pour atteindre leurs objectifs de bien-etre."
      faqItems={[
        {
          question: "Quelle est la distance entre Candillargues et le studio ?",
          answer: "Yanna Pilates Studio est situe a environ 8 minutes en voiture de Candillargues, dans la zone Aeroport/Frejorgues a Mauguio. Parking gratuit sur place.",
        },
        {
          question: "Le Pilates Reformer aide-t-il pour le mal de dos ?",
          answer: "Oui, le Pilates Reformer est reconnu pour ses bienfaits sur le dos. Le renforcement des muscles profonds et l'amelioration de la posture contribuent a soulager et prevenir les douleurs dorsales.",
        },
        {
          question: "Peut-on venir en seance d'essai depuis Candillargues ?",
          answer: "Bien sur ! Nous proposons des seances decouverte pour vous permettre de tester le Pilates Reformer. Reservez en ligne et venez decouvrir notre studio.",
        },
        {
          question: "Quels sont les avantages du Pilates Reformer par rapport au Pilates au sol ?",
          answer: "Le Reformer offre une resistance variable grace a ses ressorts, permettant un travail plus precis et plus profond. La machine guide vos mouvements pour une meilleure execution et des resultats plus rapides.",
        },
      ]}
    />
  );
}

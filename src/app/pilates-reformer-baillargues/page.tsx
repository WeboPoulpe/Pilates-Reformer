import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Baillargues | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer pres de Baillargues. Cours en petit groupe et seances privees a Mauguio, a quelques minutes de Baillargues. Parking gratuit.",
  keywords: ["Pilates Reformer Baillargues", "Pilates Baillargues", "studio Pilates pres Baillargues"],
};

export default function PilatesBaillargues() {
  return (
    <CityPage
      city="Baillargues"
      slug="pilates-reformer-baillargues"
      distance="5 minutes"
      description="Vous habitez Baillargues et cherchez un studio de Pilates Reformer haut de gamme ? Yanna Pilates Studio a Mauguio est a seulement 5 minutes en voiture. Decouvrez nos cours en petit groupe et nos seances privees dans un cadre raffine."
      localInfo="A seulement 5 minutes de Baillargues via la D613, Yanna Pilates Studio vous accueille dans un espace premium entierement equipe de machines Reformer. Les habitants de Baillargues apprecient la proximite du studio, le parking gratuit et l'ambiance intimiste de nos cours."
      faqItems={[
        {
          question: "Combien de temps faut-il pour aller de Baillargues au studio ?",
          answer: "Le studio Yanna Pilates est situe a environ 5 minutes en voiture de Baillargues, via la D613 en direction de Mauguio/Frejorgues. Le trajet est direct et facile.",
        },
        {
          question: "Y a-t-il un studio de Pilates Reformer a Baillargues ?",
          answer: "Le studio Yanna Pilates est le studio de Pilates Reformer le plus proche de Baillargues, situe a Mauguio dans la zone Aeroport/Frejorgues. A seulement 5 minutes, c'est la solution ideale pour les habitants de Baillargues.",
        },
        {
          question: "Quels sont les horaires pour les habitants de Baillargues ?",
          answer: "Le studio est ouvert du lundi au samedi de 8h a 20h, avec des creneaux en journee et en soiree pour s'adapter a votre emploi du temps. Reservation en ligne 24h/24.",
        },
        {
          question: "Le parking est-il gratuit pour les clients venant de Baillargues ?",
          answer: "Oui, le parking est entierement gratuit et disponible sur place pour tous nos clients, que vous veniez de Baillargues ou d'ailleurs.",
        },
      ]}
    />
  );
}

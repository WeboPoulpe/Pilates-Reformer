import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Lansargues | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer pres de Lansargues. Cours en petit groupe et seances privees a Mauguio, a quelques minutes de Lansargues. Parking gratuit.",
  keywords: ["Pilates Reformer Lansargues", "Pilates Lansargues", "studio Pilates pres Lansargues"],
};

export default function PilatesLansargues() {
  return (
    <CityPage
      city="Lansargues"
      slug="pilates-reformer-lansargues"
      distance="10 minutes"
      description="Depuis Lansargues, accedez en 10 minutes a Yanna Pilates Studio, votre studio de Pilates Reformer haut de gamme a Mauguio. Cours en petit groupe, seances privees et un cadre zen pour votre bien-etre."
      localInfo="Lansargues se trouve a seulement 10 minutes de notre studio. Les habitantes de Lansargues choisissent Yanna Pilates pour la qualite de l'enseignement, l'ambiance intimiste et la facilite d'acces avec parking gratuit."
      faqItems={[
        {
          question: "Comment venir au studio depuis Lansargues ?",
          answer: "Depuis Lansargues, prenez la direction de Mauguio via la D24. Le studio est situe dans la zone Aeroport/Frejorgues, a environ 10 minutes de route. Un parking gratuit est disponible sur place.",
        },
        {
          question: "Faut-il etre souple pour faire du Pilates Reformer ?",
          answer: "Non, pas du tout ! Le Pilates Reformer est justement concu pour ameliorer progressivement votre souplesse, votre force et votre posture. Les exercices sont adaptes a chaque niveau.",
        },
        {
          question: "Combien de personnes par cours depuis Lansargues ?",
          answer: "Nos cours en groupe accueillent 4 a 6 personnes maximum. Ce format intimiste garantit un suivi personnalise. Nous proposons egalement des seances privees.",
        },
        {
          question: "Y a-t-il des cours le samedi pour les habitants de Lansargues ?",
          answer: "Oui, le studio est ouvert du lundi au samedi, de 8h a 20h. Les creneaux du samedi sont particulierement apprecies, pensez a reserver en avance !",
        },
      ]}
    />
  );
}

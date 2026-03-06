import { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Pilates Reformer Mauguio | Studio Yanna Pilates",
  description:
    "Studio de Pilates Reformer haut de gamme a Mauguio (34130). Cours en petit groupe et seances privees. Parking gratuit, zone Aeroport/Frejorgues. Reservez votre seance decouverte !",
  keywords: ["Pilates Reformer Mauguio", "Pilates Mauguio", "studio Pilates Mauguio", "cours Pilates 34130"],
};

export default function PilatesMauguio() {
  return (
    <CityPage
      city="Mauguio"
      slug="pilates-reformer-mauguio"
      distance="0 min"
      description="Bienvenue chez Yanna Pilates Studio, votre studio de Pilates Reformer haut de gamme a Mauguio. Situe dans la zone Aeroport/Frejorgues, decouvrez une approche personnalisee du mouvement en petit groupe ou en seance privee, dans un cadre zen et inspirant."
      localInfo="Yanna Pilates Studio est implante au coeur de Mauguio, dans la zone dynamique de l'Aeroport/Frejorgues. Profitez d'un acces direct, d'un parking gratuit et d'un studio entierement equipe de machines Reformer derniere generation. Un lieu pensee pour votre bien-etre, a deux pas de chez vous."
      faqItems={[
        {
          question: "Ou se trouve exactement le studio de Pilates a Mauguio ?",
          answer: "Yanna Pilates Studio est situe dans la zone Aeroport/Frejorgues a Mauguio (34130). Le studio beneficie d'un parking gratuit et d'un acces facile depuis tous les quartiers de Mauguio.",
        },
        {
          question: "Quels types de cours de Pilates sont proposes a Mauguio ?",
          answer: "Nous proposons des cours de Pilates Reformer en petit groupe (4 a 6 personnes), des seances privees individuelles et des cours duo. Tous les niveaux sont les bienvenus, du debutant a l'avance.",
        },
        {
          question: "Combien coute un cours de Pilates Reformer a Mauguio ?",
          answer: "Le cours a l'unite est a 30 euros. Nous proposons aussi des carnets (5 cours a 135 euros, 10 cours a 250 euros) et des abonnements mensuels a partir de 104 euros par mois pour 1 cours par semaine.",
        },
        {
          question: "Le studio de Mauguio dispose-t-il d'un parking ?",
          answer: "Oui, notre studio beneficie d'un parking gratuit sur place, dans la zone Aeroport/Frejorgues. L'acces est simple et rapide.",
        },
      ]}
    />
  );
}

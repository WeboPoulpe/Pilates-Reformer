"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./motion";

const faqItems = [
  { question: "Qu'est-ce que le Pilates Reformer ?", answer: "Le Pilates Reformer est une methode de renforcement musculaire pratiquee sur une machine specialisee appelee Reformer. Elle permet un travail en profondeur des muscles stabilisateurs, ameliore la posture, la souplesse et l'equilibre. Les ressorts offrent une resistance variable, adaptable a tous les niveaux." },
  { question: "Faut-il avoir de l'experience pour commencer ?", answer: "Absolument pas ! Nos cours sont accessibles a tous les niveaux, des debutants aux avances. Priscillia adapte chaque exercice en fonction de votre condition physique. Nous recommandons de commencer par une seance decouverte." },
  { question: "Combien de personnes par cours ?", answer: "Nos cours en groupe accueillent 4 a 6 personnes maximum. Ce format intimiste garantit un suivi personnalise et des corrections individuelles pour chaque participant." },
  { question: "Le Pilates Reformer est-il adapte apres une blessure ?", answer: "Oui, il est particulierement recommande en reeducation post-blessure. Le travail sur machine permet un controle precis du mouvement et de la resistance. Consultez votre medecin avant de commencer." },
  { question: "Ou se situe le studio et y a-t-il un parking ?", answer: "Yanna Pilates Studio est situe a Mauguio, zone Aeroport/Frejorgues, pres de Montpellier. Parking gratuit. Facilement accessible depuis Baillargues, Vendargues, Mudaison, Lansargues et Candillargues." },
  { question: "Comment reserver une seance ?", answer: "Reservez directement en ligne via notre plateforme. Le paiement se fait en ligne par carte bancaire (Stripe). Vous pouvez rejoindre une liste d'attente si le cours est complet." },
  { question: "Quels sont les horaires ?", answer: "Le studio est ouvert du lundi au samedi, de 8h a 20h. Consultez notre planning en ligne pour les creneaux disponibles." },
  { question: "Proposez-vous des cours d'essai ?", answer: "Oui ! Nous proposons une seance decouverte pour tester le Pilates Reformer et decouvrir notre studio." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-36 md:py-48 bg-white">
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="FAQ"
          title="Questions"
          highlight="frequentes"
        />

        <StaggerContainer className="space-y-4" staggerDelay={0.08}>
          {faqItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className="border border-beige-200/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 md:p-8 text-left hover:bg-beige-50/30 transition-colors duration-300"
                >
                  <span className="font-sans text-sm md:text-[15px] font-medium text-charcoal pr-6 leading-relaxed">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gold-500/60 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 md:px-8 pb-8 font-sans text-sm text-charcoal-light/60 font-light leading-[2]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const features = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Petit groupe",
    desc: "4 a 6 personnes maximum pour un suivi personnalise et des corrections individuelles.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Seances privees",
    desc: "Des cours individuels adaptes a vos objectifs specifiques et a votre rythme.",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Bar a Matcha",
    desc: "Un espace detente avec boissons bien-etre et matcha premium apres votre seance.",
  },
  {
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    title: "Espace Boutique",
    desc: "Accessoires de Pilates, tenues et produits bien-etre selectionnes avec soin.",
  },
];

export default function Concept() {
  return (
    <section id="concept" className="py-36 md:py-48 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Le Concept"
          title="Bien plus qu'un studio de"
          highlight="Pilates"
        />

        <FadeIn delay={0.2} className="-mt-16 mb-28">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold-400/20 shrink-0 relative">
              <Image
                src="/images/studio-12.jpeg"
                alt="Priscillia Bunoust - Fondatrice de Yanna Pilates Studio"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-sans text-base md:text-lg text-charcoal-light/70 font-light leading-[1.9] max-w-xl text-center md:text-left">
              Fonde par <strong className="font-medium text-charcoal">Priscillia Bunoust</strong>,
              Yanna Pilates Studio propose une approche personnalisee du mouvement en petit groupe
              (4 a 6 personnes) ou en seance privee. Un lieu ou corps et esprit se reconnectent.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8" staggerDelay={0.12}>
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div className="group text-center px-6 py-12 rounded-3xl bg-beige-50/60 border border-beige-200/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-400/5 hover:-translate-y-2 hover:bg-beige-100/80">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-400/10 text-gold-500 mb-8 group-hover:bg-gold-400/20 transition-colors duration-500">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                <p className="font-sans text-sm text-charcoal-light/60 font-light leading-[1.8]">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1} className="mt-28">
          <div className="rounded-3xl overflow-hidden bg-beige-100/50 aspect-[21/9] relative border border-beige-200/30">
            <Image
              src="/images/studio-4.jpeg"
              alt="Interieur du studio Yanna Pilates - Reformers et design beige"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-beige-200/30">
              <Image
                src="/images/studio-5.jpeg"
                alt="Bar a Matcha et reception - Yanna Pilates Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-beige-200/30">
              <Image
                src="/images/studio-10.jpeg"
                alt="Salle de Pilates Reformer avec equipements - Yanna Pilates"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

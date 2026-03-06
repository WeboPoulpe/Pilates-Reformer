"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const cours = [
  {
    title: "Pilates Reformer Groupe",
    subtitle: "4 a 6 personnes",
    desc: "Seances dynamiques en petit groupe sur machines Reformer. Renforcement musculaire profond, amelioration de la posture et de la souplesse.",
    forWho: "Tous niveaux",
    duration: "55 min",
    image: "/images/studio-7.jpeg",
    alt: "Cours de Pilates Reformer en groupe - Yanna Pilates Studio Mauguio",
  },
  {
    title: "Seance Privee",
    subtitle: "1 a 2 personnes",
    desc: "Un accompagnement sur-mesure avec votre instructrice. Programme adapte a vos objectifs : remise en forme, reeducation, performance.",
    forWho: "Sur mesure",
    duration: "55 min",
    image: "/images/studio-2.jpeg",
    alt: "Seance privee de Pilates Reformer - Yanna Pilates Studio",
  },
  {
    title: "Duo Reformer",
    subtitle: "2 personnes",
    desc: "Partagez un moment privilegie a deux. Ideal entre amies, en couple ou mere-fille. Progressez ensemble dans une atmosphere intime.",
    forWho: "Tous niveaux",
    duration: "55 min",
    image: "/images/studio-8.jpeg",
    alt: "Seance duo Pilates Reformer - Yanna Pilates Studio",
  },
];

export default function Cours() {
  return (
    <section id="cours" className="py-36 md:py-48 bg-beige-50/50">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Nos Cours"
          title="Des seances adaptees a"
          highlight="chacun"
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-10" staggerDelay={0.15}>
          {cours.map((c, i) => (
            <StaggerItem key={i}>
              <div className="group h-full bg-white rounded-3xl overflow-hidden border border-beige-200/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-400/5 hover:-translate-y-2">
                <div className="relative aspect-[4/3] bg-beige-100/50">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2">
                    <span className="font-sans text-[11px] font-medium text-gold-600">{c.duration}</span>
                  </div>
                </div>

                <div className="p-10">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[4px] text-gold-500">
                    {c.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal mt-3 mb-5">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light/60 font-light leading-[1.9] mb-8">
                    {c.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-beige-200/40">
                    <span className="font-sans text-[11px] uppercase tracking-[2px] text-charcoal-light/40">
                      {c.forWho}
                    </span>
                    <a
                      href="/tarifs"
                      className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-gold-500 hover:text-gold-600 transition-colors"
                    >
                      Voir les tarifs &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
          {[
            { label: "Femmes actives", detail: "20-50 ans" },
            { label: "Seniors", detail: "Mobilite & equilibre" },
            { label: "Cadres", detail: "Gestion du stress" },
            { label: "Post-blessure", detail: "Reeducation douce" },
          ].map((target, i) => (
            <StaggerItem key={i}>
              <div className="py-8 px-6 bg-white rounded-2xl border border-beige-200/30">
                <p className="font-serif text-lg font-semibold text-charcoal mb-2">{target.label}</p>
                <p className="font-sans text-[11px] text-gold-500 tracking-wide">{target.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

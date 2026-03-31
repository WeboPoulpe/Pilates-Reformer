"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const cours = [
  {
    title: "L'Integral",
    subtitle: "Cours complet",
    desc: "Le cours complet pour sculpter, renforcer et allonger le corps en profondeur. Le rendez-vous essentiel de la semaine. On alterne travail de renforcement profond, controle et mobilite.",
    forWho: "Tous niveaux",
    image: "/images/studio-7.webp",
    alt: "Cours L'Integral Pilates Reformer - Yanna Pilates Studio Mauguio",
    color: "bg-[#9cac8b]/15 border-[#9cac8b]/30",
    tagColor: "text-[#6b7d5e]",
  },
  {
    title: "Abs & Glutes",
    subtitle: "Cible & tonique",
    desc: "Le combo incontournable pour un ventre tonique et des fessiers sculptes. Un cours cible sur le centre et le bas du corps. On travaille en profondeur les abdos et les fessiers avec des sequences controlees.",
    forWho: "Tous niveaux",
    image: "/images/studio-2.webp",
    alt: "Cours Abs & Glutes Pilates Reformer - Yanna Pilates Studio",
    color: "bg-[#d4a5a5]/15 border-[#d4a5a5]/30",
    tagColor: "text-[#b07878]",
  },
  {
    title: "Cardio Sculpt",
    subtitle: "Intense & dynamique",
    desc: "Le cours le plus intense du studio. Allie force et cardio pour bruler en profondeur. Un cours dynamique qui combine renforcement musculaire profond et phases cardio explosives.",
    forWho: "Intermediaire & avance",
    image: "/images/studio-8.webp",
    alt: "Cours Cardio Sculpt Pilates Reformer - Yanna Pilates Studio",
    color: "bg-[#c9a84c]/15 border-[#c9a84c]/30",
    tagColor: "text-[#a08530]",
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
              <div className={`group h-full rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${c.color}`}>
                <div className="relative aspect-[4/3] bg-beige-100/50">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-10">
                  <span className={`font-sans text-[10px] font-semibold uppercase tracking-[4px] ${c.tagColor}`}>
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

"use client";

import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem, FadeIn } from "./motion";

const temoignages = [
  {
    name: "Sophie M.",
    role: "Cadre, 34 ans",
    text: "Apres des annees de mal de dos, le Pilates Reformer chez Yanna a change ma vie. En quelques semaines, ma posture s'est nettement amelioree et mes douleurs ont disparu.",
  },
  {
    name: "Catherine L.",
    role: "Retraitee, 62 ans",
    text: "Je cherchais une activite douce pour maintenir ma mobilite. Le studio est magnifique, l'ambiance zen et Priscillia est une instructrice exceptionnelle.",
  },
  {
    name: "Marine D.",
    role: "Sportive, 28 ans",
    text: "Le Reformer est un complement parfait a mon entrainement. Les petits groupes permettent un vrai suivi. Et le bar a matcha apres la seance, c'est le petit plus !",
  },
  {
    name: "Julie R.",
    role: "Maman, 38 ans",
    text: "Reprise post-grossesse ideale. Priscillia adapte chaque exercice a mon niveau et je vois des resultats semaine apres semaine.",
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-36 md:py-48 bg-beige-50/50">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Temoignages"
          title="Elles en"
          highlight="parlent"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {temoignages.map((t, i) => (
            <StaggerItem key={i}>
              <div className="rounded-3xl p-10 md:p-12 bg-white border border-beige-200/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-400/10 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-sm text-charcoal-light/60 font-light leading-[2] mb-10 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-400/15 flex items-center justify-center">
                    <span className="font-serif text-base font-bold text-gold-600">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">{t.name}</p>
                    <p className="font-sans text-xs text-charcoal-light/40 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-20">
          <p className="font-sans text-sm text-charcoal-light/40 mb-6">
            Retrouvez tous nos avis sur Google
          </p>
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm border border-beige-200/30">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-sm font-medium text-charcoal">5.0 sur Google</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const abonnements = [
  { freq: "1 cours / semaine", price: "104", period: "/mois", popular: false },
  { freq: "2 cours / semaine", price: "192", period: "/mois", popular: true },
  { freq: "3 cours / semaine", price: "264", period: "/mois", popular: false },
];

const cartes = [
  { label: "Cours a l'unite", price: "30", detail: "Ideal pour decouvrir", stripeLink: "#" },
  { label: "Carnet 5 cours", price: "135", detail: "27 par seance", stripeLink: "#" },
  { label: "Carnet 10 cours", price: "250", detail: "25 par seance", stripeLink: "#" },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-36 md:py-48 bg-white">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Tarifs"
          title="Investissez dans votre"
          highlight="bien-etre"
        />

        {/* Abonnements */}
        <FadeIn className="mb-24">
          <h3 className="font-serif text-2xl text-charcoal text-center mb-14">
            Abonnements mensuels
          </h3>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" staggerDelay={0.15}>
          {abonnements.map((abo, i) => (
            <StaggerItem key={i}>
              <div
                className={`relative group rounded-3xl text-center transition-all duration-500 hover:-translate-y-2 ${
                  abo.popular
                    ? "bg-charcoal text-white shadow-2xl shadow-charcoal/20 py-14 px-10 scale-105"
                    : "bg-beige-50/60 border border-beige-200/30 py-12 px-8 hover:shadow-xl hover:shadow-gold-400/10"
                }`}
              >
                {abo.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-white font-sans text-[10px] font-semibold uppercase tracking-[3px] px-6 py-1.5">
                    Populaire
                  </span>
                )}
                <p className={`font-sans text-[11px] font-semibold uppercase tracking-[3px] mb-10 ${abo.popular ? "text-gold-400" : "text-gold-500"}`}>
                  {abo.freq}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className={`font-serif text-6xl font-bold ${abo.popular ? "text-white" : "text-charcoal"}`}>
                    {abo.price}
                  </span>
                  <span className={`font-sans text-xl ${abo.popular ? "text-white/50" : "text-charcoal-light/50"}`}>&euro;</span>
                </div>
                <p className={`font-sans text-xs mb-10 ${abo.popular ? "text-white/40" : "text-charcoal-light/40"}`}>
                  {abo.period}
                </p>
                <ul className={`font-sans text-sm space-y-4 mb-12 ${abo.popular ? "text-white/70" : "text-charcoal-light/60"}`}>
                  {["Acces aux cours Reformer", "Reservation en ligne", "Sans engagement"].map((item, j) => (
                    <li key={j} className="flex items-center justify-center gap-3">
                      <svg className={`w-4 h-4 ${abo.popular ? "text-gold-400" : "text-gold-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`inline-block w-full py-4 font-sans text-xs font-semibold uppercase tracking-[3px] rounded-xl transition-all duration-300 ${
                    abo.popular
                      ? "bg-gold-500 text-white hover:bg-gold-600"
                      : "bg-charcoal text-white hover:bg-charcoal/90"
                  }`}
                >
                  S&apos;abonner
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Separator */}
        <FadeIn>
          <div className="flex items-center gap-6 mb-24">
            <div className="flex-1 h-px bg-beige-200/40" />
            <span className="font-sans text-[10px] uppercase tracking-[4px] text-charcoal-light/25">ou</span>
            <div className="flex-1 h-px bg-beige-200/40" />
          </div>
        </FadeIn>

        {/* A la carte */}
        <FadeIn className="mb-14">
          <h3 className="font-serif text-2xl text-charcoal text-center">A la carte</h3>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
          {cartes.map((carte, i) => (
            <StaggerItem key={i}>
              <div className="bg-beige-50/60 rounded-3xl py-12 px-8 text-center border border-beige-200/30 hover:shadow-xl hover:shadow-gold-400/10 transition-all duration-500 hover:-translate-y-2">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-gold-500 mb-8">
                  {carte.label}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-serif text-5xl font-bold text-charcoal">{carte.price}</span>
                  <span className="font-sans text-xl text-charcoal-light/50">&euro;</span>
                </div>
                <p className="font-sans text-xs text-charcoal-light/40 mb-10">{carte.detail}</p>
                <a
                  href={carte.stripeLink}
                  className="inline-block w-full py-4 border border-charcoal/15 font-sans text-xs font-semibold uppercase tracking-[3px] text-charcoal hover:bg-charcoal hover:text-white rounded-xl transition-all duration-300"
                >
                  Payer en ligne
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <p className="text-center font-sans text-xs text-charcoal-light/35 mt-20">
            Paiement securise par Stripe. Reservation et liste d&apos;attente automatique.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

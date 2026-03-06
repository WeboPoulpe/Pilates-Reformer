"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./motion";

export default function CTABanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <Image
        src="/images/studio-9.jpeg"
        alt="Ambiance zen - Yanna Pilates Studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
            Pret(e) a transformer <br />
            votre <span className="italic text-gold-400">quotidien</span> ?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="font-sans text-base text-beige-300/50 font-light leading-[1.9] max-w-lg mx-auto mb-12">
            Rejoignez un studio ou chaque detail est pense pour votre bien-etre.
            Votre premiere seance decouverte vous attend.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Link
            href="/tarifs"
            className="inline-flex items-center justify-center px-12 py-5 bg-gold-500 text-white font-sans text-xs font-semibold uppercase tracking-[3px] hover:bg-gold-600 transition-colors duration-300 shadow-lg shadow-gold-500/20"
          >
            Reserver ma seance decouverte
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

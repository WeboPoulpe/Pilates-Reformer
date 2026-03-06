"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/studio-1.jpeg"
        alt="Pilates Reformer - Yanna Pilates Studio Mauguio"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-beige-100/85 via-beige-50/80 to-beige-200/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 py-40 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[6px] text-gold-500 mb-10"
        >
          Studio Pilates Reformer &mdash; Mauguio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-charcoal mb-10"
        >
          Le mouvement <br />
          <span className="font-semibold italic bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            conscient,
          </span>
          <br />
          le renforcement{" "}
          <span className="font-semibold italic bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            profond.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="font-sans text-lg md:text-xl text-charcoal-light/70 font-light leading-relaxed max-w-2xl mx-auto mb-14"
        >
          Decouvrez le Pilates Reformer a Mauguio. Un studio haut de gamme dedie
          a votre bien-etre, votre posture et votre vitalite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="/tarifs"
            className="inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-white font-sans text-xs font-semibold uppercase tracking-[3px] hover:bg-gold-600 transition-colors duration-300 shadow-lg shadow-gold-400/20"
          >
            Reserver ma seance decouverte
          </Link>
          <Link
            href="/concept"
            className="inline-flex items-center justify-center px-10 py-5 border border-charcoal/15 text-charcoal font-sans text-xs font-semibold uppercase tracking-[3px] hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Decouvrir le studio
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-28 flex flex-wrap justify-center gap-16 md:gap-24"
        >
          {[
            { value: "4-6", label: "personnes max par cours" },
            { value: "55", label: "minutes par seance" },
            { value: "6j/7", label: "du lundi au samedi" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[3px] text-charcoal-light/50 mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-[4px] text-charcoal-light/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-gold-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

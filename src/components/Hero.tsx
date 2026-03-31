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
        src="/images/studio-1.webp"
        alt="Pilates Reformer - Yanna Pilates Studio Mauguio"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <Image
            src="/logo.webp"
            alt="Yanna Pilates Studio"
            width={120}
            height={120}
            className="mx-auto rounded-sm"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-white mb-10"
        >
          Le mouvement{" "}
          <span className="font-semibold italic text-[#d4af37]">
            conscient,
          </span>
          <br />
          le renforcement{" "}
          <span className="font-semibold italic text-[#d4af37]">
            profond.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="font-sans text-base md:text-lg text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-14"
        >
          Bienvenue chez Yanna Pilates Studio, votre nouvel espace exclusif dedie au bien-etre
          et a la performance a Mauguio. Notre studio propose une approche moderne et technique
          du Pilates Reformer, concue pour sculpter le corps, renforcer les muscles profonds et
          ameliorer la posture durablement. Dans un cadre serein et epure, nous mettons notre
          expertise au service de votre vitalite pour une experience de mouvement unique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#f5f5dc] text-[#4a3728] border border-[#d4af37] font-sans text-xs font-semibold uppercase tracking-[3px] hover:bg-[#d4af37] hover:text-white transition-all duration-300"
          >
            Faire une demande
          </Link>
          <Link
            href="/concept"
            className="inline-flex items-center justify-center px-10 py-5 border border-white/30 text-white font-sans text-xs font-semibold uppercase tracking-[3px] hover:bg-white hover:text-charcoal transition-all duration-300"
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
            { value: "3", label: "cours differents" },
            { value: "6j/7", label: "du lundi au samedi" },
            { value: "100%", label: "sur Reformer" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#d4af37]">
                {stat.value}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[3px] text-white/50 mt-3">
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
        <span className="font-sans text-[10px] uppercase tracking-[4px] text-white/30">Scroll</span>
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

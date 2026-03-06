"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Le Concept", href: "/concept" },
    { label: "Les Cours", href: "/cours" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Temoignages", href: "/temoignages" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Yanna Pilates Studio"
            width={48}
            height={48}
            className="h-10 w-auto md:h-12 rounded-sm"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="font-sans text-[11px] font-medium tracking-[2px] text-charcoal-light/70 uppercase hover:text-gold-500 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link
              href="/tarifs"
              className="ml-4 inline-block px-7 py-3 bg-gold-500 text-white font-sans text-[11px] font-semibold tracking-[2px] uppercase hover:bg-gold-600 transition-colors duration-300"
            >
              Reserver
            </Link>
          </motion.div>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-2 p-3"
          aria-label="Menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-charcoal"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-charcoal"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-charcoal"
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:hidden overflow-hidden bg-warm-white/98 backdrop-blur-md shadow-lg"
          >
            <nav className="flex flex-col items-center py-12 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-[11px] font-medium tracking-[3px] text-charcoal-light/70 uppercase hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/tarifs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-block px-10 py-4 bg-gold-500 text-white font-sans text-[11px] font-semibold tracking-[3px] uppercase hover:bg-gold-600 transition-colors"
                >
                  Reserver ma seance
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

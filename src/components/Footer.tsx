import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-beige-200">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="Yanna Pilates Studio"
              width={120}
              height={120}
              className="h-20 w-auto rounded-sm mb-6 brightness-110"
            />
            <p className="text-sm leading-[1.9] text-beige-300/70 font-light">
              Studio haut de gamme de Pilates Reformer a Mauguio, pres de Montpellier.
              Seances en petit groupe et cours prives.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-gold-400 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Le Concept", href: "/#concept" },
                { label: "Les Cours", href: "/#cours" },
                { label: "Tarifs", href: "/#tarifs" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige-300/60 hover:text-gold-400 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-gold-400 mb-8">
              Nos zones
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Pilates Mauguio", href: "/pilates-reformer-mauguio" },
                { label: "Pilates Baillargues", href: "/pilates-reformer-baillargues" },
                { label: "Pilates Vendargues", href: "/pilates-reformer-vendargues" },
                { label: "Pilates Mudaison", href: "/pilates-reformer-mudaison" },
                { label: "Pilates Lansargues", href: "/pilates-reformer-lansargues" },
                { label: "Pilates Candillargues", href: "/pilates-reformer-candillargues" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige-300/60 hover:text-gold-400 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-gold-400 mb-8">
              Contact
            </h4>
            <ul className="space-y-5 text-sm text-beige-300/60 font-light">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold-400/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Zone Aeroport / Frejorgues<br />34130 Mauguio</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-400/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33699101741" className="hover:text-gold-400 transition-colors duration-300">
                  +33 6 99 10 17 41
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-400/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:priscillia.saihi@hotmail.fr" className="hover:text-gold-400 transition-colors duration-300">
                  priscillia.saihi@hotmail.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-400/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun - Sam : 8h - 20h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-beige-400/40 font-light">
            &copy; {new Date().getFullYear()} Yanna Pilates Studio. Tous droits reserves.
          </p>
          <div className="flex gap-8">
            <Link
              href="/mentions-legales"
              className="text-xs text-beige-400/40 hover:text-gold-400 transition-colors duration-300 font-light"
            >
              Mentions legales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-beige-400/40 hover:text-gold-400 transition-colors duration-300 font-light"
            >
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

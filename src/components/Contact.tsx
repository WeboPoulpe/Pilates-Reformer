"use client";

import SectionHeader from "./SectionHeader";
import { FadeIn } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="py-36 md:py-48 bg-beige-50/50">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Contact"
          title="Venez nous"
          highlight="rencontrer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <FadeIn direction="left">
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-10 md:p-12 border border-beige-200/30">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-10">
                  Informations pratiques
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                      label: "Adresse",
                      value: "Zone Aeroport / Frejorgues\n34130 Mauguio",
                      extra: "Parking gratuit disponible",
                    },
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      label: "Horaires",
                      value: "Lundi au Samedi : 8h - 20h\nDimanche : Ferme",
                    },
                    {
                      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                      label: "Telephone",
                      value: "+33 6 99 10 17 41",
                      href: "tel:+33699101741",
                    },
                    {
                      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                      label: "Email",
                      value: "priscillia.saihi@hotmail.fr",
                      href: "mailto:priscillia.saihi@hotmail.fr",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="font-sans text-sm font-medium text-charcoal mb-1.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-sans text-sm text-charcoal-light/60 font-light hover:text-gold-500 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-sans text-sm text-charcoal-light/60 font-light leading-relaxed whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                          {item.extra && (
                            <p className="font-sans text-[11px] text-gold-500 mt-3 tracking-wide">{item.extra}</p>
                          )}
                        </div>
                      </div>
                      {i < 3 && <div className="h-px bg-beige-200/30 mt-8" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl py-8 px-6 border border-beige-200/30 text-center">
                  <svg className="w-8 h-8 mx-auto text-gold-500/60 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <p className="font-sans text-xs font-medium text-charcoal mb-1">Acces facile</p>
                  <p className="font-sans text-[10px] text-charcoal-light/40">Zone Aeroport</p>
                </div>
                <div className="bg-white rounded-2xl py-8 px-6 border border-beige-200/30 text-center">
                  <svg className="w-8 h-8 mx-auto text-gold-500/60 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <p className="font-sans text-xs font-medium text-charcoal mb-1">Parking gratuit</p>
                  <p className="font-sans text-[10px] text-charcoal-light/40">Sur place</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-beige-100/40 rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center border border-beige-200/30">
              <div className="text-center p-12">
                <svg className="w-20 h-20 mx-auto text-gold-400/20 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-serif text-xl text-charcoal-light/30 italic mb-3">Google Maps</p>
                <p className="font-sans text-xs text-charcoal-light/25">Integrez votre iframe ici</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Yanna Pilates Studio",
            description: "Studio haut de gamme de Pilates Reformer a Mauguio, pres de Montpellier.",
            telephone: "+33699101741",
            email: "priscillia.saihi@hotmail.fr",
            address: { "@type": "PostalAddress", streetAddress: "Zone Aeroport / Frejorgues", addressLocality: "Mauguio", postalCode: "34130", addressCountry: "FR" },
            openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" }],
            founder: { "@type": "Person", name: "Priscillia Bunoust" },
            priceRange: "$$",
            areaServed: ["Mauguio", "Baillargues", "Vendargues", "Mudaison", "Lansargues", "Candillargues", "Montpellier"],
          }),
        }}
      />
    </section>
  );
}

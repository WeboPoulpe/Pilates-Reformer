import Link from "next/link";
import FAQ from "./FAQ";

type CityPageProps = {
  city: string;
  slug: string;
  distance: string;
  description: string;
  localInfo: string;
  faqItems: { question: string; answer: string }[];
};

export default function CityPage({
  city,
  slug,
  distance,
  description,
  localInfo,
  faqItems,
}: CityPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-beige-100 via-beige-50 to-beige-200">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-xs font-sans font-semibold uppercase tracking-[4px] text-gold-500">
            Pilates Reformer &mdash; {city}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mt-4 mb-6 leading-tight">
            Votre studio de <span className="italic text-gradient-gold">Pilates Reformer</span>
            <br />pres de {city}
          </h1>
          <p className="font-sans text-base md:text-lg text-charcoal-light font-light leading-relaxed max-w-2xl mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#tarifs"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-600 transition-all duration-300"
            >
              Reserver ma seance decouverte
            </Link>
            <Link
              href="/#concept"
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/20 text-charcoal font-sans text-sm font-medium uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              Decouvrir le studio
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-8">
            Pourquoi choisir Yanna Pilates Studio depuis <span className="italic text-gradient-gold">{city}</span> ?
          </h2>
          <div className="gold-divider mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200/50">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                Un studio premium a {distance} de {city}
              </h3>
              <p className="font-sans text-sm text-charcoal-light font-light leading-relaxed">
                {localInfo}
              </p>
            </div>
            <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200/50">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                Acces facile & parking gratuit
              </h3>
              <p className="font-sans text-sm text-charcoal-light font-light leading-relaxed">
                Situe dans la zone Aeroport/Frejorgues a Mauguio, notre studio est facilement
                accessible depuis {city}. Profitez d&apos;un parking gratuit et d&apos;un acces rapide
                via les grands axes routiers.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cours en petit groupe",
                desc: "4 a 6 personnes max. pour un suivi personnalise sur machines Reformer.",
              },
              {
                title: "Seances privees",
                desc: "Accompagnement individuel adapte a vos objectifs specifiques.",
              },
              {
                title: "Bar a Matcha & Boutique",
                desc: "Detendez-vous apres votre seance avec nos boissons bien-etre.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-xl border border-beige-200/50 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs preview */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
            Nos <span className="italic text-gradient-gold">tarifs</span>
          </h2>
          <div className="gold-divider mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { label: "A partir de", price: "30", detail: "le cours a l'unite" },
              { label: "Carnet 10 cours", price: "250", detail: "soit 25 par seance" },
              { label: "Abonnement", price: "104", detail: "par mois (1x/sem)" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-beige-200/50">
                <p className="font-sans text-xs uppercase tracking-wider text-gold-500 mb-2">
                  {t.label}
                </p>
                <p className="font-serif text-4xl font-bold text-charcoal">
                  {t.price}<span className="text-lg text-charcoal-light">&euro;</span>
                </p>
                <p className="font-sans text-xs text-charcoal-light/60 mt-1">{t.detail}</p>
              </div>
            ))}
          </div>

          <Link
            href="/#tarifs"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-600 transition-all duration-300"
          >
            Voir tous les tarifs
          </Link>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-[4px] text-gold-500">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mt-4 mb-6">
              Questions frequentes &mdash; <span className="italic text-gradient-gold">{city}</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group border border-beige-200/50 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-beige-50/50 transition-colors list-none">
                  <span className="font-sans text-sm md:text-base font-medium text-charcoal pr-4">
                    {item.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 font-sans text-sm text-charcoal-light font-light leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          {/* JSON-LD FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
            Pret(e) a transformer votre corps ?
          </h2>
          <p className="font-sans text-base text-beige-300 font-light mb-8">
            Rejoignez Yanna Pilates Studio depuis {city}. Votre premiere seance decouverte vous attend.
          </p>
          <Link
            href="/#tarifs"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-600 transition-all duration-300"
          >
            Reserver ma seance decouverte
          </Link>
        </div>
      </section>
    </>
  );
}

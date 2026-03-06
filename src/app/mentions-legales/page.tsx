import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Legales",
  description: "Mentions legales du site Yanna Pilates Studio.",
};

export default function MentionsLegales() {
  return (
    <div className="pt-32 pb-20 bg-beige-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
          Mentions <span className="italic text-gradient-gold">legales</span>
        </h1>
        <div className="gold-divider mb-12" />

        <div className="prose prose-sm max-w-none font-sans text-charcoal-light font-light leading-relaxed space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              1. Editeur du site
            </h2>
            <p>
              Le site <strong>yanna-pilates.fr</strong> est edite par :
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Nom :</strong> Priscillia Bunoust</li>
              <li><strong>Statut :</strong> Entrepreneur individuel</li>
              <li><strong>Siege social :</strong> Zone Aeroport / Frejorgues, 34130 Mauguio, France</li>
              <li><strong>Telephone :</strong> +33 6 99 10 17 41</li>
              <li><strong>Email :</strong> priscillia.saihi@hotmail.fr</li>
              <li><strong>SIRET :</strong> [A completer]</li>
              <li><strong>TVA intracommunautaire :</strong> [A completer ou mention de franchise en base de TVA, art. 293B du CGI]</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              2. Directrice de la publication
            </h2>
            <p>
              Priscillia Bunoust, en qualite de fondatrice et gerante de Yanna Pilates Studio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              3. Hebergement
            </h2>
            <p>Le site est heberge par :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Hebergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              4. Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu du site yanna-pilates.fr (textes, images, logos, videos,
              elements graphiques) est protege par le droit d&apos;auteur et le droit de la propriete
              intellectuelle. Toute reproduction, representation, modification, publication, transmission
              ou denaturation, totale ou partielle, du site ou de son contenu, par quelque procede que
              ce soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation ecrite
              prealable de Priscillia Bunoust.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              5. Responsabilite
            </h2>
            <p>
              L&apos;editeur du site s&apos;efforce de fournir des informations aussi precises que possible.
              Toutefois, il ne pourra etre tenu responsable des omissions, des inexactitudes et des
              carences dans la mise a jour, qu&apos;elles soient de son fait ou du fait des tiers
              partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              6. Liens hypertextes
            </h2>
            <p>
              Le site yanna-pilates.fr peut contenir des liens vers d&apos;autres sites Internet.
              L&apos;editeur ne dispose d&apos;aucun moyen pour controler le contenu de ces sites tiers
              et n&apos;assume aucune responsabilite de ce fait.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              7. Donnees personnelles (RGPD)
            </h2>
            <p>
              Conformement au Reglement General sur la Protection des Donnees (RGPD - Reglement UE
              2016/679) et a la loi Informatique et Libertes du 6 janvier 1978 modifiee, vous disposez
              des droits suivants sur vos donnees personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Droit d&apos;acces</li>
              <li>Droit de rectification</li>
              <li>Droit a l&apos;effacement (droit a l&apos;oubli)</li>
              <li>Droit a la limitation du traitement</li>
              <li>Droit a la portabilite des donnees</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, vous pouvez nous contacter a l&apos;adresse :
              <strong> priscillia.saihi@hotmail.fr</strong> ou par courrier a l&apos;adresse du siege social.
            </p>
            <p className="mt-2">
              Vous pouvez egalement introduire une reclamation aupres de la CNIL (Commission Nationale
              de l&apos;Informatique et des Libertes) : <strong>www.cnil.fr</strong>
            </p>
            <p className="mt-2">
              Pour plus d&apos;informations, consultez notre{" "}
              <a href="/politique-de-confidentialite" className="text-gold-500 hover:text-gold-600 underline">
                Politique de Confidentialite
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              8. Cookies
            </h2>
            <p>
              Le site utilise des cookies pour ameliorer l&apos;experience utilisateur, analyser le
              trafic et personnaliser les publicites. Lors de votre premiere visite, une banniere vous
              informe de l&apos;utilisation de cookies et vous permet de les accepter, de les refuser
              ou de personnaliser vos preferences.
            </p>
            <p className="mt-2">
              <strong>Types de cookies utilises :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Cookies necessaires :</strong> Indispensables au fonctionnement du site.</li>
              <li><strong>Cookies analytiques :</strong> Google Analytics - mesure d&apos;audience.</li>
              <li><strong>Cookies marketing :</strong> Meta Pixel et Google Ads - publicites ciblees.</li>
            </ul>
            <p className="mt-2">
              Vous pouvez modifier vos preferences a tout moment en supprimant vos cookies dans les
              parametres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              9. Droit applicable
            </h2>
            <p>
              Les presentes mentions legales sont soumises au droit francais. En cas de litige, les
              tribunaux francais seront seuls competents.
            </p>
          </section>

          <p className="text-xs text-charcoal-light/50 mt-8">
            Derniere mise a jour : Mars 2026
          </p>
        </div>
      </div>
    </div>
  );
}

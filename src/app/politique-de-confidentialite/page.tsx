import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description: "Politique de confidentialite et de protection des donnees personnelles de Yanna Pilates Studio.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-32 pb-20 bg-beige-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
          Politique de <span className="italic text-gradient-gold">confidentialite</span>
        </h1>
        <div className="gold-divider mb-12" />

        <div className="prose prose-sm max-w-none font-sans text-charcoal-light font-light leading-relaxed space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des donnees personnelles collectees sur le site yanna-pilates.fr est :
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Priscillia Bunoust</strong> - Yanna Pilates Studio</li>
              <li>Zone Aeroport / Frejorgues, 34130 Mauguio, France</li>
              <li>Email : priscillia.saihi@hotmail.fr</li>
              <li>Telephone : +33 6 99 10 17 41</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              2. Donnees collectees
            </h2>
            <p>Nous collectons les donnees suivantes :</p>
            <h3 className="font-serif text-lg font-semibold text-charcoal mt-4 mb-2">
              a) Donnees fournies volontairement
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nom et prenom (lors d&apos;une prise de contact ou reservation)</li>
              <li>Adresse email</li>
              <li>Numero de telephone</li>
              <li>Informations de sante pertinentes (blessures, conditions medicales communiquees pour l&apos;adaptation des cours)</li>
            </ul>
            <h3 className="font-serif text-lg font-semibold text-charcoal mt-4 mb-2">
              b) Donnees collectees automatiquement
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adresse IP</li>
              <li>Type de navigateur et systeme d&apos;exploitation</li>
              <li>Pages visitees et duree de visite</li>
              <li>Source de trafic (referent)</li>
              <li>Donnees de cookies (voir section 6)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              3. Finalites du traitement
            </h2>
            <p>Vos donnees sont collectees pour les finalites suivantes :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Gestion des reservations :</strong> Traitement de vos demandes de reservation de cours via notre plateforme partenaire (Eversports ou Bsport).</li>
              <li><strong>Communication :</strong> Reponse a vos demandes de contact et envoi d&apos;informations sur nos services.</li>
              <li><strong>Amelioration du site :</strong> Analyse statistique anonymisee du trafic (Google Analytics).</li>
              <li><strong>Publicite ciblee :</strong> Campagnes publicitaires via Meta Pixel et Google Ads (uniquement avec votre consentement).</li>
              <li><strong>Securite :</strong> Protection contre les fraudes et les abus.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              4. Base legale du traitement
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentement :</strong> Pour les cookies analytiques et marketing (article 6.1.a du RGPD).</li>
              <li><strong>Execution d&apos;un contrat :</strong> Pour la gestion des reservations et des abonnements (article 6.1.b du RGPD).</li>
              <li><strong>Interet legitime :</strong> Pour l&apos;amelioration de nos services et la securite du site (article 6.1.f du RGPD).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              5. Destinataires des donnees
            </h2>
            <p>Vos donnees peuvent etre partagees avec :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Plateforme de reservation :</strong> Eversports ou Bsport (pour la gestion des cours et paiements).</li>
              <li><strong>Google :</strong> Google Analytics et Google Ads (mesure d&apos;audience et publicite, avec consentement).</li>
              <li><strong>Meta :</strong> Meta Pixel (publicite ciblee, avec consentement).</li>
              <li><strong>Hebergeur :</strong> Vercel Inc. (hebergement du site).</li>
            </ul>
            <p className="mt-2">
              Vos donnees ne sont jamais vendues a des tiers. Les transferts hors UE (vers les USA)
              sont encadres par les clauses contractuelles types de la Commission europeenne et/ou
              le EU-US Data Privacy Framework.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              6. Cookies
            </h2>
            <p>
              Lors de votre premiere visite, une banniere de cookies vous permet de choisir les
              categories de cookies que vous acceptez :
            </p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="border-b border-beige-200">
                  <th className="text-left py-3 font-medium text-charcoal">Type</th>
                  <th className="text-left py-3 font-medium text-charcoal">Finalite</th>
                  <th className="text-left py-3 font-medium text-charcoal">Duree</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-beige-100">
                  <td className="py-3">Necessaires</td>
                  <td className="py-3">Fonctionnement du site, preferences cookies</td>
                  <td className="py-3">13 mois max</td>
                </tr>
                <tr className="border-b border-beige-100">
                  <td className="py-3">Analytiques</td>
                  <td className="py-3">Google Analytics - mesure d&apos;audience anonymisee</td>
                  <td className="py-3">13 mois max</td>
                </tr>
                <tr className="border-b border-beige-100">
                  <td className="py-3">Marketing</td>
                  <td className="py-3">Meta Pixel, Google Ads - publicite ciblee</td>
                  <td className="py-3">13 mois max</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4">
              Vous pouvez modifier vos preferences a tout moment en supprimant vos cookies via
              les parametres de votre navigateur ou en rechargeant le site apres avoir supprime
              le cookie &quot;cookie-consent&quot;.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              7. Duree de conservation
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Donnees de contact :</strong> 3 ans a compter du dernier contact.</li>
              <li><strong>Donnees de reservation :</strong> Duree de la relation contractuelle + 3 ans.</li>
              <li><strong>Donnees de cookies :</strong> 13 mois maximum (conformement aux recommandations de la CNIL).</li>
              <li><strong>Logs de connexion :</strong> 12 mois.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              8. Vos droits
            </h2>
            <p>
              Conformement au RGPD (Reglement UE 2016/679) et a la loi Informatique et Libertes,
              vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Droit d&apos;acces (art. 15) :</strong> Obtenir une copie de vos donnees personnelles.</li>
              <li><strong>Droit de rectification (art. 16) :</strong> Corriger vos donnees inexactes ou incompletes.</li>
              <li><strong>Droit a l&apos;effacement (art. 17) :</strong> Demander la suppression de vos donnees.</li>
              <li><strong>Droit a la limitation (art. 18) :</strong> Restreindre le traitement de vos donnees.</li>
              <li><strong>Droit a la portabilite (art. 20) :</strong> Recevoir vos donnees dans un format structure.</li>
              <li><strong>Droit d&apos;opposition (art. 21) :</strong> Vous opposer au traitement de vos donnees.</li>
              <li><strong>Droit de retirer votre consentement :</strong> A tout moment, sans affecter la licite du traitement effectue avant le retrait.</li>
            </ul>
            <p className="mt-4">
              Pour exercer vos droits, contactez-nous :
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Par email : <strong>priscillia.saihi@hotmail.fr</strong></li>
              <li>Par courrier : Yanna Pilates Studio, Zone Aeroport / Frejorgues, 34130 Mauguio</li>
            </ul>
            <p className="mt-4">
              Nous repondrons a votre demande dans un delai d&apos;un mois. En cas de difficulte,
              vous pouvez saisir la CNIL : <strong>www.cnil.fr</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              9. Securite des donnees
            </h2>
            <p>
              Nous mettons en oeuvre les mesures techniques et organisationnelles appropriees pour
              proteger vos donnees personnelles contre la destruction, la perte, l&apos;alteration,
              la divulgation ou l&apos;acces non autorise. Le site utilise le protocole HTTPS pour
              securiser les echanges de donnees.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              10. Modification de la politique
            </h2>
            <p>
              Nous nous reservons le droit de modifier cette politique de confidentialite a tout
              moment. Les modifications seront publiees sur cette page avec la date de mise a jour.
              Nous vous encourageons a consulter regulierement cette page.
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

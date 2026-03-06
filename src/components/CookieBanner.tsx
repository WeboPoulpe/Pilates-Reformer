"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type CookieConsent = { necessary: boolean; analytics: boolean; marketing: boolean };

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);

  const save = (c: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(c));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-charcoal/10 border border-beige-200/30 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">Respect de votre vie privee</h3>
                  <p className="font-sans text-sm text-charcoal-light/60 font-light mt-1 leading-relaxed">
                    Nous utilisons des cookies pour ameliorer votre experience et personnaliser les publicites.{" "}
                    <Link href="/politique-de-confidentialite" className="text-gold-500 hover:text-gold-600 underline">
                      En savoir plus
                    </Link>
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="bg-beige-50 rounded-xl p-5 space-y-3">
                      <label className="flex items-center justify-between opacity-70 cursor-not-allowed">
                        <div>
                          <p className="font-sans text-sm font-medium text-charcoal">Cookies necessaires</p>
                          <p className="font-sans text-xs text-charcoal-light/50 font-light">Fonctionnement du site</p>
                        </div>
                        <input type="checkbox" checked disabled className="accent-gold-500 w-4 h-4" />
                      </label>
                      <hr className="border-beige-200/50" />
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="font-sans text-sm font-medium text-charcoal">Cookies analytiques</p>
                          <p className="font-sans text-xs text-charcoal-light/50 font-light">Google Analytics</p>
                        </div>
                        <input type="checkbox" checked={consent.analytics} onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })} className="accent-gold-500 w-4 h-4" />
                      </label>
                      <hr className="border-beige-200/50" />
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="font-sans text-sm font-medium text-charcoal">Cookies marketing</p>
                          <p className="font-sans text-xs text-charcoal-light/50 font-light">Meta Pixel & Google Ads</p>
                        </div>
                        <input type="checkbox" checked={consent.marketing} onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })} className="accent-gold-500 w-4 h-4" />
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="flex-1 py-3 bg-gold-500 text-white font-sans text-sm font-medium uppercase tracking-wider hover:bg-gold-600 transition-colors rounded-lg">
                  Tout accepter
                </button>
                <button onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="flex-1 py-3 border border-charcoal/15 text-charcoal font-sans text-sm font-medium uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all rounded-lg">
                  Tout refuser
                </button>
                <button onClick={() => showDetails ? save(consent) : setShowDetails(true)} className="flex-1 py-3 bg-beige-100 text-charcoal font-sans text-sm font-medium uppercase tracking-wider hover:bg-beige-200 transition-colors rounded-lg">
                  {showDetails ? "Enregistrer" : "Personnaliser"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

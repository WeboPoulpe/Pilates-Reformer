import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
    });
  }
  return _stripe;
}

export const PRICING = {
  DISCOVERY: { price: 25, sessions: 1, label: "Seance Decouverte" },
  SINGLE: { price: 30, sessions: 1, label: "Seance Unitaire" },
  PACK_5: { price: 135, sessions: 5, label: "Pack 5 Seances" },
  PACK_10: { price: 250, sessions: 10, label: "Pack 10 Seances" },
  ABONNEMENT_8: { price: 104, sessions: 8, label: "Abonnement 8 seances/mois" },
  ABONNEMENT_12: { price: 192, sessions: 12, label: "Abonnement 12 seances/mois" },
  ABONNEMENT_16: { price: 264, sessions: 16, label: "Abonnement 16 seances/mois" },
} as const;

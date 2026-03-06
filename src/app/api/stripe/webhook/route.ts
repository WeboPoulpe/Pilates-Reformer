import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import type Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { paymentId, userId, type, timeSlotId } = session.metadata || {};

    if (paymentId) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: "SUCCEEDED",
          stripePaymentId: session.payment_intent as string,
        },
      });

      // Create reservation if timeSlot specified
      if (timeSlotId && userId) {
        await prisma.reservation.create({
          data: {
            userId,
            timeSlotId,
            paymentId,
            status: "CONFIRMED",
          },
        });
      }

      // Award loyalty points
      if (userId) {
        const loyaltyCard = await prisma.loyaltyCard.upsert({
          where: { userId },
          update: {
            points: { increment: 10 },
            totalSessions: { increment: 1 },
          },
          create: {
            userId,
            points: 10,
            totalSessions: 1,
          },
        });

        await prisma.loyaltyHistory.create({
          data: {
            loyaltyCardId: loyaltyCard.id,
            points: 10,
            reason: `Paiement ${type}`,
          },
        });

        // Upgrade tier
        const tier =
          loyaltyCard.totalSessions >= 100
            ? "PLATINUM"
            : loyaltyCard.totalSessions >= 50
            ? "GOLD"
            : loyaltyCard.totalSessions >= 20
            ? "SILVER"
            : "BRONZE";

        if (tier !== loyaltyCard.tier) {
          await prisma.loyaltyCard.update({
            where: { id: loyaltyCard.id },
            data: { tier },
          });
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}

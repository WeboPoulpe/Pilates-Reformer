import { NextRequest, NextResponse } from "next/server";
import { getStripe, PRICING } from "@/lib/stripe";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { PaymentType } from "@/generated/prisma/client";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorise" }, { status: 401 });
    }

    const { type, timeSlotId } = await req.json();

    const pricing = PRICING[type as keyof typeof PRICING];
    if (!pricing) {
      return NextResponse.json({ error: "Type de paiement invalide" }, { status: 400 });
    }

    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        amount: pricing.price,
        type: type as PaymentType,
        packageName: pricing.label,
        sessionsTotal: pricing.sessions,
      },
    });

    const checkoutSession = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: session.user.email!,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: pricing.label, description: `Yanna Pilates Studio - ${pricing.label}` },
            unit_amount: pricing.price * 100,
          },
          quantity: 1,
        },
      ],
      metadata: {
        paymentId: payment.id,
        userId: session.user.id,
        type,
        timeSlotId: timeSlotId || "",
      },
      success_url: `${process.env.NEXTAUTH_URL}/reservation/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/#tarifs`,
    });

    await prisma.payment.update({
      where: { id: payment.id },
      data: { stripeSessionId: checkoutSession.id },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Erreur lors du paiement" }, { status: 500 });
  }
}

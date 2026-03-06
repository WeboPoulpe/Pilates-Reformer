import { prisma } from "@/lib/prisma";

export default async function LoyaltyPage() {
  const loyaltyCards = await prisma.loyaltyCard.findMany({
    include: {
      user: { select: { name: true, email: true } },
      history: { orderBy: { createdAt: "desc" }, take: 3 },
    },
    orderBy: { points: "desc" },
    take: 50,
  });

  const tierColors = {
    BRONZE: "bg-orange-100 text-orange-700",
    SILVER: "bg-gray-100 text-gray-700",
    GOLD: "bg-yellow-100 text-yellow-700",
    PLATINUM: "bg-purple-100 text-purple-700",
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-charcoal mb-4">Programme de fidelite</h1>
      <p className="font-sans text-sm text-charcoal-light/50 mb-10">
        10 points par seance. Bronze → Silver (20 seances) → Gold (50) → Platinum (100)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {(["BRONZE", "SILVER", "GOLD", "PLATINUM"] as const).map((tier) => {
          const count = loyaltyCards.filter((c) => c.tier === tier).length;
          return (
            <div key={tier} className="bg-white rounded-2xl p-6 border border-beige-200/30 text-center">
              <span className={`inline-block px-4 py-1.5 rounded-full font-sans text-xs font-medium mb-3 ${tierColors[tier]}`}>
                {tier}
              </span>
              <p className="font-serif text-2xl font-bold text-charcoal">{count}</p>
              <p className="font-sans text-[10px] text-charcoal-light/40 uppercase tracking-wider">membres</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-beige-200/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-beige-200/30">
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Client</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Niveau</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Points</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Seances totales</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Derniere activite</th>
              </tr>
            </thead>
            <tbody>
              {loyaltyCards.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center font-sans text-sm text-charcoal-light/40">
                    Aucune carte de fidelite pour le moment
                  </td>
                </tr>
              ) : (
                loyaltyCards.map((card) => (
                  <tr key={card.id} className="border-b border-beige-200/15 hover:bg-beige-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-sans text-sm font-medium text-charcoal">{card.user.name || card.user.email}</p>
                      <p className="font-sans text-xs text-charcoal-light/40">{card.user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-sans text-[11px] font-medium ${tierColors[card.tier]}`}>
                        {card.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-sans text-sm font-semibold text-gold-600">{card.points}</td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal">{card.totalSessions}</td>
                    <td className="px-6 py-4 font-sans text-xs text-charcoal-light/40">
                      {card.history[0]
                        ? `${card.history[0].reason} - ${new Date(card.history[0].createdAt).toLocaleDateString("fr-FR")}`
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

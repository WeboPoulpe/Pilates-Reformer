import { prisma } from "@/lib/prisma";

export default async function PaymentsPage() {
  const payments = await prisma.payment.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const statusColors = {
    PENDING: "bg-yellow-100 text-yellow-700",
    SUCCEEDED: "bg-green-100 text-green-700",
    FAILED: "bg-red-100 text-red-700",
    REFUNDED: "bg-gray-100 text-gray-700",
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-charcoal mb-10">Paiements</h1>

      <div className="bg-white rounded-2xl border border-beige-200/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-beige-200/30">
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Client</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Formule</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Montant</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Sessions</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Statut</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center font-sans text-sm text-charcoal-light/40">
                    Aucun paiement pour le moment
                  </td>
                </tr>
              ) : (
                payments.map((p) => (
                  <tr key={p.id} className="border-b border-beige-200/15 hover:bg-beige-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-sans text-sm font-medium text-charcoal">{p.user.name || p.user.email}</p>
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal">{p.packageName || p.type}</td>
                    <td className="px-6 py-4 font-sans text-sm font-semibold text-gold-600">{p.amount}€</td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal-light/60">
                      {p.sessionsUsed}/{p.sessionsTotal || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-sans text-[11px] font-medium ${statusColors[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal-light/50">
                      {new Date(p.createdAt).toLocaleDateString("fr-FR")}
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

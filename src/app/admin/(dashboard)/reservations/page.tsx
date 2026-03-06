import { prisma } from "@/lib/prisma";

export default async function ReservationsPage() {
  const reservations = await prisma.reservation.findMany({
    include: {
      user: { select: { name: true, email: true, phone: true } },
      timeSlot: { include: { courseType: true } },
      payment: true,
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const statusColors = {
    CONFIRMED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
    WAITLIST: "bg-yellow-100 text-yellow-700",
    COMPLETED: "bg-blue-100 text-blue-700",
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-charcoal mb-10">Reservations</h1>

      <div className="bg-white rounded-2xl border border-beige-200/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-beige-200/30">
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Client</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Cours</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Date</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Statut</th>
                <th className="text-left px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-light/50">Paiement</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center font-sans text-sm text-charcoal-light/40">
                    Aucune reservation pour le moment
                  </td>
                </tr>
              ) : (
                reservations.map((r) => (
                  <tr key={r.id} className="border-b border-beige-200/15 hover:bg-beige-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-sans text-sm font-medium text-charcoal">{r.user.name || r.user.email}</p>
                      <p className="font-sans text-xs text-charcoal-light/40">{r.user.phone || r.user.email}</p>
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal">{r.timeSlot.courseType.name}</td>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal-light/60">
                      {new Date(r.timeSlot.startTime).toLocaleDateString("fr-FR")} - {new Date(r.timeSlot.startTime).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-sans text-[11px] font-medium ${statusColors[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {r.payment ? (
                        <span className="font-sans text-sm font-medium text-gold-600">{r.payment.amount}€</span>
                      ) : (
                        <span className="font-sans text-xs text-charcoal-light/30">-</span>
                      )}
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

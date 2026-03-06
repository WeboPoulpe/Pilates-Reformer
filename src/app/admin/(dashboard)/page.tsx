import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [totalUsers, totalReservations, totalPayments, totalRevenue, recentPayments, upcomingSlots] = await Promise.all([
    prisma.user.count({ where: { role: "CLIENT" } }),
    prisma.reservation.count({ where: { status: "CONFIRMED" } }),
    prisma.payment.count({ where: { status: "SUCCEEDED" } }),
    prisma.payment.aggregate({ where: { status: "SUCCEEDED" }, _sum: { amount: true } }),
    prisma.payment.findMany({
      where: { status: "SUCCEEDED" },
      include: { user: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.timeSlot.findMany({
      where: { startTime: { gte: new Date() }, isActive: true },
      include: { courseType: true, reservations: { include: { user: true } } },
      orderBy: { startTime: "asc" },
      take: 5,
    }),
  ]);

  const stats = [
    { label: "Clients", value: totalUsers, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { label: "Reservations", value: totalReservations, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { label: "Paiements", value: totalPayments, icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { label: "Revenus", value: `${(totalRevenue._sum.amount || 0).toFixed(0)}€`, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-charcoal mb-10">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-beige-200/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
            </div>
            <p className="font-serif text-3xl font-bold text-charcoal">{stat.value}</p>
            <p className="font-sans text-xs text-charcoal-light/50 mt-1 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-beige-200/30">
          <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">Derniers paiements</h2>
          {recentPayments.length === 0 ? (
            <p className="font-sans text-sm text-charcoal-light/40">Aucun paiement pour le moment</p>
          ) : (
            <div className="space-y-4">
              {recentPayments.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-3 border-b border-beige-200/20 last:border-0">
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">{p.user.name || p.user.email}</p>
                    <p className="font-sans text-xs text-charcoal-light/40">{p.packageName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-sm font-semibold text-gold-600">{p.amount}€</p>
                    <p className="font-sans text-[10px] text-charcoal-light/30">
                      {new Date(p.createdAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-beige-200/30">
          <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">Prochains cours</h2>
          {upcomingSlots.length === 0 ? (
            <p className="font-sans text-sm text-charcoal-light/40">Aucun cours programme</p>
          ) : (
            <div className="space-y-4">
              {upcomingSlots.map((slot) => (
                <div key={slot.id} className="flex items-center justify-between py-3 border-b border-beige-200/20 last:border-0">
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">{slot.courseType.name}</p>
                    <p className="font-sans text-xs text-charcoal-light/40">
                      {new Date(slot.startTime).toLocaleDateString("fr-FR")} - {new Date(slot.startTime).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-sm font-medium text-charcoal">
                      {slot.reservations.length}/{slot.maxPersons}
                    </p>
                    <p className="font-sans text-[10px] text-charcoal-light/30">inscrits</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

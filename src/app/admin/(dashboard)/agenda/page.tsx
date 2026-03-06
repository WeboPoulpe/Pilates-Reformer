import { prisma } from "@/lib/prisma";
import AgendaManager from "@/components/admin/AgendaManager";

export default async function AgendaPage() {
  const [courseTypes, timeSlots] = await Promise.all([
    prisma.courseType.findMany({ orderBy: { name: "asc" } }),
    prisma.timeSlot.findMany({
      where: { startTime: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      include: {
        courseType: true,
        reservations: { include: { user: { select: { name: true, email: true } } } },
      },
      orderBy: { startTime: "asc" },
    }),
  ]);

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-charcoal mb-10">Gestion de l&apos;agenda</h1>
      <AgendaManager
        courseTypes={JSON.parse(JSON.stringify(courseTypes))}
        initialSlots={JSON.parse(JSON.stringify(timeSlots))}
      />
    </div>
  );
}

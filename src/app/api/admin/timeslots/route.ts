import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Recurrence } from "@/generated/prisma/client";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user || (session.user as { role: string }).role !== "ADMIN") {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { courseTypeId, startTime, endTime, maxPersons, recurrence } = await req.json();

  const slots = [];
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (recurrence === "NONE") {
    slots.push({ courseTypeId, startTime: start, endTime: end, maxPersons, recurrence: "NONE" as Recurrence });
  } else {
    const weeks = recurrence === "WEEKLY" ? 1 : 2;
    for (let i = 0; i < 12; i++) {
      const s = new Date(start.getTime() + i * weeks * 7 * 24 * 60 * 60 * 1000);
      const e = new Date(end.getTime() + i * weeks * 7 * 24 * 60 * 60 * 1000);
      slots.push({ courseTypeId, startTime: s, endTime: e, maxPersons, recurrence: recurrence as Recurrence });
    }
  }

  const created = await prisma.timeSlot.createMany({ data: slots });

  return NextResponse.json({ count: created.count });
}

export async function GET() {
  const session = await auth();
  if (!session?.user || (session.user as { role: string }).role !== "ADMIN") {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const slots = await prisma.timeSlot.findMany({
    where: { startTime: { gte: new Date() } },
    include: {
      courseType: true,
      reservations: { include: { user: { select: { name: true, email: true } } } },
    },
    orderBy: { startTime: "asc" },
  });

  return NextResponse.json(slots);
}

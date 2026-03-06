import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcryptjs";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "priscillia.saihi@hotmail.fr" },
    update: {},
    create: {
      email: "priscillia.saihi@hotmail.fr",
      name: "Priscillia Bunoust",
      password: hashedPassword,
      role: "ADMIN",
      phone: "+33699101741",
    },
  });

  console.log("Admin created:", admin.email);

  const courseTypes = [
    { name: "Pilates Reformer Groupe", duration: 55, maxPersons: 6, price: 26 },
    { name: "Seance Privee", duration: 55, maxPersons: 2, price: 55 },
    { name: "Duo Reformer", duration: 55, maxPersons: 2, price: 40 },
  ];

  for (const ct of courseTypes) {
    await prisma.courseType.upsert({
      where: { id: ct.name.toLowerCase().replace(/\s+/g, "-") },
      update: ct,
      create: { id: ct.name.toLowerCase().replace(/\s+/g, "-"), ...ct },
    });
    console.log("Course type created:", ct.name);
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await pool.end();
  });

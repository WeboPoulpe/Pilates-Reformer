import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  // Seed admin user
  await sql`
    INSERT INTO "User" (id, email, name, password, role, phone, "createdAt", "updatedAt")
    VALUES (
      'admin-priscillia',
      'priscillia.saihi@hotmail.fr',
      'Priscillia Bunoust',
      ${hashedPassword},
      'ADMIN',
      '+33699101741',
      NOW(),
      NOW()
    )
    ON CONFLICT (email) DO NOTHING
  `;
  console.log("Admin created: priscillia.saihi@hotmail.fr");

  // Seed course types
  const courseTypes = [
    { id: "pilates-reformer-groupe", name: "Pilates Reformer Groupe", duration: 55, maxPersons: 6, price: 26 },
    { id: "seance-privee", name: "Seance Privee", duration: 55, maxPersons: 2, price: 55 },
    { id: "duo-reformer", name: "Duo Reformer", duration: 55, maxPersons: 2, price: 40 },
  ];

  for (const ct of courseTypes) {
    await sql`
      INSERT INTO "CourseType" (id, name, duration, "maxPersons", price, "createdAt")
      VALUES (${ct.id}, ${ct.name}, ${ct.duration}, ${ct.maxPersons}, ${ct.price}, NOW())
      ON CONFLICT (id) DO UPDATE SET name = ${ct.name}, duration = ${ct.duration}, "maxPersons" = ${ct.maxPersons}, price = ${ct.price}
    `;
    console.log("Course type created:", ct.name);
  }

  console.log("Seed complete!");
}

main().catch(console.error);

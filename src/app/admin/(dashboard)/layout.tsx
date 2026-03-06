import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  if ((session.user as { role: string }).role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex bg-beige-50">
      <AdminSidebar user={session.user} />
      <main className="flex-1 p-8 md:p-12 overflow-auto">
        {children}
      </main>
    </div>
  );
}

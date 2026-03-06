"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
  { href: "/admin", label: "Tableau de bord", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { href: "/admin/agenda", label: "Agenda", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { href: "/admin/reservations", label: "Reservations", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { href: "/admin/payments", label: "Paiements", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { href: "/admin/loyalty", label: "Fidelite", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
];

export default function AdminSidebar({ user }: { user: { name?: string | null; email?: string | null } }) {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-beige-200/30 flex flex-col">
      <div className="p-8 border-b border-beige-200/30">
        <Link href="/admin" className="flex items-center gap-4">
          <Image src="/logo.jpeg" alt="Yanna Pilates" width={44} height={44} className="rounded-xl" />
          <div>
            <p className="font-serif text-lg font-semibold text-charcoal">Yanna Pilates</p>
            <p className="font-sans text-[10px] uppercase tracking-[2px] text-gold-500">Administration</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-xl font-sans text-sm transition-all ${
                isActive
                  ? "bg-gold-400/10 text-gold-600 font-medium"
                  : "text-charcoal-light/60 hover:bg-beige-50 hover:text-charcoal"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-beige-200/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center">
            <span className="font-serif text-sm font-bold text-gold-600">
              {user.name?.charAt(0) || "A"}
            </span>
          </div>
          <div>
            <p className="font-sans text-sm font-medium text-charcoal">{user.name}</p>
            <p className="font-sans text-[11px] text-charcoal-light/40">{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full py-3 text-center font-sans text-xs font-medium uppercase tracking-[2px] text-charcoal-light/50 hover:text-charcoal border border-beige-200/30 rounded-xl hover:bg-beige-50 transition-all"
        >
          Deconnexion
        </button>
      </div>
    </aside>
  );
}

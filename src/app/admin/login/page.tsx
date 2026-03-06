"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Image src="/logo.jpeg" alt="Yanna Pilates" width={80} height={80} className="mx-auto rounded-2xl mb-6" />
          <h1 className="font-serif text-3xl font-semibold text-charcoal">Administration</h1>
          <p className="font-sans text-sm text-charcoal-light/50 mt-2">Connectez-vous a votre espace admin</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 border border-beige-200/30 shadow-lg shadow-charcoal/5">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-sans">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all"
                placeholder="admin@yanna-pilates.fr"
              />
            </div>
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-gold-500 text-white font-sans text-sm font-semibold uppercase tracking-[2px] rounded-xl hover:bg-gold-600 transition-colors disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}

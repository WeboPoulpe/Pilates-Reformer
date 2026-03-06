"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CourseType = { id: string; name: string; duration: number; maxPersons: number; price: number };
type TimeSlotData = {
  id: string;
  startTime: string;
  endTime: string;
  maxPersons: number;
  isActive: boolean;
  courseType: { name: string };
  reservations: { user: { name: string | null; email: string } }[];
};

export default function AgendaManager({ courseTypes, initialSlots }: { courseTypes: CourseType[]; initialSlots: TimeSlotData[] }) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ courseTypeId: courseTypes[0]?.id || "", date: "", time: "", recurrence: "NONE" });
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const startTime = new Date(`${form.date}T${form.time}`);
    const courseType = courseTypes.find((ct) => ct.id === form.courseTypeId);
    const endTime = new Date(startTime.getTime() + (courseType?.duration || 55) * 60000);

    const res = await fetch("/api/admin/timeslots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseTypeId: form.courseTypeId,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        maxPersons: courseType?.maxPersons || 6,
        recurrence: form.recurrence,
      }),
    });

    if (res.ok) {
      setShowForm(false);
      setForm({ courseTypeId: courseTypes[0]?.id || "", date: "", time: "", recurrence: "NONE" });
      router.refresh();
    }
    setLoading(false);
  };

  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-sm text-charcoal-light/50">{initialSlots.length} creneaux programmes</p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-gold-500 text-white font-sans text-xs font-semibold uppercase tracking-[2px] rounded-xl hover:bg-gold-600 transition-colors"
        >
          {showForm ? "Annuler" : "Ajouter un creneau"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white rounded-2xl p-8 border border-beige-200/30 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block font-sans text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Type de cours</label>
              <select
                value={form.courseTypeId}
                onChange={(e) => setForm({ ...form, courseTypeId: e.target.value })}
                className="w-full px-4 py-3 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm"
              >
                {courseTypes.map((ct) => (
                  <option key={ct.id} value={ct.id}>{ct.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-sans text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
                className="w-full px-4 py-3 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Heure</label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                className="w-full px-4 py-3 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">Recurrence</label>
              <select
                value={form.recurrence}
                onChange={(e) => setForm({ ...form, recurrence: e.target.value })}
                className="w-full px-4 py-3 bg-beige-50 border border-beige-200/50 rounded-xl font-sans text-sm"
              >
                <option value="NONE">Unique</option>
                <option value="WEEKLY">Chaque semaine</option>
                <option value="BIWEEKLY">Toutes les 2 semaines</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-8 py-3 bg-charcoal text-white font-sans text-xs font-semibold uppercase tracking-[2px] rounded-xl hover:bg-charcoal-light transition-colors disabled:opacity-50"
          >
            {loading ? "Creation..." : "Creer le creneau"}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {initialSlots.map((slot) => {
          const start = new Date(slot.startTime);
          const end = new Date(slot.endTime);
          return (
            <div key={slot.id} className="bg-white rounded-2xl p-6 border border-beige-200/30 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-center min-w-[60px]">
                  <p className="font-sans text-[10px] uppercase tracking-wider text-gold-500 font-semibold">{days[start.getDay()]}</p>
                  <p className="font-serif text-2xl font-bold text-charcoal">{start.getDate()}</p>
                  <p className="font-sans text-[10px] text-charcoal-light/40">
                    {start.toLocaleDateString("fr-FR", { month: "short" })}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">{slot.courseType.name}</p>
                  <p className="font-sans text-xs text-charcoal-light/50">
                    {start.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} - {end.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {slot.reservations.length}/{slot.maxPersons}
                  </p>
                  <p className="font-sans text-[10px] text-charcoal-light/30">inscrits</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${slot.isActive ? "bg-green-400" : "bg-red-400"}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

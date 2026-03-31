"use client";

import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const schedule = [
  {
    day: "Lundi",
    slots: [
      { time: "09:00", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "10:15", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
      { time: "12:15", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "17:30", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "18:45", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
    ],
  },
  {
    day: "Mardi",
    slots: [
      { time: "09:00", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
      { time: "10:15", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "12:15", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "17:30", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "18:45", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
    ],
  },
  {
    day: "Mercredi",
    slots: [
      { time: "09:00", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "10:15", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "12:15", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
      { time: "17:30", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "18:45", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
    ],
  },
  {
    day: "Jeudi",
    slots: [
      { time: "09:00", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "10:15", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "12:15", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "17:30", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
      { time: "18:45", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
    ],
  },
  {
    day: "Vendredi",
    slots: [
      { time: "09:00", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
      { time: "10:15", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "12:15", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "17:30", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "18:45", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
    ],
  },
  {
    day: "Samedi",
    slots: [
      { time: "09:00", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "10:15", course: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
      { time: "11:30", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
    ],
  },
  {
    day: "Dimanche",
    slots: [
      { time: "09:30", course: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
      { time: "10:45", course: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
    ],
  },
];

export default function Schedule() {
  return (
    <section id="planning" className="py-36 md:py-48 bg-beige-50/50">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <SectionHeader
          tag="Planning"
          title="Trouvez votre"
          highlight="creneau"
        />

        {/* Offres de lancement */}
        <FadeIn className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/25 p-8 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-white font-sans text-[9px] font-bold uppercase tracking-[3px] px-5 py-1 rounded-full">
                Offre de lancement
              </span>
              <p className="font-serif text-2xl font-semibold text-charcoal mt-2 mb-2">
                1 cours achete = 1 cours offert
              </p>
              <p className="font-serif text-4xl font-bold text-[#d4af37]">25 &euro;</p>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/25 p-8 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-white font-sans text-[9px] font-bold uppercase tracking-[3px] px-5 py-1 rounded-full">
                Pack Decouverte
              </span>
              <p className="font-serif text-2xl font-semibold text-charcoal mt-2 mb-2">
                2 semaines de cours illimites
              </p>
              <p className="font-serif text-4xl font-bold text-[#d4af37]">49 &euro;</p>
            </div>
          </div>
        </FadeIn>

        {/* Planning grid */}
        <FadeIn>
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-7 gap-3 mb-4">
                {schedule.map((day) => (
                  <div
                    key={day.day}
                    className="text-center py-4 rounded-xl bg-charcoal text-white"
                  >
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px]">
                      {day.day}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slots */}
              <div className="grid grid-cols-7 gap-3">
                {schedule.map((day) => (
                  <div key={day.day} className="flex flex-col gap-2">
                    {day.slots.map((slot, j) => (
                      <div
                        key={j}
                        className={`rounded-xl p-4 border border-transparent hover:border-[#d4af37]/30 transition-all duration-300 ${slot.color}`}
                      >
                        <p className="font-sans text-[11px] font-bold tracking-wide mb-1">
                          {slot.time}
                        </p>
                        <p className="font-sans text-xs font-medium">
                          {slot.course}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Legende */}
        <StaggerContainer className="flex flex-wrap justify-center gap-6 mt-12 mb-8" staggerDelay={0.1}>
          {[
            { label: "L'Integral", color: "bg-[#9cac8b]/20 text-[#6b7d5e]" },
            { label: "Abs & Glutes", color: "bg-[#d4a5a5]/20 text-[#b07878]" },
            { label: "Cardio Sculpt", color: "bg-[#c9a84c]/20 text-[#a08530]" },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <span className="font-sans text-xs font-medium text-charcoal-light/60">
                  {item.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note */}
        <FadeIn delay={0.2}>
          <p className="text-center font-sans text-xs text-charcoal-light/35 mt-10 max-w-2xl mx-auto leading-relaxed">
            Annulations acceptees jusqu&apos;a 12h avant le debut du cours.
            Dernieres reservations possibles jusqu&apos;a 15 min avant le debut.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

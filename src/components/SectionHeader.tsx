"use client";

import { FadeIn } from "./motion";

export default function SectionHeader({
  tag,
  title,
  highlight,
  titleSuffix,
}: {
  tag: string;
  title: string;
  highlight: string;
  titleSuffix?: string;
}) {
  return (
    <div className="text-center mb-24 lg:mb-28">
      <FadeIn>
        <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[6px] text-gold-500">
          {tag}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light text-charcoal mt-6 mb-8 leading-tight">
          {title}{" "}
          <br className="hidden md:block" />
          <span className="italic bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            {highlight}
          </span>
          {titleSuffix}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600" />
      </FadeIn>
    </div>
  );
}

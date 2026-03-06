import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import CTABanner from "@/components/CTABanner";
import Cours from "@/components/Cours";
import Tarifs from "@/components/Tarifs";
import Temoignages from "@/components/Temoignages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <CTABanner />
      <Cours />
      <Tarifs />
      <Temoignages />
      <FAQ />
      <Contact />
    </>
  );
}

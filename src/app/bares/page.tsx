import type { Metadata } from "next";
import BarCard from "@/components/BarCard";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import type { Bar } from "@/lib/types";
import baresData from "@/data/bares.json";
import BaresFilter from "./BaresFilter";

const bares: Bar[] = baresData as Bar[];

export const metadata: Metadata = {
  title: "Locales participantes",
  description:
    "Explora los 40+ locales participantes de la Valpo Cocktail Week 2026. Coctelería de autor en los cerros y el plan de Valparaíso.",
};

export default function BaresPage() {
  // Get unique zones
  const zonas = [...new Set(bares.map((b) => b.zona))].sort();

  return (
    <>
      <PageHero
        eyebrow="Participantes 2026"
        title="Todos los locales de la"
        titleAccent="semana"
        subtitle="Explora los locales participantes de la Valpo Cocktail Week. Coctelería de autor, ambiente único y cócteles creados especialmente para la ocasión."
      />

      <section className="py-12 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto">
          <BaresFilter bares={bares} zonas={zonas} />
        </div>
      </section>

      {/* Inscripción CTA */}
      <section className="py-20 px-6 md:px-12 bg-gris text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="section-label text-center">¿Tienes un bar o restaurant?</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] mb-4">
            Inscribe tu local a la edición 2026
          </h2>
          <p className="opacity-50 leading-relaxed mb-8">
            Completa el formulario de inscripción y forma parte de la semana
            coctelera más importante de Valparaíso.
          </p>
          <Button href="/inscripcion">Quiero inscribir mi local</Button>
        </div>
      </section>
    </>
  );
}

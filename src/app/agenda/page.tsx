import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import type { DiaAgenda } from "@/lib/types";
import agendaData from "@/data/agenda.json";

const agenda: DiaAgenda[] = agendaData as DiaAgenda[];

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Agenda completa de la Valpo Cocktail Week 2026. 7 días de eventos, masterclasses, competencias y fiestas en Valparaíso.",
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="9 – 15 Junio 2026"
        title="Agenda de"
        titleAccent="actividades"
        subtitle="Una semana completa de eventos, masterclasses, competencias y fiestas en los bares de Valparaíso."
      />

      <section className="py-16 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto">
          {agenda.map((dia, i) => (
            <SectionReveal key={dia.fecha} delay={i * 80}>
              <div className="mb-12 last:mb-0">
                {/* Day header */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="clip-btn bg-amarillo text-negro font-display text-lg tracking-[0.08em] px-5 py-1.5 shrink-0">
                    {dia.dia}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl tracking-[0.03em]">
                    {dia.titulo}
                  </h2>
                  <div className="flex-1 h-px bg-white/[0.08] hidden md:block" />
                </div>

                {/* Events */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                  {dia.eventos.map((evento, j) => (
                    <div
                      key={j}
                      className="bg-gris p-8 transition-colors hover:bg-gris-claro group relative overflow-hidden"
                    >
                      <div className="flex items-start gap-4">
                        <div className="font-display text-2xl text-calipso text-glow-calipso shrink-0 mt-0.5">
                          {evento.hora}
                        </div>
                        <div>
                          <h3 className="font-display text-lg tracking-[0.03em] mb-1.5">
                            {evento.nombre}
                          </h3>
                          <p className="text-[0.78rem] text-calipso/70 flex items-center gap-1.5 mb-3">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {evento.lugar}
                          </p>
                          <p className="text-sm opacity-50 leading-relaxed">
                            {evento.descripcion}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-magenta transition-all duration-400 group-hover:w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}

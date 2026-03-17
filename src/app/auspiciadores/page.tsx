import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import Button from "@/components/Button";
import type { Auspiciador } from "@/lib/types";
import auspiciadoresData from "@/data/auspiciadores.json";

const auspiciadores: Auspiciador[] = auspiciadoresData as Auspiciador[];

export const metadata: Metadata = {
  title: "Auspiciadores",
  description:
    "Auspiciadores y colaboradores de la Valpo Cocktail Week 2026. Conoce a las marcas que hacen posible este evento.",
};

const tierLabels: Record<string, string> = {
  principal: "Auspiciador Principal",
  asociado: "Auspiciador Asociado",
  colaborador: "Colaborador",
  institucional: "Apoyo Institucional",
};

const tierColors: Record<string, string> = {
  principal: "text-amarillo text-glow-amarillo",
  asociado: "text-calipso",
  colaborador: "text-blanco/60",
  institucional: "text-blanco/60",
};

export default function AuspiciadoresPage() {
  const tiers = ["principal", "asociado", "colaborador", "institucional"];

  return (
    <>
      <PageHero
        eyebrow="Nos apoyan"
        title="Auspiciadores &"
        titleAccent="colaboradores"
        subtitle="Marcas y organizaciones que hacen posible la Valpo Cocktail Week 2026."
      />

      <section className="py-16 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto">
          {tiers.map((tier) => {
            const sponsors = auspiciadores.filter((a) => a.tier === tier);
            if (sponsors.length === 0) return null;

            return (
              <div key={tier} className="mb-16 last:mb-0">
                <SectionReveal>
                  <h2
                    className={`font-display text-2xl tracking-[0.08em] mb-8 ${tierColors[tier]}`}
                  >
                    {tierLabels[tier]}
                  </h2>
                </SectionReveal>

                <div
                  className={`grid gap-px bg-white/5 ${
                    tier === "principal"
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-3"
                  }`}
                >
                  {sponsors.map((sponsor, i) => (
                    <SectionReveal key={sponsor.id} delay={i * 80}>
                      <a
                        href={sponsor.sitioWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block bg-gris transition-colors hover:bg-gris-claro no-underline text-blanco group ${
                          tier === "principal" ? "p-10 md:p-12" : "p-8"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`bg-gradient-to-br from-calipso/20 to-magenta/20 border border-white/10 flex items-center justify-center font-display tracking-[0.15em] text-calipso ${
                              tier === "principal"
                                ? "w-20 h-20 text-lg"
                                : "w-14 h-14 text-sm"
                            }`}
                          >
                            {sponsor.nombre
                              .split(" ")
                              .map((w) => w[0])
                              .join("")
                              .slice(0, 3)}
                          </div>
                          <div>
                            <h3
                              className={`font-display tracking-[0.05em] leading-tight ${
                                tier === "principal"
                                  ? "text-xl"
                                  : "text-lg"
                              }`}
                            >
                              {sponsor.nombre}
                            </h3>
                            <p className="text-[0.68rem] tracking-[0.15em] uppercase text-calipso/60 mt-1">
                              {tierLabels[tier]}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm opacity-50 leading-relaxed">
                          {sponsor.descripcion}
                        </p>
                        <span className="inline-block mt-4 text-[0.72rem] text-calipso opacity-0 group-hover:opacity-70 transition-opacity">
                          Visitar sitio →
                        </span>
                      </a>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-magenta py-16 px-6 md:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px)`,
          }}
        />
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative text-center md:text-left">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-tight max-w-[500px]">
              ¿Quieres auspiciar la VCW 2026?
            </h2>
            <p className="opacity-80 mt-3 max-w-md">
              Conversemos sobre cómo tu marca puede ser parte de la semana
              coctelera más importante de Valparaíso.
            </p>
          </div>
          <Button href="mailto:auspicio@valpococktailweek.cl" variant="white">
            Contactar para auspicio
          </Button>
        </div>
      </section>
    </>
  );
}

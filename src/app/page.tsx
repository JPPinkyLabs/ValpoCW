import Link from "next/link";
import Button from "@/components/Button";
import SectionReveal from "@/components/SectionReveal";
import BarCard from "@/components/BarCard";
import type { Bar, Auspiciador } from "@/lib/types";
import baresData from "@/data/bares.json";
import auspiciadoresData from "@/data/auspiciadores.json";

const bares: Bar[] = baresData as Bar[];
const auspiciadores: Auspiciador[] = auspiciadoresData as Auspiciador[];

export default function Home() {
  const featuredBars = bares.slice(0, 7);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end px-6 md:px-12 pb-20 overflow-hidden">
        {/* Animated mesh bg */}
        <div
          className="absolute inset-0 animate-[meshShift_12s_ease-in-out_infinite_alternate]"
          style={{
            background: `
              radial-gradient(ellipse 80% 70% at 20% 60%, rgba(0,229,204,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255,45,120,0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(139,0,255,0.12) 0%, transparent 70%),
              var(--negro)
            `,
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,204,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,204,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Rotating circle */}
        <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[min(80vw,650px)] h-[min(80vw,650px)] rounded-full border border-calipso/[0.12] animate-[rotar_30s_linear_infinite]">
          <div className="absolute inset-[30px] rounded-full border border-magenta/[0.1]" />
        </div>

        <div className="relative z-[2] max-w-[750px]">
          <p className="text-[0.72rem] tracking-[0.3em] uppercase text-calipso mb-5 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards]">
            Valparaíso · Chile · 2026
          </p>
          <h1 className="font-display text-[clamp(4.5rem,13vw,11rem)] leading-[0.88] tracking-[0.02em] opacity-0 animate-[fadeUp_0.9s_0.5s_forwards]">
            <span className="text-blanco block">VALPO</span>
            <span
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--magenta)",
                textShadow: "0 0 40px rgba(255,45,120,0.4)",
              }}
            >
              COCKTAIL
            </span>
            <span className="text-calipso block text-glow-calipso">WEEK</span>
          </h1>
          <div className="mt-7 flex items-center gap-6 opacity-0 animate-[fadeUp_0.9s_0.8s_forwards]">
            <span className="clip-btn bg-amarillo text-negro font-display text-[1.4rem] tracking-[0.08em] px-5 py-1.5">
              9 — 15 JUNIO
            </span>
            <span className="text-[0.8rem] tracking-[0.12em] uppercase opacity-60">
              El cerro con más sabor de Chile
            </span>
          </div>
          <div className="mt-10 flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.9s_1s_forwards]">
            <Button href="/agenda">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
              Ver agenda de actividades
            </Button>
            <Button href="/bares" variant="secondary">
              Explorar bares participantes
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-12 hidden md:flex flex-col items-center gap-1.5 opacity-40 text-[0.65rem] tracking-[0.2em] uppercase animate-[fadeUp_1s_1.5s_forwards]">
          Scroll
          <span className="w-px h-[50px] bg-gradient-to-b from-calipso to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section id="que-es" className="bg-gris relative overflow-hidden py-24 px-6 md:px-12">
        <span
          className="absolute right-[-2rem] bottom-[-3rem] font-display text-[22rem] text-calipso/[0.03] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          VCW
        </span>
        <div className="max-w-[1200px] mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <SectionReveal>
            <div className="relative max-w-[400px] md:max-w-none">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-magenta/30 via-violeta/30 to-calipso/20 flex items-center justify-center font-display text-sm tracking-[0.2em] opacity-50 border border-magenta/20">
                FOTO DEL EVENTO
              </div>
              <div className="absolute bottom-[-16px] right-[-16px] w-[60%] h-[60%] border-r-2 border-b-2 border-magenta shadow-[8px_8px_30px_rgba(255,45,120,0.2)]" />
              <div className="absolute top-[-16px] left-[-16px] w-[40%] h-[40%] border-l-2 border-t-2 border-calipso shadow-[-8px_-8px_30px_rgba(0,229,204,0.2)] z-[1]" />
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div>
              <p className="section-label">¿Qué es la Valpo Cocktail Week?</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[0.03em] mb-7">
                Una semana entera de{" "}
                <em className="not-italic text-magenta text-glow-magenta">
                  coctelería
                </em>{" "}
                en los cerros y el plan
              </h2>
              <p className="text-base leading-relaxed opacity-75 mb-5">
                La{" "}
                <strong className="text-calipso font-medium">
                  Valpo Cocktail Week
                </strong>{" "}
                reúne a los mejores bares de Valparaíso durante una semana de
                experiencias únicas, cócteles de autor y precios especiales. Del
                plan al cerro, la ciudad se transforma.
              </p>
              <p className="text-base leading-relaxed opacity-75">
                Más de{" "}
                <strong className="text-calipso font-medium">
                  40 locales participantes
                </strong>{" "}
                presentarán creaciones exclusivas diseñadas para la ocasión. Una
                oportunidad irrepetible para explorar la escena coctelera más
                auténtica del litoral chileno.
              </p>

              <div className="flex gap-10 mt-10 pt-8 border-t border-white/[0.08]">
                {[
                  { num: "40+", label: "Bares" },
                  { num: "7", label: "Días" },
                  { num: "120+", label: "Cócteles" },
                  { num: "1ª", label: "Edición" },
                ].map((stat) => (
                  <SectionReveal key={stat.label} delay={100}>
                    <div>
                      <div className="font-display text-[2.8rem] text-amarillo leading-none text-glow-amarillo">
                        {stat.num}
                      </div>
                      <div className="text-[0.72rem] tracking-[0.12em] uppercase opacity-50 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-24 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
              ¿Cómo <span className="text-calipso">funciona?</span>
            </h2>
            <Button
              href="/bares"
              variant="secondary"
              className="!text-[0.72rem] !px-6 !py-3"
            >
              Ver todos los bares
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              {
                num: "01",
                icon: "🗺️",
                title: "Elige tu bar",
                desc: "Explora el mapa de locales participantes desde el Plan hasta el Cerro Alegre y el Cerro Concepción.",
              },
              {
                num: "02",
                icon: "🍹",
                title: "Pide el cóctel especial",
                desc: "Cada bar participante ofrece uno o más cócteles de autor diseñados exclusivamente para la semana, a precio especial.",
              },
              {
                num: "03",
                icon: "📸",
                title: "Comparte la experiencia",
                desc: "Sube tu cóctel con el hashtag #ValpoCocktailWeek y forma parte de la comunidad.",
              },
            ].map((step, i) => (
              <SectionReveal key={step.num} delay={i * 120}>
                <div className="bg-gris p-10 md:p-12 relative overflow-hidden group transition-colors duration-300 hover:bg-gris-claro h-full">
                  <span className="absolute top-[-1.5rem] right-4 font-display text-[8rem] text-white/[0.03] leading-none pointer-events-none">
                    {step.num}
                  </span>
                  <div className="text-[2.5rem] mb-6">{step.icon}</div>
                  <h3 className="font-display text-[1.6rem] tracking-[0.05em] mb-3 text-amarillo">
                    {step.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed opacity-65">
                    {step.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-magenta transition-all duration-400 group-hover:w-full" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BARES ── */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-negro to-gris">
        <div className="max-w-[1200px] mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="section-label">Participantes 2026</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
              Los bares de la{" "}
              <em className="not-italic text-magenta">semana</em>
            </h2>
          </div>
          <Button
            href="/bares"
            className="!text-[0.72rem] !px-6 !py-3"
          >
            Ver todos →
          </Button>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {featuredBars.map((bar, i) => (
            <BarCard key={bar.id} bar={bar} index={i} />
          ))}
          <SectionReveal delay={7 * 80}>
            <div className="border border-dashed border-magenta/30 bg-transparent flex flex-col items-center justify-center text-center gap-2 p-8 h-full min-h-[200px]">
              <div className="text-3xl opacity-30">+</div>
              <div className="font-display text-base opacity-40">
                {bares.length - 7} bares más
              </div>
              <Link
                href="/bares"
                className="text-[0.72rem] text-calipso opacity-70 no-underline hover:opacity-100 transition-opacity"
              >
                Ver mapa completo →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── ORGANIZADOR ── */}
      <section className="bg-negro text-center py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <p className="section-label text-center">Organiza</p>
          <div className="inline-block border-[1.5px] border-calipso/30 px-12 py-6 font-display text-3xl tracking-[0.25em] text-calipso text-glow-calipso shadow-[0_0_30px_rgba(0,229,204,0.1)] mb-10">
            ACOVAL
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] mb-4">
            Asociación de Cocteleros de Valparaíso
          </h2>
          <p className="opacity-60 leading-relaxed mb-10">
            La Valpo Cocktail Week es una iniciativa de ACOVAL para visibilizar
            y potenciar la escena de bares y coctelería de Valparaíso, ciudad
            declarada Patrimonio de la Humanidad por la UNESCO.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="mailto:hola@valpococktailweek.cl" variant="secondary">
              hola@valpococktailweek.cl
            </Button>
            <Button
              href="https://instagram.com/valpococktailweek"
              external
            >
              Seguir en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* ── INSCRIPCIÓN BANNER ── */}
      <section className="bg-magenta py-16 px-6 md:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px)`,
          }}
        />
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight max-w-[550px] text-center md:text-left">
            ¿Tienes un bar en Valpo? Inscríbete a la edición 2026.
          </h2>
          <Button href="/inscripcion" variant="white">
            Quiero inscribir mi bar
          </Button>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section className="py-16 px-6 md:px-12 bg-gris">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[0.68rem] tracking-[0.3em] uppercase opacity-35 text-center mb-10">
            Auspiciadores & colaboradores
          </h3>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {auspiciadores.map((sponsor) => (
              <SectionReveal key={sponsor.id}>
                <a
                  href={sponsor.sitioWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg tracking-[0.18em] opacity-25 hover:opacity-60 transition-opacity cursor-pointer no-underline text-blanco"
                >
                  {sponsor.nombre.toUpperCase()}
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

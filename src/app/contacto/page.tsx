import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta al equipo de la Valpo Cocktail Week 2026. Consultas, prensa, auspicio y colaboraciones.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        subtitle="¿Tienes dudas, quieres colaborar o necesitas cobertura de prensa? Escríbenos."
      />

      <section className="py-16 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16">
          {/* Info */}
          <div>
            <SectionReveal>
              <div className="mb-10">
                <h2 className="font-display text-2xl mb-6 text-calipso">
                  Información
                </h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[0.72rem] tracking-[0.15em] uppercase opacity-40 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hola@valpococktailweek.cl"
                      className="text-blanco no-underline hover:text-calipso transition-colors"
                    >
                      hola@valpococktailweek.cl
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.72rem] tracking-[0.15em] uppercase opacity-40 mb-1">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/valpococktailweek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blanco no-underline hover:text-calipso transition-colors"
                    >
                      @valpococktailweek
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.72rem] tracking-[0.15em] uppercase opacity-40 mb-1">
                      Organiza
                    </p>
                    <p>ACOVAL – Asociación de Cocteleros de Valparaíso</p>
                  </div>
                  <div>
                    <p className="text-[0.72rem] tracking-[0.15em] uppercase opacity-40 mb-1">
                      Ubicación
                    </p>
                    <p>Valparaíso, Chile</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="bg-gris p-8 border-l-2 border-calipso">
                <h3 className="font-display text-lg mb-3 text-amarillo">
                  Prensa y medios
                </h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">
                  Para solicitar acreditación de prensa, entrevistas o material
                  gráfico, escribe a:
                </p>
                <a
                  href="mailto:prensa@valpococktailweek.cl"
                  className="text-calipso text-sm no-underline hover:underline"
                >
                  prensa@valpococktailweek.cl
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="bg-gris p-8 border-l-2 border-magenta mt-4">
                <h3 className="font-display text-lg mb-3 text-amarillo">
                  Auspicio y colaboraciones
                </h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">
                  Interesado en auspiciar o colaborar con la VCW 2026?
                  Conversemos:
                </p>
                <a
                  href="mailto:auspicio@valpococktailweek.cl"
                  className="text-calipso text-sm no-underline hover:underline"
                >
                  auspicio@valpococktailweek.cl
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Form */}
          <SectionReveal delay={100}>
            <div className="bg-gris p-8 md:p-12">
              <h2 className="font-display text-2xl mb-8">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

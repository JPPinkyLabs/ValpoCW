import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InscripcionForm from "./InscripcionForm";

export const metadata: Metadata = {
  title: "Inscribir mi local",
  description:
    "Inscribe tu bar o restaurant a la Valpo Cocktail Week 2026. Completa el formulario y forma parte de la semana coctelera más importante de Valparaíso.",
};

export default function InscripcionPage() {
  return (
    <>
      <PageHero
        eyebrow="Inscripción 2026"
        title="Inscribe tu"
        titleAccent="local"
        subtitle="Completa el formulario para participar en la Valpo Cocktail Week 2026. Nos pondremos en contacto contigo para confirmar tu participación."
      />

      <section className="py-16 px-6 md:px-12 bg-gris">
        <div className="max-w-[700px] mx-auto">
          <InscripcionForm />
        </div>
      </section>

      {/* Info boxes */}
      <section className="py-16 px-6 md:px-12 bg-negro">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px">
          {[
            {
              icon: "📋",
              title: "Requisitos",
              desc: "Patente al día, experiencia en coctelería y disposición a crear un cóctel exclusivo para la semana.",
            },
            {
              icon: "💰",
              title: "Sin costo",
              desc: "La inscripción es gratuita. Solo necesitas ofrecer al menos un cóctel especial a precio preferente.",
            },
            {
              icon: "📣",
              title: "Beneficios",
              desc: "Difusión en redes, presencia en web y mapa oficial, material gráfico y cobertura de prensa.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gris p-10 transition-colors hover:bg-gris-claro"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl tracking-[0.05em] mb-3 text-amarillo">
                {item.title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

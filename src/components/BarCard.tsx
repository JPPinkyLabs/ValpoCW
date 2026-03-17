import type { Bar } from "@/lib/types";
import SectionReveal from "./SectionReveal";

interface BarCardProps {
  bar: Bar;
  index?: number;
}

export default function BarCard({ bar, index = 0 }: BarCardProps) {
  return (
    <SectionReveal delay={index * 80}>
      <div className="bg-negro p-6 md:p-8 transition-colors duration-250 hover:bg-gris flex flex-col gap-3 h-full group">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-calipso opacity-70">
          {bar.zona}
        </span>
        <h3 className="font-display text-xl tracking-[0.05em] leading-tight">
          {bar.nombre}
        </h3>
        <p className="text-sm opacity-50 leading-relaxed">{bar.descripcion}</p>
        <div className="mt-auto pt-4 border-t border-white/[0.06] text-[0.75rem] text-amarillo opacity-80">
          🍸 Cóctel de la semana: {bar.cocktail}
        </div>
        {bar.direccion && (
          <div className="text-[0.72rem] opacity-35 flex items-center gap-1.5">
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
            {bar.direccion}
          </div>
        )}
        {bar.horario && (
          <div className="text-[0.72rem] opacity-35 flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {bar.horario}
          </div>
        )}
      </div>
    </SectionReveal>
  );
}

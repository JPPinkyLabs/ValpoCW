import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04040a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12">
        <div>
          <Link
            href="/"
            className="font-display text-2xl tracking-[0.1em] text-calipso no-underline block mb-3"
          >
            VALPO<span className="text-magenta">CW</span>
          </Link>
          <p className="text-sm opacity-40 leading-relaxed max-w-sm">
            La semana de la coctelería en Valparaíso. Una ciudad, sus bares, sus restaurantes, sus
            historias y los mejores cócteles del litoral chileno.
          </p>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-calipso mb-5">
            El evento
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <Link
                href="/#que-es"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                ¿Qué es?
              </Link>
            </li>
            <li>
              <Link
                href="/bares"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                Locales participantes
              </Link>
            </li>
            <li>
              <Link
                href="/agenda"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                href="/inscripcion"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                Inscribir mi local
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-calipso mb-5">
            Contacto
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <a
                href="mailto:hola@valpococktailweek.cl"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                hola@valpococktailweek.cl
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/valpococktailweek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                @valpococktailweek
              </a>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                Prensa
              </Link>
            </li>
            <li>
              <Link
                href="/auspiciadores"
                className="text-blanco no-underline text-[0.85rem] opacity-45 hover:opacity-90 hover:text-calipso transition-all"
              >
                Sponsors
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-6 pb-6 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs opacity-30 gap-2">
        <span>© 2026 Valpo Cocktail Week</span>
        <span>Pinky Labs</span>
        <span>Valparaíso, Chile</span>
      </div>
    </footer>
  );
}

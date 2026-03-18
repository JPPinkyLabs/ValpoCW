"use client";

import { useState, useMemo } from "react";
import BarCard from "@/components/BarCard";
import type { Bar } from "@/lib/types";

interface BaresFilterProps {
  bares: Bar[];
  zonas: string[];
}

export default function BaresFilter({ bares, zonas }: BaresFilterProps) {
  const [zona, setZona] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return bares.filter((b) => {
      const matchZona = zona === "Todas" || b.zona === zona;
      const matchSearch =
        search === "" ||
        b.nombre.toLowerCase().includes(search.toLowerCase()) ||
        b.cocktail.toLowerCase().includes(search.toLowerCase()) ||
        b.zona.toLowerCase().includes(search.toLowerCase());
      return matchZona && matchSearch;
    });
  }, [bares, zona, search]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nombre, cóctel o zona..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gris border border-white/10 text-blanco placeholder:text-white/30 text-sm pl-11 pr-4 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setZona("Todas")}
            className={`text-[0.72rem] tracking-[0.12em] uppercase px-4 py-2 border transition-all ${
              zona === "Todas"
                ? "bg-calipso text-negro border-calipso"
                : "bg-transparent text-blanco/60 border-white/10 hover:border-calipso/40"
            }`}
          >
            Todas
          </button>
          {zonas.map((z) => (
            <button
              key={z}
              onClick={() => setZona(z)}
              className={`text-[0.72rem] tracking-[0.12em] uppercase px-4 py-2 border transition-all ${
                zona === z
                  ? "bg-calipso text-negro border-calipso"
                  : "bg-transparent text-blanco/60 border-white/10 hover:border-calipso/40"
              }`}
            >
              {z}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm opacity-40 mb-6">
        {filtered.length} {filtered.length === 1 ? "local" : "locales"}{" "}
        {zona !== "Todas" ? `en ${zona}` : "participantes"}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {filtered.map((bar, i) => (
          <BarCard key={bar.id} bar={bar} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 opacity-40">
          <div className="text-4xl mb-4">🍸</div>
          <p className="font-display text-xl">No se encontraron locales</p>
          <p className="text-sm mt-2">Intenta con otro filtro o búsqueda</p>
        </div>
      )}
    </>
  );
}

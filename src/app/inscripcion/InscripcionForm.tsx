"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function InscripcionForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-6">🍸</div>
        <h2 className="font-display text-3xl mb-4 text-calipso">
          Inscripción recibida
        </h2>
        <p className="opacity-60 leading-relaxed max-w-md mx-auto">
          Gracias por tu interés en participar. Nos pondremos en contacto
          contigo a la brevedad para confirmar tu inscripción.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-6"
    >
      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Nombre del local *
        </label>
        <input
          type="text"
          required
          placeholder="Ej: Bar El Farol"
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Zona *
          </label>
          <select
            required
            className="w-full bg-negro border border-white/10 text-blanco text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors appearance-none"
          >
            <option value="">Selecciona zona</option>
            <option value="Cerro Alegre">Cerro Alegre</option>
            <option value="Cerro Concepción">Cerro Concepción</option>
            <option value="Cerro Bellavista">Cerro Bellavista</option>
            <option value="Cerro Panteón">Cerro Panteón</option>
            <option value="Cerro Florida">Cerro Florida</option>
            <option value="Cerro Artillería">Cerro Artillería</option>
            <option value="Plan">Plan</option>
            <option value="Puerto">Puerto</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Dirección *
          </label>
          <input
            type="text"
            required
            placeholder="Ej: Paseo Yugoslavo 45"
            className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Email de contacto *
          </label>
          <input
            type="email"
            required
            placeholder="bar@ejemplo.cl"
            className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            placeholder="+56 9 1234 5678"
            className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Instagram
        </label>
        <input
          type="text"
          placeholder="@tulocal"
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Nombre del cóctel especial *
        </label>
        <input
          type="text"
          required
          placeholder="Ej: Neblina Porteña"
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Descripción del local
        </label>
        <textarea
          rows={4}
          placeholder="Cuéntanos sobre tu local, su estilo y especialidad..."
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Horario durante la semana *
        </label>
        <input
          type="text"
          required
          placeholder="Ej: 18:00 – 01:00"
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
        />
      </div>

      <div className="mt-4">
        <Button type="submit">Enviar inscripción</Button>
      </div>
    </form>
  );
}

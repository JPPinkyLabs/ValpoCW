"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-display text-2xl text-calipso mb-3">
          Mensaje enviado
        </h3>
        <p className="opacity-50 text-sm">
          Te responderemos a la brevedad. Gracias por contactarnos.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Nombre *
          </label>
          <input
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="tu@email.cl"
            className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Asunto *
        </label>
        <select
          required
          className="w-full bg-negro border border-white/10 text-blanco text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors appearance-none"
        >
          <option value="">Selecciona un tema</option>
          <option value="general">Consulta general</option>
          <option value="inscripcion">Inscripción de local</option>
          <option value="prensa">Prensa y medios</option>
          <option value="auspicio">Auspicio y colaboración</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-[0.72rem] tracking-[0.15em] uppercase text-calipso mb-2">
          Mensaje *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Escribe tu mensaje..."
          className="w-full bg-negro border border-white/10 text-blanco placeholder:text-white/25 text-sm px-5 py-3 focus:outline-none focus:border-calipso/50 transition-colors resize-none"
        />
      </div>

      <div>
        <Button type="submit">Enviar mensaje</Button>
      </div>
    </form>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 bg-gradient-to-b from-[rgba(8,8,16,0.95)] to-transparent backdrop-blur-sm">
      <Link
        href="/"
        className="font-display text-2xl tracking-[0.12em] text-calipso no-underline text-glow-calipso"
      >
        VALPO<span className="text-magenta">CW</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-10 list-none items-center">
        <li>
          <Link
            href="/#que-es"
            className="text-blanco no-underline text-[0.78rem] font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            El evento
          </Link>
        </li>
        <li>
          <Link
            href="/bares"
            className="text-blanco no-underline text-[0.78rem] font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Locales
          </Link>
        </li>
        <li>
          <Link
            href="/agenda"
            className="text-blanco no-underline text-[0.78rem] font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Agenda
          </Link>
        </li>
        <li>
          <Link
            href="/auspiciadores"
            className="text-blanco no-underline text-[0.78rem] font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Auspiciadores
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className="text-blanco no-underline text-[0.78rem] font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Contacto
          </Link>
        </li>
        <li>
          <a
            href="https://instagram.com/valpococktailweek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-magenta text-white px-4 py-2 rounded-sm text-[0.78rem] font-medium tracking-[0.15em] uppercase no-underline hover:bg-calipso hover:text-negro transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 1c-1.657 0-3.158.673-4.243 1.757S1 5.343 1 7v10c0 1.657.673 3.158 1.757 4.243S5.343 23 7 23h10c1.657 0 3.158-.673 4.243-1.757S23 18.657 23 17V7c0-1.657-.673-3.158-1.757-4.243S18.657 1 17 1zm0 2h10c1.105 0 2.103.447 2.828 1.172S21 5.895 21 7v10c0 1.105-.447 2.103-1.172 2.828S18.105 21 17 21H7c-1.105 0-2.103-.447-2.828-1.172S3 18.105 3 17V7c0-1.105.447-2.103 1.172-2.828S5.895 3 7 3zm9.989 8.223a5.013 5.013 0 0 0-1.194-2.567A4.985 4.985 0 0 0 12.786 7c-.464-.074-.97-.077-1.477-.002a5.012 5.012 0 0 0-3.282 1.967A5.013 5.013 0 0 0 7.097 12.6a5.012 5.012 0 0 0 1.967 3.282 5.013 5.013 0 0 0 3.712.93 5.012 5.012 0 0 0 3.282-1.967 5.013 5.013 0 0 0 .93-3.622zm-1.978.294a3.011 3.011 0 0 1-.558 2.227 3.01 3.01 0 0 1-1.969 1.18 3.011 3.011 0 0 1-2.227-.558 3.01 3.01 0 0 1-1.18-1.969 3.011 3.011 0 0 1 .558-2.227 3.01 3.01 0 0 1 1.969-1.18c.313-.046.615-.042.87-.002a3.01 3.01 0 0 1 1.818.986c.375.428.63.963.72 1.543zM17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            @valpococktailweek
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-2"
        aria-label="Menú"
      >
        <span
          className={`block w-[26px] h-[2px] bg-blanco transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-[26px] h-[2px] bg-blanco transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-[26px] h-[2px] bg-blanco transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-negro/95 backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-8 border-t border-white/5">
          <Link
            href="/#que-es"
            onClick={() => setOpen(false)}
            className="text-blanco no-underline text-sm font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            El evento
          </Link>
          <Link
            href="/bares"
            onClick={() => setOpen(false)}
            className="text-blanco no-underline text-sm font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Locales
          </Link>
          <Link
            href="/agenda"
            onClick={() => setOpen(false)}
            className="text-blanco no-underline text-sm font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Agenda
          </Link>
          <Link
            href="/auspiciadores"
            onClick={() => setOpen(false)}
            className="text-blanco no-underline text-sm font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Auspiciadores
          </Link>
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="text-blanco no-underline text-sm font-medium tracking-[0.15em] uppercase opacity-75 hover:opacity-100 hover:text-calipso transition-all"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}

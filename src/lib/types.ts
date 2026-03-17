export interface Bar {
  id: string;
  nombre: string;
  zona: string;
  descripcion: string;
  cocktail: string;
  direccion: string;
  horario: string;
  instagram: string;
  imagen: string;
  destacado: boolean;
}

export interface Auspiciador {
  id: string;
  nombre: string;
  tier: "principal" | "asociado" | "colaborador" | "institucional";
  sitioWeb: string;
  logo: string;
  descripcion: string;
}

export interface EventoAgenda {
  hora: string;
  nombre: string;
  lugar: string;
  descripcion: string;
}

export interface DiaAgenda {
  dia: string;
  fecha: string;
  titulo: string;
  eventos: EventoAgenda[];
}

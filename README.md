# Valpo Cocktail Week 2026

Sitio web oficial de la **Valpo Cocktail Week 2026**, el festival de coctelería de Valparaíso. Construido con Next.js 16, TypeScript, Tailwind CSS v4 y App Router.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Fuentes:** Bebas Neue + Space Grotesk (Google Fonts)
- **Deploy:** Vercel

## Inicio rápido

```bash
# Clonar repositorio
git clone https://github.com/kirkmacher/ValpoCW.git
cd ValpoCW

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

El sitio estará disponible en `http://localhost:3000`.

## Estructura del proyecto

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Home / Landing
│   ├── layout.tsx          # Layout global (navbar + footer)
│   ├── globals.css         # Estilos globales y design tokens
│   ├── bares/
│   │   ├── page.tsx        # Catálogo de bares
│   │   └── BaresFilter.tsx # Filtro client-side
│   ├── inscripcion/
│   │   ├── page.tsx        # Formulario de inscripción
│   │   └── InscripcionForm.tsx
│   ├── agenda/
│   │   └── page.tsx        # Agenda por día
│   ├── contacto/
│   │   ├── page.tsx        # Página de contacto
│   │   └── ContactForm.tsx
│   └── auspiciadores/
│       └── page.tsx        # Sponsors por tier
├── components/             # Componentes reutilizables
│   ├── Navbar.tsx          # Navegación fija
│   ├── Footer.tsx          # Pie de página
│   ├── Button.tsx          # Botón con 3 variantes
│   ├── BarCard.tsx         # Tarjeta de bar
│   ├── PageHero.tsx        # Hero reutilizable para subpáginas
│   ├── SectionReveal.tsx   # Animación de scroll reveal
│   └── CustomCursor.tsx    # Cursor personalizado
├── data/                   # ⭐ DATOS EDITABLES (CRUD)
│   ├── bares.json          # Lista de bares participantes
│   ├── auspiciadores.json  # Lista de auspiciadores
│   └── agenda.json         # Agenda de la semana
└── lib/
    └── types.ts            # Interfaces TypeScript
```

---

## CRUD: Cómo gestionar Bares y Auspiciadores

> **El sistema CRUD se realiza editando archivos JSON.** No hay base de datos ni panel admin. Los datos viven en `src/data/` y se renderizan estáticamente en el build.

### Bares (`src/data/bares.json`)

Cada bar es un objeto JSON con la siguiente estructura:

```json
{
  "id": "nombre-del-bar",
  "nombre": "Nombre del Bar",
  "zona": "Cerro Alegre",
  "descripcion": "Descripción breve del bar y su estilo.",
  "cocktail": "Nombre del Cóctel Especial",
  "direccion": "Dirección completa",
  "horario": "18:00 – 01:00",
  "instagram": "@handledelbar",
  "imagen": "/images/placeholder-bar.jpg",
  "destacado": true
}
```

#### Agregar un bar

1. Abrir `src/data/bares.json`
2. Agregar un nuevo objeto al array, **respetando todos los campos**:
   - `id`: slug único sin espacios ni tildes (ej: `"mi-nuevo-bar"`)
   - `nombre`: nombre real del bar
   - `zona`: ubicación (ej: `"Cerro Alegre"`, `"Plan · Puerto"`)
   - `descripcion`: texto breve (1-2 líneas)
   - `cocktail`: nombre del cóctel especial para la semana
   - `direccion`: dirección física
   - `horario`: horario durante la semana del evento
   - `instagram`: handle de Instagram
   - `imagen`: ruta a imagen (usar `"/images/placeholder-bar.jpg"` si no hay)
   - `destacado`: `true` si debe aparecer en la Home, `false` si solo en `/bares`

Ejemplo de agregar un bar:

```json
{
  "id": "bar-nuevo-ejemplo",
  "nombre": "Bar Nuevo Ejemplo",
  "zona": "Cerro Bellavista",
  "descripcion": "Bar temático con cócteles inspirados en el arte callejero.",
  "cocktail": "Mural Sour",
  "direccion": "Rudolph 100, Cerro Bellavista",
  "horario": "19:00 – 02:00",
  "instagram": "@barnuevoejemplo",
  "imagen": "/images/placeholder-bar.jpg",
  "destacado": false
}
```

#### Editar un bar

1. Buscar el bar por su `id` en `src/data/bares.json`
2. Modificar los campos que necesites
3. Guardar el archivo

#### Eliminar un bar

1. Buscar el bar por su `id` en `src/data/bares.json`
2. Eliminar el objeto completo (incluyendo las llaves `{ }`)
3. Asegurarse de que no quede una coma sobrante en el array
4. Guardar el archivo

---

### Auspiciadores (`src/data/auspiciadores.json`)

Cada auspiciador tiene la siguiente estructura:

```json
{
  "id": "nombre-auspiciador",
  "nombre": "Nombre del Auspiciador",
  "tier": "principal",
  "sitioWeb": "https://ejemplo.cl",
  "logo": "/images/placeholder-sponsor.png",
  "descripcion": "Descripción breve de la marca."
}
```

#### Tiers disponibles

| Tier           | Descripción                          | Posición en la página |
| -------------- | ------------------------------------ | --------------------- |
| `"principal"`  | Auspiciador principal, mayor tamaño  | Arriba, 2 columnas    |
| `"asociado"`   | Auspiciador asociado                 | Medio, 3 columnas     |
| `"colaborador"`| Colaborador del evento               | Abajo, 3 columnas     |
| `"institucional"` | Apoyo institucional (municipio, etc.) | Abajo, 3 columnas  |

#### Agregar un auspiciador

1. Abrir `src/data/auspiciadores.json`
2. Agregar un nuevo objeto al array:
   - `id`: slug único (ej: `"marca-nueva"`)
   - `nombre`: nombre de la marca
   - `tier`: uno de `"principal"`, `"asociado"`, `"colaborador"`, `"institucional"`
   - `sitioWeb`: URL del sitio web
   - `logo`: ruta a imagen del logo (usar `"/images/placeholder-sponsor.png"` si no hay)
   - `descripcion`: texto breve sobre la marca

Ejemplo:

```json
{
  "id": "gin-pacifico",
  "nombre": "Gin Pacífico",
  "tier": "asociado",
  "sitioWeb": "https://ginpacifico.cl",
  "logo": "/images/placeholder-sponsor.png",
  "descripcion": "Gin artesanal destilado con botánicos del Pacífico chileno."
}
```

#### Editar un auspiciador

1. Buscar por `id` en `src/data/auspiciadores.json`
2. Modificar los campos necesarios
3. Guardar

#### Eliminar un auspiciador

1. Buscar por `id` en `src/data/auspiciadores.json`
2. Eliminar el objeto completo
3. Verificar que no queden comas sobrantes
4. Guardar

---

### Agenda (`src/data/agenda.json`)

La agenda se organiza por día. Cada día tiene eventos:

```json
{
  "dia": "Lunes 9",
  "fecha": "2026-06-09",
  "titulo": "Inauguración",
  "eventos": [
    {
      "hora": "19:00",
      "nombre": "Ceremonia de apertura",
      "lugar": "Plaza Sotomayor",
      "descripcion": "Bienvenida oficial con cóctel de bienvenida."
    }
  ]
}
```

Para agregar/editar/eliminar eventos: editar `src/data/agenda.json` siguiendo la misma estructura.

---

### Imágenes

Para agregar imágenes reales de bares o logos de auspiciadores:

1. Colocar las imágenes en `public/images/`
2. Referenciar la ruta en el JSON como `"/images/nombre-archivo.jpg"`
3. Formatos recomendados: `.jpg` o `.webp` para fotos, `.png` o `.svg` para logos
4. Tamaño sugerido: 800x1000px para fotos de bares, 400x200px para logos

---

## Deploy en Vercel

### Desde el dashboard de Vercel

1. Ir a [vercel.com](https://vercel.com) y conectar tu cuenta de GitHub
2. Importar el repositorio `ValpoCW`
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Click en "Deploy"
5. El sitio estará disponible en `https://valpo-cw.vercel.app` (o dominio personalizado)

### Desde CLI

```bash
npm i -g vercel
vercel
```

### Actualizar contenido y re-desplegar

1. Editar los archivos JSON en `src/data/`
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Actualizar bares / auspiciadores"
   git push
   ```
3. Vercel re-despliega automáticamente

---

## Paleta de colores

| Color    | Hex       | Uso                        |
| -------- | --------- | -------------------------- |
| Calipso  | `#00e5cc` | Color primario, links      |
| Magenta  | `#ff2d78` | CTAs, acentos              |
| Amarillo | `#ffe400` | Badges, stats, highlights  |
| Violeta  | `#8b00ff` | Decorativo                 |
| Negro    | `#080810` | Fondo principal            |
| Blanco   | `#f0f0f8` | Texto principal            |
| Gris     | `#1a1a2e` | Fondos de sección/tarjeta  |

## Tipografía

- **Display/Títulos:** Bebas Neue (uppercase)
- **Cuerpo:** Space Grotesk (300, 400, 500, 700)

---

## Licencia

© 2026 ACOVAL – Asociación de Cocteleros de Valparaíso. Todos los derechos reservados.

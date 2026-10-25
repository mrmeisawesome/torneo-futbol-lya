# Torneo de Fútbol

Aplicación web para llevar el control de un torneo de fútbol aficionado: registro de partidos, historial con filtro por equipo y tabla de posiciones que se calcula automáticamente. Proyecto hecho para el curso de Desarrollo Web de Ingeniería de Sistemas.

## Funcionalidades

- Lista de equipos con escudo, nombre e id único.
- Registro de partidos con validaciones (equipos distintos y marcadores enteros mayores o iguales a 0).
- Último partido registrado destacado en la parte superior.
- Historial de partidos con filtro por equipo y opción de eliminar.
- Tabla de posiciones que se actualiza al registrar o eliminar un partido.

## Tecnologías

- React (componentes funcionales y el hook `useState`)
- Vite
- JavaScript
- CSS

## Requisitos

- Node.js 18 o superior
- npm

## Cómo ejecutarlo

```
git clone https://github.com/USUARIO/torneo-futbol.git
cd torneo-futbol
npm install
npm run dev
```

Abrir `http://localhost:5173` en el navegador.

## Estructura de carpetas

```
torneo-futbol/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── data/
    │   └── equipos.js
    └── components/
        ├── Escudo.jsx
        ├── ListaEquipos.jsx
        ├── FormularioPartido.jsx
        ├── Partido.jsx
        ├── HistorialPartidos.jsx
        └── TablaPosiciones.jsx
```

## Cómo se calcula la tabla

Cada victoria vale 3 puntos, cada empate 1 punto y cada derrota 0 puntos. Para cada equipo se suman partidos jugados (PJ), ganados (PG), empatados (PE), perdidos (PP), goles a favor (GF) y goles en contra (GC). La diferencia de goles (DG) es GF menos GC.

Los equipos se ordenan por: puntos, diferencia de goles y goles a favor.

## Nota

Los datos viven en la memoria del navegador: al recargar la página los partidos registrados se pierden.

## Autor

Sebastian Martinez

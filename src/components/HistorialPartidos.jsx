import { useState } from "react";
import Partido from "./Partido";

// Historial con filtro por equipo
function HistorialPartidos({ partidos, equipos, onEliminar }) {
  const [filtro, setFiltro] = useState("todos");

  let partidosFiltrados = partidos;
  if (filtro !== "todos") {
    partidosFiltrados = partidos.filter(
      (p) => p.localId === Number(filtro) || p.visitanteId === Number(filtro)
    );
  }

  return (
    <section>
      <h2>Historial de partidos</h2>

      <select
        className="filtro-historial"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="todos">Todos los equipos</option>
        {equipos.map((equipo) => (
          <option key={equipo.id} value={equipo.id}>
            {equipo.nombre}
          </option>
        ))}
      </select>

      {partidos.length === 0 && (
        <p className="mensaje-vacio">Todavía no hay partidos registrados.</p>
      )}

      {partidos.length > 0 && partidosFiltrados.length === 0 && (
        <p className="mensaje-vacio">Este equipo no tiene partidos registrados.</p>
      )}

      {partidosFiltrados.map((partido) => (
        <Partido
          key={partido.id}
          partido={partido}
          equipos={equipos}
          onEliminar={onEliminar}
        />
      ))}
    </section>
  );
}

export default HistorialPartidos;

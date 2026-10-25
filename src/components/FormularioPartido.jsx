import { useState } from "react";

// Formulario controlado para registrar un partido
function FormularioPartido({ equipos, onAgregar }) {
  const [localId, setLocalId] = useState("");
  const [visitanteId, setVisitanteId] = useState("");
  const [golesLocal, setGolesLocal] = useState("");
  const [golesVisitante, setGolesVisitante] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (localId === "" || visitanteId === "") {
      setError("Selecciona el equipo local y el visitante");
      return;
    }
    if (localId === visitanteId) {
      setError("El equipo local y el visitante no pueden ser el mismo");
      return;
    }
    if (golesLocal.trim() === "" || golesVisitante.trim() === "") {
      setError("Escribe el marcador de los dos equipos");
      return;
    }

    const gl = Number(golesLocal);
    const gv = Number(golesVisitante);
    if (!Number.isInteger(gl) || !Number.isInteger(gv) || gl < 0 || gv < 0) {
      setError("Los marcadores deben ser números enteros mayores o iguales a 0");
      return;
    }

    onAgregar({
      localId: Number(localId),
      visitanteId: Number(visitanteId),
      golesLocal: gl,
      golesVisitante: gv,
    });

    setLocalId("");
    setVisitanteId("");
    setGolesLocal("");
    setGolesVisitante("");
    setError("");
  }

  return (
    <section>
      <h2>Registrar partido</h2>
      <form className="formulario" onSubmit={handleSubmit} noValidate>
        <label>
          Equipo local
          <select value={localId} onChange={(e) => setLocalId(e.target.value)}>
            <option value="">Selecciona un equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))}
          </select>
        </label>
        <label>
          Equipo visitante
          <select value={visitanteId} onChange={(e) => setVisitanteId(e.target.value)}>
            <option value="">Selecciona un equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))}
          </select>
        </label>

        <label>
          Goles del local
          <input type="number" min="0" step="1"
            value={golesLocal} onChange={(e) => setGolesLocal(e.target.value)} />
        </label>
        <label>
          Goles del visitante
          <input type="number" min="0" step="1"
            value={golesVisitante} onChange={(e) => setGolesVisitante(e.target.value)} />
        </label>

        <button type="submit">Registrar partido</button>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}

export default FormularioPartido;

import Escudo from "./Escudo";

// Una fila con los dos equipos y el marcador
function Partido({ partido, equipos, onEliminar }) {
  const local = equipos.find((e) => e.id === partido.localId);
  const visitante = equipos.find((e) => e.id === partido.visitanteId);

  return (
    <div className="partido">
      <div className="lado-partido">
        <Escudo equipo={local} chico />
        <span>{local.nombre}</span>
      </div>
      <span className="marcador">
        {partido.golesLocal} - {partido.golesVisitante}
      </span>
      <div className="lado-partido">
        <Escudo equipo={visitante} chico />
        <span>{visitante.nombre}</span>
      </div>
      {onEliminar && (
        <button onClick={() => onEliminar(partido.id)}>Eliminar</button>
      )}
    </div>
  );
}

export default Partido;

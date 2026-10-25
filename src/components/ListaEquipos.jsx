import Escudo from "./Escudo";

// Tarjetas con los seis equipos del torneo
function ListaEquipos({ equipos }) {
  return (
    <section>
      <h2>Equipos</h2>
      <div className="lista-equipos">
        {equipos.map((equipo) => (
          <div key={equipo.id} className="tarjeta-equipo">
            <Escudo equipo={equipo} />
            <div>
              <p className="nombre-equipo">{equipo.nombre}</p>
              <span className="id-equipo">#{equipo.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaEquipos;

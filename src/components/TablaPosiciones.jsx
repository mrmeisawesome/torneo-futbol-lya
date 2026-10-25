import Escudo from "./Escudo";

// Tabla de posiciones calculada a partir de los partidos
function TablaPosiciones({ equipos, partidos }) {
  const tabla = equipos.map((equipo) => {
    const susPartidos = partidos.filter(
      (p) => p.localId === equipo.id || p.visitanteId === equipo.id
    );

    const stats = susPartidos.reduce(
      (acc, p) => {
        const esLocal = p.localId === equipo.id;
        const golesFavor = esLocal ? p.golesLocal : p.golesVisitante;
        const golesContra = esLocal ? p.golesVisitante : p.golesLocal;

        acc.pj += 1;
        acc.gf += golesFavor;
        acc.gc += golesContra;
        if (golesFavor > golesContra) acc.pg += 1;
        else if (golesFavor === golesContra) acc.pe += 1;
        else acc.pp += 1;
        return acc;
      },
      { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0 }
    );

    return {
      ...equipo,
      ...stats,
      dg: stats.gf - stats.gc,
      pts: stats.pg * 3 + stats.pe,
    };
  });

  tabla.sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf);

  return (
    <section>
      <h2>Tabla de posiciones</h2>

      {partidos.length === 0 && (
        <p className="mensaje-vacio">
          Registra un partido para ver la tabla actualizada.
        </p>
      )}

      <div className="contenedor-tabla">
        <table className="tabla">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((fila, i) => (
              <tr key={fila.id}>
                <td>{i + 1}</td>
                <td className="celda-equipo">
                  <Escudo equipo={fila} chico />
                  {fila.nombre}
                </td>
                <td>{fila.pj}</td>
                <td>{fila.pg}</td>
                <td>{fila.pe}</td>
                <td>{fila.pp}</td>
                <td>{fila.gf}</td>
                <td>{fila.gc}</td>
                <td>{fila.dg}</td>
                <td className="celda-puntos">{fila.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TablaPosiciones;

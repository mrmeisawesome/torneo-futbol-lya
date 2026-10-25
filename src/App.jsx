import { useState } from "react";
import { equiposIniciales } from "./data/equipos";
import ListaEquipos from "./components/ListaEquipos";
import FormularioPartido from "./components/FormularioPartido";
import Partido from "./components/Partido";
import TablaPosiciones from "./components/TablaPosiciones";
import HistorialPartidos from "./components/HistorialPartidos";
import "./App.css";

function App() {
  const [equipos] = useState(equiposIniciales);
  const [partidos, setPartidos] = useState([]);

  function agregarPartido(nuevo) {
    setPartidos([...partidos, { id: Date.now(), ...nuevo }]);
  }

  function eliminarPartido(id) {
    setPartidos(partidos.filter((p) => p.id !== id));
  }

  const ultimoPartido = partidos[partidos.length - 1];

  return (
    <main className="contenedor">
      <h1>Torneo de Fútbol</h1>

      <ListaEquipos equipos={equipos} />
      <FormularioPartido equipos={equipos} onAgregar={agregarPartido} />

      {ultimoPartido && (
        <section>
          <h2>Último partido registrado</h2>
          <Partido partido={ultimoPartido} equipos={equipos} />
        </section>
      )}

      <TablaPosiciones equipos={equipos} partidos={partidos} />
      <HistorialPartidos
        partidos={partidos}
        equipos={equipos}
        onEliminar={eliminarPartido}
      />
    </main>
  );
}

export default App;

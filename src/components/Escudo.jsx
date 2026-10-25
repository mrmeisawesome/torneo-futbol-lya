// Escudo hecho con CSS, en dos tamaños
function Escudo({ equipo, chico }) {
  const estilo = { backgroundColor: equipo.color };

  return (
    <div
      className={chico ? "escudo escudo-chico" : "escudo"}
      style={estilo}
    >
      {equipo.siglas}
    </div>
  );
}

export default Escudo;

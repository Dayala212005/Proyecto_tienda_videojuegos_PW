import { Link } from "react-router-dom";

function Juego({ id, imagen, alt, descripcion }) {
  return (
    <div className="juego">
      {/* ✅ click en imagen -> Detalle */}
      <Link to={`/juego/${id}`} style={{ textDecoration: "none" }}>
        <img src={imagen} alt={alt} width="100" />
      </Link>

      <p>{descripcion}</p>

      {/* ✅ botón descarga -> Descarga */}
      <Link to={`/descarga/${id}`} className="checkout-btn">
        Descargar
      </Link>
    </div>
  );
}

export default Juego;

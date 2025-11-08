import { Link } from "react-router-dom";

function Juego({ id, imagen, alt, descripcion }) {
  return (
    <div className="juego">
      <Link to={`/descarga/${id}`} style={{ textDecoration: "none" }}>
        <img src={imagen} alt={alt} width="100" />
      </Link>
      <p>{descripcion}</p>
      <Link to={`/descarga/${id}`} className="checkout-btn">Descargar</Link>
    </div>
  );
}

export default Juego;

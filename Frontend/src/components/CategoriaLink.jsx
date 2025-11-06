import { Link } from "react-router-dom";

function CategoriaLink({ nombre, imagen }) {
  return (
    <Link to={`/categoria/${nombre}`} className="categoria-link">
      <div className="categoria">
        <img src={imagen} alt={nombre} width="100" />
        <span className="nombre">{nombre}</span>
      </div>
    </Link>
  );
}

export default CategoriaLink;

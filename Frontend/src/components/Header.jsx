import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="d-flex align-items-center">
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-grow-1">
        <div className="container-fluid">
          <Link className="navbar-brand me-3" to="/">
        <img src="/imagenes/Logo2.png" alt="Mi Logo" width="60" height="auto" />
      </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {/* 🔹 Nuevo botón Favoritos que lleva a /descarga */}
              <li className="nav-item">
                <Link className="btn btn-outline-warning ms-2" to="/descarga">
                  ⭐ Favoritos
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cuenta
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Registrarse
                    </Link>
                  </li>
                </ul>

              </li>
            </ul>

            <div className="d-flex" style={{ alignItems: "center" }}>
              <SearchBar />
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;


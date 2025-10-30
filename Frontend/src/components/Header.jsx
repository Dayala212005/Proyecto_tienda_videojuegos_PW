function Header() {
  return (
    <div className="d-flex align-items-center">
    <a className="navbar-brand me-3" href="#">
          <img src="/imagenes/Logo2.png" alt="Mi Logo" width="120" height="auto" />
        </a>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-grow-1">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Noticias</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cuenta
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Iniciar Sesión</a></li>
                <li><a className="dropdown-item" href="#">Registrarse</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar Juego" aria-label="Search" />
            <button className="btn btn-warning" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;

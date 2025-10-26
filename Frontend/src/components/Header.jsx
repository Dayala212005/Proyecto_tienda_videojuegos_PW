function Header() {
  return (
    <header id="header">
      <nav id="nav_bar">
        <img id="logo" src="/imagenes/logo.jpg" alt="Logo de la tienda" width="100" />
        <a id="Noticias" href="#">Noticias</a>
        <a id="mas_vendidos" href="#">Lo más vendido</a>
        <input id="buscar_juegos" type="text" placeholder="Buscar juegos..." />
      </nav>
    </header>
  );
}

export default Header;

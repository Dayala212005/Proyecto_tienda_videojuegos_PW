import Header from "../components/Header";
import Footer from "../components/Footer";

function DetalleJuego() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="detalle-juego">
          <img src="/imagenes/portada_juego.jpg" alt="Portada del juego" id="portada-juego" />
          <div id="info-juego">
            <h1 id="titulo-juego">Nombre del Juego</h1>
            <p><b>Fecha de lanzamiento:</b> 21 Septiembre 2025</p>
            <p><b>Desarrollador:</b> Shifu</p>
            <p><b>Género:</b> Acción, Aventura</p>
            <p><b>Etiquetas:</b> Multijugador, ficción</p>
            <p><b>Precio:</b> $30</p>
            <div id="botones-compra">
              <button>Comprar ahora</button>
              <button>Añadir al carrito</button>
              <button>Añadir a favoritos</button>
            </div>
          </div>
        </section>

        <section id="descripcion-juego">
          <h2 id="titulo-descripcion">Descripción del juego</h2>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </section>

        <section id="requisitos-juego">
          <h2 id="titulo-sistema">Requisitos del sistema</h2>
          <div id="boton-sistema">
            <button id="Windows">Windows</button>
            <button id="mac">macOS</button>
            <button id="linux">SteamOS + Linux</button>
          </div>
          <div id="contenedor-requisitos">
            <div id="minimo">
              <h3>Mínimo:</h3>
              <ul>
                <li><b>SO:</b> Windows 10 version 21H1 o superior</li>
                <li><b>Procesador:</b> Intel Core i3-3240, AMD FX-4300</li>
                <li><b>Memoria:</b> 4 GB RAM</li>
              </ul>
            </div>
            <div id="recomendado">
              <h3>Recomendado:</h3>
              <ul>
                <li><b>SO:</b> Windows 10 version 21H1 o superior</li>
                <li><b>Procesador:</b> Intel Core i5-3470</li>
                <li><b>Memoria:</b> 8 GB RAM</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="logros">
          <h2 id="titulo-logro">Logros del juego</h2>
          <ul>
            <li>
              <img src="/imagenes/logro.png" alt="Icono logro 1" />
              <b>Primer paso:</b> Completa el tutorial.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default DetalleJuego;

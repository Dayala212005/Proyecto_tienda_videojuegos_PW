import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

import Juego from "../components/Juego";
import Categoria from "../components/Categoria";
import CarouselDestacados from "../components/carruseles/CarouselDestacados.jsx";
import CarouselNuevosLanzamientos from "../components/carruseles/CarouselNuevosLanzamientos.jsx";
import CarouselOfertas from "../components/carruseles/CarouselOfertas.jsx";
import "../styles/style.css";
import Fondo from "../components/fondos/FondoPrincipal.jsx"; 
import CategoriaLink from "../components/CategoriaLink";


function Home() {
  return (
    <>

      <Header />

      <main>
        <br />
        <br />
        <div className="animated-gradient-text">
          <span className="text-content">
            Más que juegos, experiencias épicas.
            <br />
            <br />
          </span>
        </div>

        <section id="destacados">
          <h2>Destacados</h2>
          <CarouselDestacados />
          <br />
        </section>

        <section id="ofertas">
          <h2>Ofertas</h2>
          <CarouselOfertas />
          <br />
        </section>

        <section id="nuevos">
          <h2>Nuevos lanzamientos</h2>
          <CarouselNuevosLanzamientos />
          <br />
        </section>


        <section className="categorias">
          <h2 id="Titulo_categoria">Categorías populares</h2>
          <div className="categorias-grid">
            <CategoriaLink nombre="Acción" imagen="/imagenes/shooter.jpg" />
            <CategoriaLink nombre="Terror" imagen="/imagenes/horror.jpg" />
            <CategoriaLink nombre="Aventura" imagen="/imagenes/aventura.png" />
            <CategoriaLink nombre="Deportes" imagen="/imagenes/sports.jpg" />
            <CategoriaLink nombre="Simulación" imagen="/imagenes/simulacion.jpg" />
            <CategoriaLink nombre="Rol_MMORPG" imagen="/imagenes/rol.jpg" />
            <CategoriaLink nombre="Puzzle" imagen="/imagenes/puzzel.webp" />
            <CategoriaLink nombre="Estrategia" imagen="/imagenes/estrategia.webp" />
            <CategoriaLink nombre="Multijugador" imagen="/imagenes/sports2.png" />
            <CategoriaLink nombre="Indie" imagen="/imagenes/idie.webp" />
          </div>
        </section>

      </main>
      <Footer />
      <Fondo />
    </>
  );
}

export default Home;
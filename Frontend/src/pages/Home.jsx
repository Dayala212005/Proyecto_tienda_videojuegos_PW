import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import Categoria from "../components/Categoria";
import CarouselDestacados from "../components/CarouselDestacados";
import CarouselNuevosLanzamientos from "../components/CarouselNuevosLanzamientos.jsx";
import CarouselOfertas from "../components/CarouselOfertas.jsx";
import "../styles/style.css";
import Fondo from "../components/fondo.jsx";
import CategoriaLink from "../components/CategoriaLink";


function Home() {
  return (
    <>

      <Header />

      <main>
        
        <div className="animated-gradient-text">
          <span className="text-content">
            Más que juegos, experiencias épicas.
          </span>
        </div>

        <section id="destacados">
          <h2>Destacados</h2>
          {/* <Juego imagen="/imagenes/logo.jpg" alt="Juego destacado" descripcion="Descripción breve del juego destacado" /> */}
          {/* <Juego imagen="/imagenes/logo.jpg" alt="Juego destacado" descripcion="Descripción breve del juego destacado" /> */}
          <CarouselDestacados />
        </section>

        <section id="ofertas">
          <h2>Ofertas</h2>
          {/*<Juego imagen="/imagenes/logo.jpg" alt="Juego en oferta" descripcion="Descripción breve del juego en oferta" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego en oferta" descripcion="Descripción breve del juego en oferta" />*/}
          <CarouselOfertas />
        </section>

        <section id="nuevos">
          <h2>Nuevos lanzamientos</h2>
          {/*<Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />*/}
          <CarouselNuevosLanzamientos />
        </section>


        <section className="categorias">
          <h2 id="Titulo_categoria">Categorías populares</h2>
          <div className="categorias-grid">
            <CategoriaLink nombre="Acción" imagen="/imagenes/shooter.jpg" />
            <CategoriaLink nombre="Terror" imagen="/imagenes/horror.jpg" />
            <CategoriaLink nombre="Aventura" imagen="/imagenes/aventura.png" />
            <CategoriaLink nombre="Deportes" imagen="/imagenes/sports.jpg" />
            <CategoriaLink nombre="Simulación" imagen="/imagenes/simulacion.jpg" />
            <CategoriaLink nombre="Rol/MMORPG" imagen="/imagenes/rol.jpg" />
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

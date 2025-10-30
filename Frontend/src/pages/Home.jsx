import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import Categoria from "../components/Categoria";
import CarouselDestacados from "../components/CarouselDestacados";
import "../styles/style.css";
import Fondo from "../components/fondo.jsx";


function Home() {
  return (
    <>

      <Header />

      <main>
        <Fondo />
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
          <CarouselDestacados />
        </section>

        <section id="nuevos">
          <h2>Nuevos lanzamientos</h2>
          {/*<Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />*/}
          <CarouselDestacados />
        </section>


        <section className="categorias">
          <h2 id="Titulo_categoria">Categorías populares</h2>
          <div className="categorias-grid">
            <Categoria nombre="Acción" imagen="/imagenes/shooter.jpg" />
            <Categoria nombre="Terror" imagen="/imagenes/horror.jpg" />
            <Categoria nombre="Aventura" imagen="/imagenes/aventura.png" />
            <Categoria nombre="Deportes" imagen="/imagenes/sports.jpg" />
            <Categoria nombre="Simulación" imagen="/imagenes/simulacion.jpg" />
            <Categoria nombre="Rol/MMORPG" imagen="/imagenes/rol.jpg" />
            <Categoria nombre="Puzzle" imagen="/imagenes/puzzel.webp" />
            <Categoria nombre="Estrategia" imagen="/imagenes/estrategia.webp" />
            <Categoria nombre="Multijugador" imagen="/imagenes/sports2.png" />
            <Categoria nombre="Indie" imagen="/imagenes/idie.webp" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Home;

import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import Categoria from "../components/Categoria";
import CarouselDestacados from "../components/CarouselDestacados";

function Home() {
  return (
    <>
      <Header />
      <main>
        <CarouselDestacados />
        <h1 id="Titulo">Titulo</h1>

        <section id="destacados">
          <h2>Destacados</h2>
          <Juego imagen="/imagenes/logo.jpg" alt="Juego destacado" descripcion="Descripción breve del juego destacado" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego destacado" descripcion="Descripción breve del juego destacado" />
        </section>

        <section id="ofertas">
          <h2>Ofertas</h2>
          <Juego imagen="/imagenes/logo.jpg" alt="Juego en oferta" descripcion="Descripción breve del juego en oferta" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego en oferta" descripcion="Descripción breve del juego en oferta" />
        </section>

        <section id="nuevos">
          <h2>Nuevos lanzamientos</h2>
          <Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />
          <Juego imagen="/imagenes/logo.jpg" alt="Juego nuevo" descripcion="Descripción breve del juego nuevo" />
        </section>
        

        <section className="categorias">
          <h2 id="Titulo_categoria">Categorías populares</h2>
          <div className="categorias-grid">
            <Categoria nombre="Acción" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Terror" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Aventura" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Deportes" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Simulación" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Rol" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Puzzle" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Estrategia" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Multijugador" imagen="/imagenes/logo.jpg" />
            <Categoria nombre="Indie" imagen="/imagenes/logo.jpg" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Home;

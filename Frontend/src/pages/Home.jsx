import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import Categoria from "../components/Categoria";
import "../styles/style.css";

function Home() {
  return (
    <>
      <Header />
      <main>
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
            {["Acción","Terror","Aventura","Deportes","Simulación","Rol","Puzzle","Estrategia","Multijugador","Indie"].map(nombre => (
              <Categoria key={nombre} nombre={nombre} imagen="/imagenes/logo.jpg" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

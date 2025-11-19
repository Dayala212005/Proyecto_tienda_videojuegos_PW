import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import "../styles/style.css";
import "../styles/styles_CategoriaPage.css"

function CategoriaPage() {
  const { nombre } = useParams();
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    const obtenerJuegos = async () => {
      try {
        setCargando(true);

        const categoriaAPI = {
          Terror: "horror",
          Acción: "shooter",
          Aventura: "fantasy",
          Deportes: "sports",
          Estrategia: "strategy",
          Simulación: "first-person",
          Multijugador: "pvp",
          Rol_MMORPG: "mmo",
          Indie: "anime",
          Puzzle: "card"
        };

        const categoria = categoriaAPI[nombre] || nombre.toLowerCase();

        const response = await fetch(`http://localhost:4000/api/games/category/${categoria}`);
        if (!response.ok) throw new Error("Error al obtener los juegos");

        const data = await response.json();
        setJuegos(data);
      } catch (error) {
        console.error("Error al obtener juegos:", error);
        alert("No se pudieron cargar los juegos. Revisa la consola.");
      } finally {
        setCargando(false);
      }
    };

    obtenerJuegos();
  }, [nombre]);

  return (
    <>
      <Header />
      <main>
        <h2 className="titulo-categoria">Juegos de {nombre}</h2>

        {cargando ? (
          <p>Cargando juegos...</p>
        ) : juegos.length > 0 ? (
          <div className="juegos-grid">
            {juegos.map((juego) => (
              <Juego
                id={juego.id}
                imagen={juego.thumbnail}
                alt={juego.title}
                descripcion={juego.title}
              />
            ))}
          </div>
        ) : (
          <p>No hay juegos disponibles en esta categoría.</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default CategoriaPage;




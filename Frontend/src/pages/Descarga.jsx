import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/fondo";
import "../styles/styles_compra.css";

export default function Descarga() {
  // 🔹 ID del usuario (por ahora simulado)
  const userId = 1;

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavoritos() {
      try {
        // 1️⃣ Obtener IDs favoritos del usuario
        const favRes = await fetch(`http://localhost:4000/api/favoritos/${userId}`);
        const favoritos = await favRes.json(); // Ej: [540, 521, 452]

        // 2️⃣ Si no hay favoritos, salimos
        if (!favoritos.length) {
          setGames([]);
          setLoading(false);
          return;
        }

        // 3️⃣ Obtener detalles de cada juego favorito desde tu API
        const gamePromises = favoritos.map(async (id) => {
          const res = await fetch(`http://localhost:4000/api/game/${id}`);
          return res.json();
        });

        const gameData = await Promise.all(gamePromises);
        setGames(gameData);
      } catch (e) {
        console.error("Error al cargar favoritos", e);
      } finally {
        setLoading(false);
      }
    }

    loadFavoritos();
  }, []);

  if (loading) return <p style={{ textAlign: "center", color: "#fff" }}>Cargando tus juegos...</p>;

  if (!games.length)
    return (
      <>
        <Header />
        <main>
          <Fondo />
          <h1 id="Titulo">Tus Juegos Favoritos</h1>
          <p style={{ textAlign: "center", color: "#ccc" }}>Aún no tienes juegos favoritos.</p>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <Fondo />
      <Header />

      <main>
        <h1 id="Titulo">Tus Juegos Favoritos</h1>

        <div className="cart-container">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/juego/${game.id}`}
              className="cart-preview"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={game.thumbnail} alt={game.title} />
              <div className="cart-details">
                <h3>{game.title}</h3>
                <p className="game-meta">
                  {game.genre} • {game.platform}
                </p>
                <div className="cart-actions">
                  <span className="checkout-btn">Ver Detalle</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

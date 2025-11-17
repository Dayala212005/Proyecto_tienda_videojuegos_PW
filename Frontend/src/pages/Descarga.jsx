import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/fondo";
import "../styles/styles_compra.css";

export default function Descarga() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavoritos() {
      const token = localStorage.getItem("token");
      if (!token) {
        // ✅ Redirige sin alert
        navigate("/login", { state: { message: "Debes iniciar sesión para ver tus favoritos" } });
        return;
      }

      try {
        const favRes = await fetch(`http://localhost:4000/api/favoritos/1`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const favoritos = await favRes.json();
        setGames(favoritos);
      } catch (e) {
        console.error("Error al cargar favoritos", e);
      } finally {
        setLoading(false);
      }
    }

    loadFavoritos();
  }, [navigate]);

  if (loading) return <p style={{ textAlign: "center", color: "#fff" }}>Cargando tus juegos...</p>;

  if (!games.length)
    return (
      <>
        <Header />
        <main>
          
          <h1 id="Titulo">Tus Juegos Favoritos</h1>
          <p style={{ textAlign: "center", color: "#ccc" }}>Aún no tienes juegos favoritos.</p>
        </main>
        <Fondo />
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/fondo";            
import "../styles/styles_compra.css";

export default function Descarga() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`http://localhost:4000/api/game/${id}`);
        const data = await res.json();
        setGame(data);
      } catch (e) {
        console.error("Error al cargar juego", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", color: "#fff" }}>Cargando…</p>;
  if (!game || !game.id) return <p style={{ textAlign: "center", color: "salmon" }}>Juego no encontrado.</p>;

  const title = game.title || "Juego";
  const thumb = game.thumbnail;
  const desc  = game.description || game.short_description || "Sin descripción disponible.";
  const url   = game.game_url || "#";

  return (
    <>
      <Fondo />
      <Header />
      <main>
        <h1 id="Titulo">{"Información del juego"}</h1>

        <div className="cart-container">
          <div className="cart-preview">
            <img src={thumb} alt={title} />
            <div className="cart-details">
              <h3>{title}</h3>
              <p className="game-meta">
                {game.genre} • {game.platform}
              </p>
              <div className="cart-actions">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="checkout-btn"
                >
                  Descargar
                </a>
              </div>
            </div>
          </div>

          <div className="cart-checkout">
            <p className="total">
              Publicado por: <strong>{game.publisher || "N/D"}</strong>
            </p>
            <p className="note">
              Lanzamiento: {game.release_date || "N/D"}
            </p>
            <div className="desc-box">
              {desc}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

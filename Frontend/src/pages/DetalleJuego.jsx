import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/fondo.jsx"; // ✅ fondo galaxia como en Home
import "../styles/styles_juegos.css";

function DetalleJuego() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeShot, setActiveShot] = useState(0);

  // Modal fullscreen para screenshots
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch(`http://localhost:4000/api/game/${id}`);
        const data = await res.json();
        if (alive) {
          setGame(data);
          setLoading(false);
        }
      } catch (e) {
        console.error(e);
        if (alive) setLoading(false);
      }
    }
    load();
    return () => { alive = false; };
  }, [id]);

  const screenshots = game?.screenshots || [];
  const mainShot = useMemo(
    () => (screenshots[activeShot]?.image || game?.thumbnail || ""),
    [screenshots, activeShot, game]
  );

  if (loading) {
    return (
      <>
        <Header />
        <main id="main" className="page-with-bg">
          <Fondo />
          <div className="bg-overlay" />
          <p style={{ padding: 24, position: "relative", zIndex: 1 }}>Cargando juego...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!game) {
    return (
      <>
        <Header />
        <main id="main" className="page-with-bg">
          <Fondo />
          <div className="bg-overlay" />
          <p style={{ padding: 24, position: "relative", zIndex: 1 }}>No se encontró el juego.</p>
        </main>
        <Footer />
      </>
    );
  }

  const req = game.minimum_system_requirements || {};
  const tags = (game.genre ? [game.genre] : [])
    .concat(game.platform ? [game.platform] : [])
    .concat((game.tags || []).map(String));

  return (
    <>
    <Fondo />
      <Header />
      {/* ✅ mismo patrón que Home: Fondo + overlay detrás del contenido */}
      <main id="main" className="page-with-bg">
        <div className="bg-overlay" />

        <section id="detalle-juego" className="detalle-layout content-foreground">
          {/* Columna izquierda: galería */}
          <div className="detalle-media">
            <div
              className="detalle-hero"
              onClick={() => setModalOpen(true)}
              style={{ cursor: mainShot ? "zoom-in" : "default" }}
            >
              {mainShot ? (
                <img src={mainShot} alt={game.title} className="detalle-hero-img" />
              ) : (
                <div className="detalle-hero-placeholder">Sin imagen</div>
              )}
            </div>

            {screenshots.length > 0 && (
              <div className="detalle-thumbs">
                {screenshots.map((s, i) => (
                  <button
                    key={s.id || i}
                    className={`thumb-btn ${i === activeShot ? "active" : ""}`}
                    onClick={() => setActiveShot(i)}
                    aria-label={`Screenshot ${i + 1}`}
                  >
                    <img src={s.image} alt={`Screenshot ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="detalle-desc">
              <h1 className="detalle-title">{game.title}</h1>
              <p className="detalle-short">{game.short_description}</p>
              {game.description && (
                <div
                  className="detalle-long"
                  dangerouslySetInnerHTML={{ __html: game.description }}
                />
              )}
            </div>
          </div>

          {/* Columna derecha */}
          <aside className="detalle-sidebar">
            <div className="panel panel-info">
              <div className="row-item"><span className="label">Lanzamiento:</span><span>{game.release_date || "N/D"}</span></div>
              <div className="row-item"><span className="label">Desarrollador:</span><span>{game.developer || "N/D"}</span></div>
              <div className="row-item"><span className="label">Editor:</span><span>{game.publisher || "N/D"}</span></div>
              <div className="row-item"><span className="label">Plataforma:</span><span>{game.platform || "N/D"}</span></div>
              <div className="row-item"><span className="label">Género:</span><span>{game.genre || "N/D"}</span></div>
            </div>

            {tags.length > 0 && (
              <div className="panel panel-tags">
                <h3>Etiquetas</h3>
                <div className="tags-wrap">
                  {tags.map((t, i) => (
                    <span key={`${t}-${i}`} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Solo botón Descargar */}
            <div className="panel panel-cta">
              <Link to={`/descarga/${game.id}`} className="checkout-btn full">
                Descargar gratis
              </Link>
            </div>

            <div className="panel panel-req">
              <h3>Requisitos mínimos</h3>
              <ul>
                <li><b>OS:</b> {req.os || "N/D"}</li>
                <li><b>CPU:</b> {req.processor || "N/D"}</li>
                <li><b>RAM:</b> {req.memory || "N/D"}</li>
                <li><b>GPU:</b> {req.graphics || "N/D"}</li>
                <li><b>Almacenamiento:</b> {req.storage || "N/D"}</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <Footer />

      {/* Modal fullscreen */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <img src={mainShot} alt="Vista ampliada" className="modal-fullscreen-img" />
        </div>
      )}
    </>
  );
}

export default DetalleJuego;

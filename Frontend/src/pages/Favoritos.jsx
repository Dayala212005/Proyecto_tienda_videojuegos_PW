// src/pages/Favoritos.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Fondo from "../components/fondos/FondoPrincipal.jsx"; 

export default function Favoritos() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("redirectTo", "/favoritos");
    navigate("/login");
    return;
  }

  const load = async () => {
    try {
      // 1. Obtener IDs desde tu backend
      const res = await fetch("https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/api/favoritos", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.setItem("redirectTo", "/favoritos");
          navigate("/login");
          return;
        }
        throw new Error("Error al obtener favoritos.");
      }

      const data = await res.json();
      const ids = data.favoritos || [];

      if (ids.length === 0) {
        setGames([]);
        setLoading(false);
        return;
      }

      // 2. Solicitar detalles desde tu backend
      const res2 = await fetch("https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/api/favoritos/detalles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ids }),
      });

      const data2 = await res2.json();
      setGames(data2.juegos || []);
    } catch (err) {
      console.error(err);
      alert("Error al obtener favoritos. Prueba a iniciar sesión de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  load();
}, [navigate]);

  if (loading) return (
    <>
      <Header />
      <main id="main">
        
        <div className="container" style={{ padding: 24 }}>
          <p>Cargando favoritos...</p>
        </div>
      </main>
      <Footer />
      <Fondo />
    </>
  );

  return (
    <>
      <Header />
      <main id="main">
       
        <div className="container content-foreground" style={{ padding: 24 }}>
          <h2>Mis Favoritos</h2>
          {games.length === 0 ? (
            <p>No tienes favoritos aún.</p>
          ) : (
            <div className="row">
              {games.map((g) => (
                <div className="col-md-4" key={g.id || `${Math.random()}`}>
                  <div className="card mb-3">
                    <img src={g.thumbnail} className="card-img-top" alt={g.title} />
                    <div className="card-body">
                      <h5 className="card-title">{g.title}</h5>
                      <p className="card-text">{g.short_description}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => navigate(`/juego/${g.id}`)}>
                          Ver detalle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
       <Fondo />
    </>
  );
}

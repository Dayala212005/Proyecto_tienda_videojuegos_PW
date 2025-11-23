import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarouselDestacados() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/games/top")
      .then((res) => res.json())
      .then((data) => setTopGames(data))
      .catch((err) => console.error("Error al obtener datos", err));
  }, []);

  if (!topGames || topGames.length === 0) {
    return null;
  }

  return (
    <div id="carouselDestacados" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {topGames.slice(0, 3).map((g, i) => (
          <div key={g.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            {/* ✅ imagen -> Detalle */}
            <Link to={`/juego/${g.id}`} style={{ textDecoration: "none" }}>
              <img
                src={g.thumbnail}
                className="d-block w-100"
                alt={g.title}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <div className="carousel-caption d-none d-md-block">
              <h5>{g.title}</h5>
              <p>{g.short_description}</p>

              {/* ✅ botón -> Descarga */}
              <Link to={`/descarga/${g.id}`} className="btn-descargar" style={{ textDecoration: "none" }}>
                Descargar
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestacados" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselDestacados" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselDestacados;

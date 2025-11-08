import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { data } from "react-router-dom";

function CarouselDestacados() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/games/top")
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos de la API:", data);
        setTopGames(data);
      })
      .catch(err => console.error("Error al obtener datos", err));
  }, []);

  return (
    <div id="carouselDestacados" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselDestacados"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselDestacados"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselDestacados"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <Link to={`/descarga/${topGames[0]?.id || 0}`} style={{ textDecoration: "none" }}>
            <img
              src={topGames[0]?.thumbnail || "https://picsum.photos/id/123/1200/400"}
              className="d-block w-100"
              alt={topGames[0]?.title || "Juego 1"}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="carousel-caption d-none d-md-block">
            <h5>{topGames[0]?.title || "Juego 1"}</h5>
            <p>{topGames[0]?.short_description || "Descripción del primer juego."}</p>
            {topGames[0] && (
              <Link
                to={`/descarga/${topGames[0].id}`}
                className="checkout-btn"
                style={{ textDecoration: "none" }}
              >
                Descargar
              </Link>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <Link to={`/descarga/${topGames[1]?.id || 0}`} style={{ textDecoration: "none" }}>
            <img
              src={topGames[1]?.thumbnail || "https://picsum.photos/id/123/1200/400"}
              className="d-block w-100"
              alt={topGames[1]?.title || "Juego 2"}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="carousel-caption d-none d-md-block">
            <h5>{topGames[1]?.title || "Juego 2"}</h5>
            <p>{topGames[1]?.short_description || "Descripción del segundo juego."}</p>
            {topGames[1] && (
              <Link
                to={`/descarga/${topGames[1].id}`}
                className="checkout-btn"
                style={{ textDecoration: "none" }}
              >
                Descargar
              </Link>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <Link to={`/descarga/${topGames[2]?.id || 0}`} style={{ textDecoration: "none" }}>
            <img
              src={topGames[2]?.thumbnail || "https://picsum.photos/id/123/1200/400"}
              className="d-block w-100"
              alt={topGames[2]?.title || "Juego 3"}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="carousel-caption d-none d-md-block">
            <h5>{topGames[2]?.title || "Juego 3"}</h5>
            <p>{topGames[2]?.short_description || "Descripción del tercer juego."}</p>
            {topGames[2] && (
              <Link
                to={`/descarga/${topGames[2].id}`}
                className="checkout-btn"
                style={{ textDecoration: "none" }}
              >
                Descargar
              </Link>
            )}
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselDestacados"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselDestacados"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselDestacados;

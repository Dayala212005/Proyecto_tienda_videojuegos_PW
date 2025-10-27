import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const CarouselDestacados = () => {
  const items = [
    {
      src: "/imagenes/logo.jpg",
      altText: "Juego 1",
      caption: "¡Aventura Épica!",
      header: "The Legend of React",
      key: "1",
    },
    {
      src: "/imagenes/logo.jpg",
      altText: "Juego 2",
      caption: "Corre, dispara y sobrevive",
      header: "Cyber Runner 2085",
      key: "2",
    },
    {
      src: "/imagenes/logo.jpg",
      altText: "Juego 3",
      caption: "Domina los cielos",
      header: "Sky Warriors",
      key: "3",
    },
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">🎮 Juegos Destacados</h2>
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default CarouselDestacados;

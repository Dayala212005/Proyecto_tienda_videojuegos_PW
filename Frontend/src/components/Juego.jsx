function Juego({ imagen, alt, descripcion, precio }) {
  return (
    <div className="juego">
      <img src={imagen} alt={alt} width="100" />
      <p>{descripcion}</p>
      {precio && <p className="price">{precio}</p>}
    </div>
  );
}

export default Juego;

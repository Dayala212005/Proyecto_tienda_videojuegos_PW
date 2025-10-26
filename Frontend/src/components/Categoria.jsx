function Categoria({ nombre, imagen }) {
  return (
    <div className="categoria">
      <img src={imagen} alt={nombre} width="100" />
      <span className="nombre">{nombre}</span>
    </div>
  );
}

export default Categoria;

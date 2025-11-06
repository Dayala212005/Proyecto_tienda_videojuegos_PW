import Header from "../components/Header";
import Footer from "../components/Footer";
import Juego from "../components/Juego";
import Fondo from "../components/fondo.jsx";
import "../styles/styles_compra.css";


function Compra() {
  return (
    <>
      <Header />
      <main>
        <Fondo />
        <h1 id="Titulo">Tu carrito de compra</h1>
        <div className="cart-container">
          <div className="cart-preview">
            <img src="/imagenes/portada_juego.jpg" alt="Hollow Knight Silksong" />
            <div className="cart-details">
              <h3>Hollow Knight: Silksong</h3>
              <p className="price">$6.99</p>
              <div className="cart-actions">
                <a href="#">Añadir</a>
                <a href="#">Eliminar</a>
              </div>
            </div>
          </div>
          <div className="cart-checkout">
            <p className="total">Total estimado: <strong>$6.99</strong></p>
            <button className="checkout-btn">Continuar al pago</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Compra;

/*
prueba para dejar de usar datos fijos y cargar el juego a la pantalla de compra según el id en la URL (No hay certeza de que sea funcional)
(se necesita modificar App.jsx y Juego.jsx)

function Compra() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`http://localhost:4000/api/game/${id}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error("Error al cargar el juego:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGame();
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center", color: "#fff" }}>Cargando juego...</p>;
  }

  if (!game) {
    return <p style={{ textAlign: "center", color: "red" }}>No se encontró el juego.</p>;
  }

  return (
    <>
      <Fondo />
      <Header />
      <main>
        <h1 id="Titulo">Tu carrito de compra</h1>

        <div className="cart-container">
          <div className="cart-preview">
            <img src={game.thumbnail} alt={game.title} />
            <div className="cart-details">
              <h3>{game.title}</h3>
              <p className="price">${game.price ? game.price : "Gratis"}</p>
              <div className="cart-actions">
                <a href="#">Añadir</a>
                <a href="#">Eliminar</a>
              </div>
            </div>
          </div>
          <div className="cart-checkout">
            <p className="total">
              Total estimado: <strong>${game.price ? game.price : "Gratis"}</strong>
            </p>
            <button className="checkout-btn">Continuar al pago</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Compra;

*/
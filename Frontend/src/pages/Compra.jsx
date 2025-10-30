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
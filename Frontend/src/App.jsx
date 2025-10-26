import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compra from "./pages/Compra";
import DetalleJuego from "./pages/DetalleJuego";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Página de inicio */}
        <Route path="/compra" element={<Compra />} /> {/* Página de carrito */}
        <Route path="/juego" element={<DetalleJuego />} /> {/* Página de detalle */}
      </Routes>
    </Router>
  );
}

export default App;



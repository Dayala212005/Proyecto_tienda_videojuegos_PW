import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compra from "./pages/Compra";
import DetalleJuego from "./pages/DetalleJuego";
import CategoriaPage from "./pages/CategoriaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Página de inicio */}
        <Route path="/compra" element={<Compra />} /> {/* Página de carrito */}
        <Route path="/juego" element={<DetalleJuego />} /> {/* Página de detalle */}
        <Route path="/categoria/:nombre" element={<CategoriaPage />} /> {/* pagina de categoria */}
      </Routes>
    </Router>
  );
}

export default App;



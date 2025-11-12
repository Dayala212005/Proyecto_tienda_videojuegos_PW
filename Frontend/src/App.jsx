import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descarga from "./pages/Descarga";
import DetalleJuego from "./pages/DetalleJuego";
import CategoriaPage from "./pages/CategoriaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Página de inicio */}
        <Route path="/descarga" element={<Descarga />} /> {/* Página de descarga */}
        <Route path="/juego/:id" element={<DetalleJuego />} /> {/* Página de detalle */}
        <Route path="/categoria/:nombre" element={<CategoriaPage />} /> {/* pagina de categoria */}
      </Routes>
    </Router>
  );
}

export default App;



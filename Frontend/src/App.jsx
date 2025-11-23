import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import DetalleJuego from "./pages/DetalleJuego";
import CategoriaPage from "./pages/CategoriaPage";
import Login from "./pages/Login";
import Register from "./pages/Registro";
import Favoritos from "./pages/Favoritos"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Página de inicio */}
       
        <Route path="/juego/:id" element={<DetalleJuego />} /> {/* Página de detalle */}
        <Route path="/categoria/:nombre" element={<CategoriaPage />} /> {/* pagina de categoria */}
        <Route path="/login" element={<Login />} />   {/* Página de inicio de sesión */}
        <Route path="/register" element={<Register />} /> {/* Página de registro */}  
        <Route path="/favoritos" element={<Favoritos />} /> {/* Página de favoritos */}
      </Routes>
    </Router>
  );
}

export default App;



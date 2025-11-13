import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style_cuenta.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/FondoCuenta.jsx"; 
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      localStorage.setItem("token", data.token);
      navigate("/"); 
    } else {
      alert(data.message || "Error al iniciar sesión");
    }
  };

  return (
    <>
    <Header />
    <Fondo />
    <br/>
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Inicia Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <p>
          <br/>
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="link">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
    <Footer />
    
    </>
  );
}

export default Login;

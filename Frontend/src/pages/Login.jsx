// src/pages/Login.jsx  (actualizado)
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Fondo from "../components/fondos/FondoCuenta.jsx"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contrasena: password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        // redireccionar al lugar guardado si existe
        const redirectTo = localStorage.getItem("redirectTo");
        if (redirectTo) {
          localStorage.removeItem("redirectTo");
          navigate(redirectTo);
        } else {
          navigate("/");
        }
      } else {
        alert(data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error(err);
      alert("Error de red");
    }
  };

  return (
    <>
      <Header />
      <Fondo />
      <br />
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
            <br />
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

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style_cuenta.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fondo from "../components/FondoCuenta.jsx"; 


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert(data.message || "Error al registrarse");
    }
  };

  return (
    <>  
    <Header />
    <Fondo />
    <br/>
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
        <p>
            <br/>
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="link">
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Register;

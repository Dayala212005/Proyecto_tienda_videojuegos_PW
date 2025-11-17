import { useState, useEffect } from "react";

export default function BotonFavorito({ juegoId }) {
  const [esFavorito, setEsFavorito] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkFavorito = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`http://localhost:4000/api/favoritos/check/${juegoId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        console.log("Check favorito:", data);
        setEsFavorito(data.esFavorito);
      } catch (error) {
        console.error("Error al verificar favorito:", error);
      } finally {
        setLoading(false);
      }
    };

    checkFavorito();
  }, [juegoId, token]);

  const toggleFavorito = async () => {
    if (!token) {
      alert("Debes iniciar sesión para añadir favoritos");
      return;
    }

    try {
      const url = `http://localhost:4000/api/favoritos/${juegoId}`;
      const method = esFavorito ? "DELETE" : "POST";

      // Actualización optimista
      setEsFavorito(!esFavorito);

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        setEsFavorito(esFavorito); // revertir si falla
        console.error("Error al actualizar favorito:", await res.json());
      }
    } catch (error) {
      console.error("Error al actualizar favorito:", error);
      setEsFavorito(esFavorito); // revertir
    }
  };

  if (loading) return <span>Cargando...</span>;

  return (
    <button
      onClick={toggleFavorito}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "24px",
        color: esFavorito ? "pink" : "gray"
      }}
    >
      {esFavorito ? "❤️" : "🤍"}
    </button>
  );
}
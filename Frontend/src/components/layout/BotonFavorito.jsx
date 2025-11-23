import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BotonFavorito({ juegoId }) {
  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkIfFav = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setIsFav(false);
      try {
        const res = await fetch("http://localhost:4000/api/favoritos", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        setIsFav(Array.isArray(data.favoritos) && data.favoritos.includes(juegoId));
      } catch (e) { console.error(e); }
    };
    checkIfFav();
  }, [juegoId]);

  const goToLoginWithRedirect = () => {
    // Guardar a donde volver después de login
    localStorage.setItem("redirectTo", location.pathname + location.search);
    navigate("/login");
  };

  const handleAdd = async () => {
    const token = localStorage.getItem("token");
    if (!token) return goToLoginWithRedirect();

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/favoritos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_juego: juegoId }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsFav(true);
        alert(data.message || "Añadido a favoritos");
      } else {
        alert(data.message || "No se pudo añadir");
        if (res.status === 401) goToLoginWithRedirect();
      }
    } catch (e) {
      console.error(e);
      alert("Error de red");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    const token = localStorage.getItem("token");
    if (!token) return goToLoginWithRedirect();

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/api/favoritos/${juegoId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setIsFav(false);
        alert(data.message || "Eliminado de favoritos");
      } else {
        alert(data.message || "No se pudo eliminar");
      }
    } catch (e) {
      console.error(e);
      alert("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isFav ? (
        <button className="btn btn-warning" onClick={handleRemove} disabled={loading}>
          ⭐ En favoritos
        </button>
      ) : (
        <button className="btn btn-outline-warning" onClick={handleAdd} disabled={loading}>
          ☆ Añadir a favoritos
        </button>
      )}
    </div>
  );
}

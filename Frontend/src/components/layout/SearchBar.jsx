// components/SearchBar.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const ref = useRef(null);
  const navigate = useNavigate();

  // Buscar juegos cuando cambie query
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/api/games/search?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          setResults([]);
        } else {
          setResults(data);
        }

        setOpen(true);
      } catch (err) {
        console.error("Error al buscar juegos:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setFocusIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Seleccionar juego
  const handleSelect = (game) => {
    setOpen(false);
    setQuery("");
    setResults([]);
    navigate(`/juego/${game.id}`);
  };

  // Navegación con teclado
  const onKeyDown = (e) => {
    if (!open || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const i = focusIndex >= 0 ? focusIndex : 0;
      handleSelect(results[i]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setFocusIndex(-1);
    }
  };

  return (
    <div className="searchbar" ref={ref} style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        onKeyDown={onKeyDown}
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls="search-listbox"
        style={{ padding: "8px", width: "100%" }}
      />
      {open && (
        <div
          className="search-dropdown"
          role="listbox"
          id="search-listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #ccc",
            maxHeight: "300px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {loading && <div className="search-item muted">Buscando…</div>}
          {!loading && results.length === 0 && (
            <div className="search-item muted">Sin resultados</div>
          )}
          {!loading &&
            results.map((g, i) => (
              <button
                key={g.id}
                type="button"
                className={`search-item ${i === focusIndex ? "active" : ""}`}
                onMouseEnter={() => setFocusIndex(i)}
                onMouseLeave={() => setFocusIndex(-1)}
                onClick={() => handleSelect(g)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "6px 8px",
                  background: i === focusIndex ? "#f0f0f0" : "#fff",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <img
                  src={g.thumbnail}
                  alt={g.title}
                  style={{ width: "50px", height: "50px", marginRight: "8px" }}
                />
                <div>
                  <div style={{ fontWeight: "bold" }}>{g.title}</div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    {g.genre} • {g.platform}
                  </div>
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

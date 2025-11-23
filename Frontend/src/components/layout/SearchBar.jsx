import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!q.trim()) {
      setItems([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/api/games/search?q=${encodeURIComponent(q)}`
        );

        if (!res.ok) {
          console.error("Error en la respuesta del backend", res.status);
          setItems([]);
          setOpen(false);
          return;
        }

        const data = await res.json();
        // Asegurarnos que data es array antes de map
        setItems(Array.isArray(data) ? data : []);
        setOpen(true);
      } catch (e) {
        console.error("Error al buscar juegos", e);
        setItems([]);
        setOpen(false);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [q]);

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setFocusIndex(-1);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSelect = (game) => {
    if (!game) return;
    setOpen(false);
    setQ("");
    setItems([]);
    navigate(`/game/${game.id}`);
  };

  const onKeyDown = (e) => {
    if (!open || items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((i) => (i - 1 + items.length) % items.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const i = focusIndex >= 0 ? focusIndex : 0;
      handleSelect(items[i]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setFocusIndex(-1);
    }
  };

  return (
    <div className="searchbar" ref={ref}>
      <input
        id="buscar_juegos"
        type="text"
        placeholder="Buscar juegos..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => items.length > 0 && setOpen(true)}
        onKeyDown={onKeyDown}
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls="search-listbox"
      />

      {open && (
        <div className="search-dropdown" role="listbox" id="search-listbox">
          {loading && <div className="search-item muted">Buscando…</div>}

          {!loading && items.length === 0 && (
            <div className="search-item muted">Sin resultados</div>
          )}

          {!loading &&
            Array.isArray(items) &&
            items.map((g, i) => (
              <button
                key={g.id}
                type="button"
                className={`search-item ${i === focusIndex ? "active" : ""}`}
                onMouseEnter={() => setFocusIndex(i)}
                onMouseLeave={() => setFocusIndex(-1)}
                onClick={() => handleSelect(g)}
              >
                <img src={g.thumbnail} alt={g.title} />
                <div className="search-texts">
                  <span className="title">{g.title}</span>
                  <span className="meta">{g.genre} • {g.platform}</span>
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

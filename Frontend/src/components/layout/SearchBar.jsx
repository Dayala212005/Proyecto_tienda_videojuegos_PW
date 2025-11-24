import { useState, useEffect } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setGames([]);
      return;
    }

    const delay = setTimeout(() => {
      buscarJuegos(query);
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  const buscarJuegos = async (texto) => {
    try {
      setLoading(true);

      const respuesta = await fetch(
        `https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/api/games/search?q=${texto}`
      );
      const datos = await respuesta.json();
      setGames(datos);
    } catch (error) {
      console.error("Error buscando juegos", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {loading && <p>Cargando...</p>}

      {!loading && games.length > 0 && (
        <ul
          style={{
            marginTop: "10px",
            listStyle: "none",
            padding: 0,
            border: "1px solid #ddd",
            borderRadius: "6px",
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {games.map((game) => (
            <li
              key={game.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
            >
              {game.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

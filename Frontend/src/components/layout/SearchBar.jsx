import { useEffect, useState } from "react";

function SearchBar() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Cargar todos los juegos al montar el componente
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("https://proyecto-tienda-videojuegos-pw-ofuz.onrender.com/games");
        const data = await res.json();
        setGames(data);
      } catch (err) {
        console.error("Error cargando juegos:", err);
      }
    };

    fetchGames();
  }, []);

  // Filtrar cada vez que cambia el texto
  useEffect(() => {
    const results = games.filter((juego) =>
      juego.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, games]);

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Lista de juegos filtrados */}
      {search.length > 0 && (
        <ul className="mt-4 bg-white p-3 rounded-lg shadow">
          {filtered.length === 0 && (
            <li className="text-gray-500">No hay juegos con ese nombre 😔</li>
          )}

          {filtered.map((juego) => (
            <li
              key={juego.id}
              className="p-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
            >
              {juego.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

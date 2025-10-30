import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json()); 
const PORT = 4000;

// Obtener todos los juegos
app.get("/api/games", async (req, res) => {
  try {
    const respuesta = await fetch("https://www.freetogame.com/api/games");
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
});

// Obtener un juego por ID
app.get("/api/game/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const respuesta = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el juego" });
  }
});

// Filtrar por plataforma
app.get("/api/games/platform/:platform", async (req, res) => {
  const { platform } = req.params;
  const url = new URL(`https://www.freetogame.com/api/games`);
  url.searchParams.append("platform", platform);

  console.log("→ Consultando:", url.href);

  try {
    const respuesta = await fetch(url.href);
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al filtrar por plataforma" });
  }
});

// Filtrar por categoría
app.get("/api/games/category/:category", async (req, res) => {
  const { category } = req.params;
  const url = new URL(`https://www.freetogame.com/api/games`);
  url.searchParams.append("category", category);

  console.log("→ Consultando:", url.href);

  try {
    const respuesta = await fetch(url.href);
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al filtrar por categoría" });
  }
});

// Ordenar (sort-by)
app.get("/api/games/sort/:orden", async (req, res) => {
  const { orden } = req.params;
  const url = new URL(`https://www.freetogame.com/api/games`);
  url.searchParams.append("sort-by", orden);

  console.log("→ Consultando:", url.href);

  try {
    const respuesta = await fetch(url.href);
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al ordenar los juegos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4000;
// Llamado a la base de datos
app.get("/api/favoritos/:userId", (req, res) => {
  const { userId } = req.params;

  //Datos de prueba (simulan una base de datos)
  const favoritos = {
    "1": [540, 521, 452], // usuario 1 tiene 3 juegos favoritos
    "2": [452, 517, 475], // usuario 2 otros
  };

  // Si el usuario no existe, devuelve un arreglo vacío
  const favoritosUsuario = favoritos[userId] || [];
  res.json(favoritosUsuario);
});

app.use("/api/users", userRoutes);

//Endpoint para obtener tres juegos mas recientes
app.get("/api/games/release", async (req, res) => {
  try {
    const respuesta = await fetch("https://www.freetogame.com/api/games?sort-by=release-date");
    const datos = await respuesta.json();
    const top3 = datos.slice(0, 3);
    res.json(top3);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
})
//Endpoint para obtener ofertas
app.get("/api/games/ofertas", async (req, res) => {
  try {
    const respuesta = await fetch("https://www.freetogame.com/api/games?sort-by=relevance");
    const datos = await respuesta.json();
    const top3 = datos.slice(0, 3);
    res.json(top3);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
})

//Endpoint para obtener los 3 juegos mas populares
app.get("/api/games/top", async (req, res) => {
  try {
    const respuesta = await fetch("https://www.freetogame.com/api/games?sort-by=popularity");
    const datos = await respuesta.json();
    const top3 = datos.slice(0, 3);
    res.json(top3);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
})
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

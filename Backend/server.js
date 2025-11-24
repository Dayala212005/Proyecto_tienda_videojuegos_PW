import express from "express";
import cors from "cors";

// import { PORT } from './keys/keys.js';

import userRoutes from "./routes/userRoutes.js";
import favoritoRoutes from "./routes/favoritoRoutes.js";
import juegosRoutes from "./routes/juegosRoutes.js";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// app.use(cors({
//   origin: "*", 
//   credentials: true
// }));

app.use("/api/users", userRoutes);

app.use("/api/favoritos", favoritoRoutes);

app.use("/api/games", juegosRoutes);

// app.get("/api/games/search", async (req, res) => {
//   const q = (req.query.q || "").trim();
//   if (!q) return res.json([]);

//   const norm = (s) =>
//     (s || "")
//       .toString()
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .toLowerCase();

//   try {
//     const respuesta = await fetch("https://www.freetogame.com/api/games");
//     const datos = await respuesta.json();

//     const nq = norm(q);
//     const results = datos
//       .filter((g) => {
//         const t = norm(g.title);
//         const d = norm(g.short_description);
//         return t.includes(nq) || d.includes(nq);
//       })
//       .slice(0, 10); 

//     res.json(results);
//   } catch (error) {
//     console.error("Error endpoint:", error);
//     res.status(500).json({ error: "Error al buscar juegos" });
//   }
// });


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

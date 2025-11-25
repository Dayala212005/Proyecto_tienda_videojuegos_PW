import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import favoritoRoutes from "./routes/favoritoRoutes.js";
import juegosRoutes from "./routes/juegosRoutes.js";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);

app.use("/api/favoritos", favoritoRoutes);

app.use("/api/games", juegosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

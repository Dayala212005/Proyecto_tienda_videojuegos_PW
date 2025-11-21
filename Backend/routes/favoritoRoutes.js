// routes/favoritoRoutes.js
import express from "express";

import verifyToken from "../utils/middlewares/verifyToken.js";

import{ removeFavorito } from "../controllers/Favoritos/deleteFavorito.js";
import { addFavorito } from "../controllers/Favoritos/postFavorito.js";
import { getFavoritos } from "../controllers/Favoritos/getFavorito.js";
import { getDetallesFavorito } from "../controllers/Favoritos/getDetallesFavorito.js";


const router = express.Router();

router.post("/add", verifyToken, addFavorito);         // body: { id_juego }
router.get("/", verifyToken, getFavoritos);            // devuelve { favoritos: [id1, id2, ...] }
router.delete("/:idJuego", verifyToken, removeFavorito); // elimina favorito por idJuego
router.post("/detalles", verifyToken, getDetallesFavorito);

export default router;

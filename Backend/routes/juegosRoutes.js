// routes/favoritoRoutes.js
import express from "express";

import { getRelease, getOfertas, getTop, getAllGames, getGameById, getGamesByPlatform, getGamesByCategory, getGamesBySort, getGamesBySearch} from "../controllers/Juegos/gameController.js";


const router = express.Router();

router.get("/release", getRelease);
router.get("/ofertas", getOfertas);
router.get("/top", getTop);
router.get("/", getAllGames);
router.get("/:id", getGameById);
router.get("/platform/:platform", getGamesByPlatform);
router.get("/category/:category", getGamesByCategory);
router.get("/sort/:orden", getGamesBySort);
router.get("/search", getGamesBySearch);


export default router;

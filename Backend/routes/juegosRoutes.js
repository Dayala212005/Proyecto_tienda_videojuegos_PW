import express from "express";
import {
  getRelease,
  getOfertas,
  getTop,
  getAllGames,
  getGameById,
  getGamesByPlatform,
  getGamesByCategory,
  getGamesBySort,
} from "../controllers/Juegos/gameController.js";

const router = express.Router();

router.get("/release", getRelease);
router.get("/ofertas", getOfertas);
router.get("/top", getTop);

router.get("/platform/:platform", getGamesByPlatform);
router.get("/category/:category", getGamesByCategory);
router.get("/sort/:orden", getGamesBySort);


router.get("/", getAllGames);


router.get("/:id", getGameById);

export default router;

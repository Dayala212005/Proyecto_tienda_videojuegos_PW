import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ejemplo de ruta protegida
router.get("/perfil", verifyToken, (req, res) => {
  res.json({ message: "Acceso autorizado", user: req.user });
});

export default router;

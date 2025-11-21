import express from "express";

import verifyToken from "../utils/middlewares/verifyToken.js";

import { loginUser } from "../controllers/Usuarios/signIn.js";
import { registerUser } from "../controllers/Usuarios/signUp.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ejemplo de ruta protegida
router.get("/perfil", verifyToken, (req, res) => {
  res.json({ message: "Acceso autorizado", user: req.user });
});

export default router;

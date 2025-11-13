import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getConnection, mssql } from "../db.js";

const JWT_SECRET = "super_secreto123";

// Registrar usuario
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const pool = await getConnection();

    const existing = await pool.request().input("email", mssql.VarChar, email).query("SELECT * FROM usuarios WHERE email = @email");

    if (existing.recordset.length > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await pool.request().input("username", mssql.VarChar, username).input("email", mssql.VarChar, email).input("password", mssql.VarChar, hashed).query(
        "INSERT INTO usuarios (username, email, password) VALUES (@username, @email, @password)"
      );

    res.status(200).json({ message: "Usuario registrado con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err.message });
  }
};

// Iniciar sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("email", mssql.VarChar, email)
      .query("SELECT * FROM usuarios WHERE email = @email");

    if (result.recordset.length === 0)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const user = result.recordset[0];
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err.message });
  }
};

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getConnection, mssql } from "../db/db.js";

const JWT_SECRET = "super_secreto123";

// Registrar usuario
export const registerUser = async (req, res) => {
  const { nombre, email, contrasena } = req.body; 
  try {
    const pool = await getConnection();

    // Verificar si el email ya existe
    const existing = await pool
      .request()
      .input("email", mssql.NVarChar, email)
      .query("SELECT * FROM USUARIO WHERE email = @email");

    if (existing.recordset.length > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Encriptar contraseña
    const hashed = await bcrypt.hash(contrasena, 10);

    // Insertar nuevo usuario
    await pool
      .request()
      .input("nombre", mssql.VarChar, nombre)
      .input("contrasena", mssql.NVarChar, hashed)
      .input("email", mssql.NVarChar, email)
      .query(
        "INSERT INTO USUARIO (nombre, contrasena, email) VALUES (@nombre, @contrasena, @email)"
      );

    res.status(200).json({ message: "Usuario registrado con éxito" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error en el servidor", error: err.message });
  }
};

// Iniciar sesión
export const loginUser = async (req, res) => {
  const { email, contrasena } = req.body;
  try {
    const pool = await getConnection();

    // Buscar el usuario por email
    const result = await pool
      .request()
      .input("email", mssql.NVarChar, email)
      .query("SELECT * FROM USUARIO WHERE email = @email");

    if (result.recordset.length === 0)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const user = result.recordset[0];

    // Comparar contraseñas
    const valid = await bcrypt.compare(contrasena, user.contrasena);

    if (!valid)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    // Crear token con los datos correctos
    const token = jwt.sign(
      { id_usuario: user.id_usuario, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error en el servidor", error: err.message });
  }
};

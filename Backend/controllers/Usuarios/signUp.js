import bcrypt from "bcrypt";

import { getConnection, mssql } from "../../db/db.js";
import { generateHash } from "../../utils/hashes/index.js";


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
    const hashed = await generateHash(contrasena);


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
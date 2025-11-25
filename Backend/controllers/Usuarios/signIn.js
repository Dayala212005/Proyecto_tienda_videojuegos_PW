import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getConnection, mssql } from "../../db/db.js";
import { JWT_SECRET } from "../../keys/keys.js";

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
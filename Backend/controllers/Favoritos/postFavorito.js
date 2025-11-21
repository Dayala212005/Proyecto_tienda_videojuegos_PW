import { getConnection, mssql } from "../../db/db.js";

export const addFavorito = async (req, res) => {
  try {
    const id_usuario = req.user?.id_usuario; 

    const { id_juego } = req.body;

    if (!id_usuario) return res.status(401).json({ message: "Usuario no identificado" });
    if (!id_juego) return res.status(400).json({ message: "Falta id_juego" });

    const pool = await getConnection();

    // Evitar duplicados
    const exists = await pool
      .request()
      .input("id_usuario", mssql.Int, id_usuario)
      .input("id_juego", mssql.Int, id_juego)
      .query("SELECT * FROM FAVORITO WHERE id_usuario = @id_usuario AND id_juego = @id_juego");

    if (exists.recordset.length > 0) {
      return res.status(200).json({ message: "Ya está en favoritos" });
    }

    await pool
      .request()
      .input("id_usuario", mssql.Int, id_usuario)
      .input("id_juego", mssql.Int, id_juego)
      .query("INSERT INTO FAVORITO (id_usuario, id_juego) VALUES (@id_usuario, @id_juego)");

    return res.status(201).json({ message: "Añadido a favoritos" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error del servidor", error: err.message });
  }
};
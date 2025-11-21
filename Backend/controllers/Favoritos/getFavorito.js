import { getConnection, mssql } from "../../db/db.js";

export const getFavoritos = async (req, res) => {
  try {
    const id_usuario = req.user?.id_usuario; 

    if (!id_usuario) {
      return res.status(401).json({ message: "Usuario no identificado" });
    }

    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_usuario", mssql.Int, id_usuario)
      .query("SELECT id_juego FROM FAVORITO WHERE id_usuario = @id_usuario ORDER BY id_favorito DESC");

    const ids = result.recordset.map(r => r.id_juego);

    return res.status(200).json({ favoritos: ids });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error del servidor", error: err.message });
  }
};
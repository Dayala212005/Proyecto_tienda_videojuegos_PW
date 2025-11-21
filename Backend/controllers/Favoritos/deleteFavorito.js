import { getConnection, mssql } from "../../db/db.js";

export const removeFavorito = async (req, res) => {
  try {
    const id_usuario = req.user?.id_usuario; // <-- FIX
    const id_juego = parseInt(req.params.idJuego, 10);

    if (!id_juego) return res.status(400).json({ message: "Falta id del juego" });

    const pool = await getConnection();

    await pool
      .request()
      .input("id_usuario", mssql.Int, id_usuario)
      .input("id_juego", mssql.Int, id_juego)
      .query("DELETE FROM FAVORITO WHERE id_usuario = @id_usuario AND id_juego = @id_juego");

    return res.status(200).json({ message: "Eliminado de favoritos" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error del servidor", error: err.message });
  }
};
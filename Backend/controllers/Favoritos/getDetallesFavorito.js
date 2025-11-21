
// app.post("/api/favoritos/detalles", verifyToken, 

export const getDetallesFavorito =   async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids)) {
      return res.status(400).json({ message: "ids debe ser un array" });
    }

    const fetchPromises = ids.map((id) =>
      fetch(`https://www.freetogame.com/api/game?id=${id}`).then((r) => r.json())
    );

    const detalles = await Promise.all(fetchPromises);

    res.json({ juegos: detalles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error obteniendo detalles", error: err.message });
  }
};
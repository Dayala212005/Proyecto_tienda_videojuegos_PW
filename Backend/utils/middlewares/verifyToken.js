import jwt from "jsonwebtoken";

const JWT_SECRET = "super_secreto123";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Token no enviado" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Sesión expirada o inválida. Vuelve a iniciar sesión." });

    // Normalizar id_usuario
    req.user = {
      id_usuario: decoded.id_usuario || decoded.id || decoded.userId
    };

    if (!req.user.id_usuario) {
      return res.status(401).json({ message: "Token sin id de usuario" });
    }

    next();
  });
};

export default verifyToken;

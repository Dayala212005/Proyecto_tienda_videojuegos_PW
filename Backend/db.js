import mssql from "mssql";

const connection = {
  user: "sa",
  password: "123456789", 
  server: "localhost", 
  database: "juegosdb",
  options: {
    encrypt: true,
    trustServerCertificate: true, // necesario para conexiones locales
  },
};

export async function getConnection() {
  try {
    const pool = await mssql.connect(connection);
    console.log("Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("Error de conexión a SQL Server:", error);
    return null; // 🔹 evita undefined
  }
}

export { mssql };

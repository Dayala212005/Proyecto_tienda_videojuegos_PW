import mssql from "mssql";

const connection = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await mssql.connect(connection);
    console.log("Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("Error de conexión a SQL Server:", error);
    return null; 
  }
}

export { mssql };

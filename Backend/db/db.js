import mssql from "mssql";

const connection = {
  user: "sa",
  password: "123456789", 
  server: "localhost", 
  database: "IndieIsland",
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

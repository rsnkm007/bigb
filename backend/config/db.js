
import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 4000),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 15000,

  // TiDB Cloud requires an encrypted connection.
  ssl: {
    minVersion: "TLSv1.2"
  }
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed:", err.message);
    return;
  }

  console.log("TiDB Cloud Connected Successfully");
});

export default db;

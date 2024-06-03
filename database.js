import mysql from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

// exportar método para poder usarlo en diferentes partes del backend
const getConnection = async () => await connection;

export { getConnection };
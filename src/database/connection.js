// src/database/connection.js
const mysql = require('mysql2/promise'); // Importa la versión con promesas
const config = require('../../config');     // Asegúrate de que la ruta sea correcta

const { host, port, database, username, password } = config.database;

let pool; // Variable para almacenar el pool de conexiones

const connectDB = async () => {
    try {
        pool = mysql.createPool({
            host: host,
            user: username,
            password: password,
            database: database,
            port: port,
            waitForConnections: true,
            connectionLimit: 10, // Puedes ajustar este límite según tus necesidades
            queueLimit: 0
        });
        await pool.getConnection(); // Intenta obtener una conexión para verificar que todo esté bien
        console.log('Conexión a MySQL/MariaDB establecida exitosamente.');
    } catch (error) {
        console.error('Error al conectar a MySQL/MariaDB:', error.message);
        process.exit(1); // Sale del proceso si la conexión falla
    }
};

// Función para obtener el pool de conexiones cuando sea necesario
const getDb = () => {
    if (!pool) {
        throw new Error('No se ha conectado a la base de datos. Llama a connectDB primero.');
    }
    return pool;
};

module.exports = { connectDB, getDb };
// config/index.js
require('dotenv').config(); // Carga las variables de entorno al inicio

const config = {
    app: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'development'
    },
    database: {
        connection: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        url: process.env.DATABASE_URL // Útil para bases de datos en la nube (ej: MongoDB Atlas)
    }
};

module.exports = config;
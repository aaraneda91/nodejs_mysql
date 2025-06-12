// server.js
const { connectDB } = require('./src/database/connection'); // Importa la función para conectar la DB
const app = require('./src/app');                           // Importa tu aplicación Express
const config = require('./config');                         // Importa tu configuración general

const startServer = async () => {
    await connectDB(); // Primero, conecta a la base de datos

    const PORT = config.app.port; // Obtiene el puerto de la configuración
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT} en entorno ${config.app.env}`);
        console.log(`API de productos disponible en: http://localhost:${PORT}/api/products`);
    });
};

startServer();
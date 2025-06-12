// src/app.js
const express = require('express');
const productRoutes = require('./routes/productRoutes'); // Importa tus rutas de producto
const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Usar las rutas de productos bajo un prefijo '/api'
// Esto significa que la URL completa será: http://localhost:3000/api/products
app.use('/api', productRoutes);

// Manejo de errores (opcional pero recomendado)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

module.exports = app;
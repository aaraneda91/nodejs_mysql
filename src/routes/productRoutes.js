// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define la ruta GET para obtener todos los productos
// Por ejemplo: GET /api/products
router.get('/products', productController.getAllProducts);

module.exports = router;
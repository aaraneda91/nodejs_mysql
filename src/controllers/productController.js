// src/controllers/productController.js
const { getDb } = require('../database/connection'); // Importa la función para obtener el pool de DB
const ProductModel = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener productos.' });
    }
};

module.exports = {
    getAllProducts,
};
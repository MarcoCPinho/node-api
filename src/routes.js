const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas
routes.get("/products", ProductController.index); //método GET é para pegar aldo do servidor
routes.post("/products", ProductController.store); //método POST é para criar algo no servidor

module.exports = routes;
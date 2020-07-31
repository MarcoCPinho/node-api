const express = require('express'); //importando o módulo "express" e atribindo-o a const "express"
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas
routes.get("/products", ProductController.index); //método GET é para pegar algo do servidor
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store); //método POST é para criar algo no servidor
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
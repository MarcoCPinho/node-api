const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes")); //use é um white-card; ele permite receber qualquer tipo de requisição a partir da rota "/api", manda para o arquivo "/src/routes.js"

app.listen(3001);
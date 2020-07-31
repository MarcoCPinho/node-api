const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products); //json = estrutura de dados. "Java Script Object Notation"
    },
    async storageEvent(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    }
};
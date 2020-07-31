const mongoose = require('mongoose'); //const "mongoose" recebe o módulo "mongoose"


const Product = mongoose.model('Product'); //const "Product" recebe os valores do "Product" chamado pelo método "model" da variável "mongoose" anteriormente criada (que recebeu diversas funções herdadas do módulo mongoose)

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query; //usando desestruturação de objeto... estou dizendo que o objeto page, inicia com valor 1 e recebe os valores de req.query
        const products = await Product.paginate({}, { page, limit: 10 }); //page:page -> usando short syntax ali
        /* 
        {} -> parametros de filtros
        {page: 1 ,(...)} -> página atual
        {(...), limit:} -> tamanho da página (limite de dados por página)
        */
        return res.json(products); //json = estrutura de dados. "Java Script Object Notation"
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id); //.param = parametro: ID

        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body); //.body = paramentro: todo o conteúdo do "body" do arquivo

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }); //.findByIdAndUpdate = ache pelo ID e faça um UPDATE com o req.body... o new:true, faz o mongoose retornar para o product, o objeto todo atualizado. se eu não colocar, ele vai retornar para o product o objeto antes de receber a atualização (antes de receber o req.body)

        return res.json(product);
    },

    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); //const mongoosePaginate recebe o módulo "mongoose-paginate" instalado anteriormente pelo "nvm install mongoose-paginate"

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
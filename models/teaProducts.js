const mongoose = require('mongoose');

const teaProductsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    img: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('teaProducts', teaProductsSchema);
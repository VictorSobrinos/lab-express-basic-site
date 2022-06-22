const { Schema, model } = require('mongoose')
//Create model schema
const productSchema = Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    discountPercentage: {
        type: Number
    },
    rating: {
        type: Number
    },
    stock: {
        type: Number
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: {
        type: Array
    }
})

//Create colection
const Product = model('product', productSchema)

//Export
module.exports = Product

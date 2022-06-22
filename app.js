// Create Db
const express = require('express')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

require('./db')

//import data.json
const data = require('./data')

//Create model
const Product = require('./models/product.model')

//Create data
app.get('/', (req, res) => {
    Product
        .find()
        .select({ title: 1, price: 1 })
        .sort({ price: 1 })
        .then(products => {
            res.render('index-page', { products })
            console.log(products)
        })
})

app.listen(5005, console.log('SERVER RUNNING ON PORT 5005'))
"use strict";
const Product = require('../models/products');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const  products = require('../data/product.json');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env'});

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products);
        console.log('All Products are added')

        process.exit();
    }catch (err) {
       console.log(err.message);
       process.exit();
    }
}

seedProducts();

const {Router} = require('express');
const ProductController = require('./controllers/ProductController');

const routes = Router();

const productController = new ProductController();

routes.post( '/produtos' , productController.create );


module.exports = routes;
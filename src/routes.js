const {Router} = require('express');
const ProductController = require('./controllers/ProductController');
const resolver = require('./utils/express-adapter');
const routes = Router();

const productController = new ProductController();

routes.post( '/produtos' , [resolver(productController.create)] );
routes.get( '/produtos' , [resolver(productController.list)] );
routes.get( '/produtos/:id' , [resolver(productController.show)] );
routes.put( '/produtos/:id' , [resolver(productController.update)] );
routes.delete( '/produtos/:id' , [resolver(productController.delete)] );


module.exports = routes;
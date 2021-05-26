const {Router} = require('express');
const ProductController = require('./controllers/ProductController');
const CategoriasContoller = require('./controllers/CategoriasContoller');
const resolver = require('./utils/express-adapter');
const routes = Router();

const productController = new ProductController();
const categoriasController= new CategoriasContoller();


routes.post( '/produtos' , [resolver(productController.create)] );
routes.get( '/produtos' , [resolver(productController.list)] );
routes.get( '/produtos/:id' , [resolver(productController.show)] );
routes.put( '/produtos/:id' , [resolver(productController.update)] );
routes.delete( '/produtos/:id' , [resolver(productController.delete)] );

routes.get( '/categorias' , [resolver(categoriasController.list)] );
routes.delete( '/categorias/:id' , [resolver(categoriasController.delete)] );
routes.put( '/categorias/:id' , [resolver(categoriasController.update)] );
routes.post( '/categorias' , [resolver(categoriasController.create)] );
routes.get( '/categorias/:id' , [resolver(categoriasController.show)] );

module.exports = routes;
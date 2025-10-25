import express from 'express';
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';

const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome);

// RESTAURANT
routerAdmin
  .get('/login', restaurantController.getLogin)
  .post('/login', restaurantController.processLogin);

routerAdmin
  .get('/signup', restaurantController.getSignup)
  .post('/signup', restaurantController.processSignup);

routerAdmin.get('/logout', restaurantController.logout);
routerAdmin.get('/check-me', restaurantController.checkAuthSession);

// PRODUCTS
routerAdmin
  .get('/product/all', productController.getAllProducts)
  .post('/product/create', productController.createNewProduct)
  .post('/product/:id', productController.updateChosenProduct);

export default routerAdmin;

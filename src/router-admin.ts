import express from 'express';
import restaurantController from './controllers/restaurant.controller';

const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome);

routerAdmin
  .get('/login', restaurantController.getLogin)
  .post('/login', restaurantController.processLogin)
  .get('/check-me', restaurantController.checkAuthSession);

routerAdmin
  .get('/signup', restaurantController.getSignup)
  .post('/signup', restaurantController.processSignup);

export default routerAdmin;

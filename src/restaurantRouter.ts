import express, { Request, Response } from "express";
import restaurantController from "./controllers/restaurant.controller";
const restaurantRouter = express.Router();

restaurantRouter.get("/", restaurantController.goHome);

restaurantRouter.get("/login", restaurantController.getLogin);

restaurantRouter.get("/signup", restaurantController.getSignup);

export default restaurantRouter;

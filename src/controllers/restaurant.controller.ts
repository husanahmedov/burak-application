import { Request, Response } from "express";
import { T } from "../lib/types/common";

const restaurantController: T = {};

restaurantController.goHome = (request: Request, response: Response) => {
  response.send("Main Page");
};

restaurantController.getLogin = (request: Request, response: Response) => {
  response.send("Login Page");
};

restaurantController.getSignup = (request: Request, response: Response) => {
  response.send("Signup Page");
};

export default restaurantController;

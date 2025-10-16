import { Request, Response } from "express";
import { T } from "../lib/types/common";

const restaurantController: T = {};

restaurantController.goHome = (request: Request, response: Response) => {
    try {
        console.log("Main Page Loaded")
        response.send("Main Page");
    }catch(error) {
        console.log("You have an error", error)
    }
};

restaurantController.getLogin = (request: Request, response: Response) => {
    try {
        console.log("Login Page Loaded")
        response.send("Login Page");
    }catch(error) {
        console.log("You have an error", error)
    }
};

restaurantController.processLogin = (request: Request, response: Response) => {
    try {
        console.log("Login Process Loaded")
        response.send("Login Process Page");
    }catch(error) {
        console.log("You have an error", error)
    }
}

restaurantController.getSignup = (request: Request, response: Response) => {
  response.send("Signup Page");
};

restaurantController.processSignup = (request: Request, response: Response) => {
    try {
        console.log("Signup Process Loaded")
        response.send("Signup Process Page");
    }catch(error) {
        console.log("You have an error", error)
    }
}

export default restaurantController;

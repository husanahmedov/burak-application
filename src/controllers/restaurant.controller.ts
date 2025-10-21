import {Request, Response} from "express";
import {T} from "../lib/types/common";

import MemberService from "../models/Member.service";
import {LoginInput, Member, MemberInput} from "../lib/member";

const restaurantController: T = {};

const memberService = new MemberService();

restaurantController.goHome = (request: Request, response: Response) => {
    try {
        console.log("Main Page Loaded")
        response.send("Main Page");
    } catch (error) {
        console.log("You have an error", error)
    }
};

restaurantController.getLogin = (request: Request, response: Response) => {
    try {
        console.log("Login Page Loaded")
        response.send("Login Page");
    } catch (error) {
        console.log("You have an error", error)
    }
};

restaurantController.processSignup = async (request: Request, response: Response) => {
    try {
        console.log("Signup Process Loaded")
        const newMember: MemberInput = request.body,
            result: Member = await memberService.processSignup(newMember);
        response.send(result);
    } catch (error) {
        response.send(error);
    }
}

restaurantController.processLogin = async (request: Request, response: Response) => {
    try {
        console.log("Login Process Loaded");
        const input: LoginInput = request.body,
            result = await memberService.processLogin(input);
        response.send(result);
    } catch (error) {
        console.log("You have an error", error)
        response.send(error);
    }
}

restaurantController.getSignup = (request: Request, response: Response) => {
    response.send("Signup Page");
};

export default restaurantController;

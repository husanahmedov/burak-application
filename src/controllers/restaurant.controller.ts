import {Request, Response} from "express";
import {T} from "../lib/types/common";

import MemberService from "../models/Member.service";
import {MemberInput, Member, LoginInput} from "../lib/member";
import {MemberType} from "../lib/enum/member.enum";

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

restaurantController.processSignup =  async (request: Request, response: Response) => {
    try {
        console.log("Signup Process Loaded")
        const newMember: MemberInput = request.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result: Member = await memberService.processSignup(newMember);
        response.send(result);
    }catch(error) {
        response.send(error);
    }
}

restaurantController.processLogin = async (request: Request, response: Response) => {
    try {
        console.log("Login Process Loaded")
        console.log("Request Body", request.body)
        const input: LoginInput = request.body;
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        response.send(result);
    }catch(error) {
        console.log("You have an error", error)
        response.send(error);
    }
}

restaurantController.getSignup = (request: Request, response: Response) => {
    response.send("Signup Page");
};

export default restaurantController;

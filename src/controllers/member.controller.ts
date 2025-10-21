import {Request, Response} from "express";
import {T} from '../lib/types/common';
import {LoginInput, Member, MemberInput} from "../lib/member";
import MemberService from "../models/Member.service";
import Errors from "../lib/Errors";

// React
const memberController: T = {}
const memberService = new MemberService();

memberController.signup = async (request: Request, response: Response) => {
    try {
        console.log("Signup Process Loaded")
        const input: MemberInput = request.body,
            result: Member = await memberService.signup(input);
        response.json({"member": result});
    } catch (error) {
        console.log("Error in the signup", error);
        if (error instanceof Errors) response.status(error.code).json(error);
        else {
            response.status(Errors.standard.code).json(Errors.standard);
        }
    }
}

memberController.login = async (request: Request, response: Response) => {
    try {
        console.log("Login Process Loaded");
        const input: LoginInput = request.body,
            result = await memberService.login(input);
        response.json({"member": result});
    } catch (error) {
        console.log("Error in the login", error);
        if (error instanceof Errors) response.status(error.code).json(error);
        else {
            response.status(Errors.standard.code).json(Errors.standard);
        }
    }
}

export default memberController;
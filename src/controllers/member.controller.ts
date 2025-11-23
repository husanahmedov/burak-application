import { NextFunction, Request, Response } from 'express';
import { T } from '../lib/types/common';
import {
  ExtendedRequest,
  LoginInput,
  Member,
  MemberInput,
} from '../lib/member';
import MemberService from '../models/Member.service';
import Errors, { HttpCode, Message } from '../lib/Errors';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../lib/config';

// React
const memberController: T = {};
const memberService = new MemberService();
const authService = new AuthService();

memberController.signup = async (request: Request, response: Response) => {
  try {
    console.log('Signup Process Loaded');
    const input: MemberInput = request.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    response.cookie('accessToken', token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });
    response
      .status(HttpCode.CREATED)
      .json({ member: result, accessToken: token });
  } catch (error) {
    console.log('Error in the signup', error);
    if (error instanceof Errors) response.status(error.code).json(error);
    else {
      response.status(Errors.standard.code).json(Errors.standard);
    }
  }
};

memberController.login = async (request: Request, response: Response) => {
  try {
    console.log('Login Process Loaded');
    const input: LoginInput = request.body,
      result = await memberService.login(input),
      token = await authService.createToken(result);
    response.cookie('accessToken', token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });
    response.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (error) {
    console.log('Error in the login', error);
    if (error instanceof Errors) response.status(error.code).json(error);
    else {
      response.status(Errors.standard.code).json(Errors.standard);
    }
  }
};

memberController.verifyAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies['accessToken'];
    if (token) {
      req.member = await authService.checkAuth(token);
    }
    if (!req.member) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
    }
    next();
  } catch (err) {
    console.log('Error: verifyAuth', err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.retrieveAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies['accessToken'];
    if (token) req.member = await authService.checkAuth(token);
    next();
  } catch (err) {
    console.log('Error:retrieveAuth', err);
    next();
  }
};

export default memberController;

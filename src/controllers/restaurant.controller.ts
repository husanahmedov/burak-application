import {Request, Response} from 'express';
import {T} from '../lib/types/common';

import MemberService from '../models/Member.service';
import {AdminRequest, LoginInput, Member, MemberInput} from '../lib/member';
import Errors, {Message} from '../lib/Errors';

const restaurantController: T = {};

const memberService = new MemberService();

restaurantController.goHome = (request: Request, response: Response) => {
  try {
    console.log('Main Page Loaded');
    response.render('home');
  } catch (error) {
    console.log('You have an error', error);
  }
};

restaurantController.getLogin = (request: Request, response: Response) => {
  try {
    console.log('Login Page Loaded');
    response.render('login');
  } catch (error) {
    console.log('You have an error', error);
    response.redirect('/');
  }
};

restaurantController.processSignup = async (
  request: AdminRequest,
  response: Response,
) => {
  try {
    console.log('Signup Process Loaded');
    const newMember: MemberInput = request.body,
      result: Member = await memberService.processSignup(newMember);
    request.session.member = result;
    request.session.save(function () {
      response.send(result);
    });
    console.log(request.session);
  } catch (error) {
    const message =
      error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
    response.send(`<script>alert("${message}")</script>`);
  }
};

restaurantController.processLogin = async (
  request: AdminRequest,
  response: Response,
) => {
  try {
    console.log('Login Process Loaded');
    const input: LoginInput = request.body,
      result = await memberService.processLogin(input);
    request.session.member = result;
    request.session.save(function () {
      response.send(result);
    });
  } catch (error) {
    console.log('You have an error', error);
    const message =
      error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
    response.send(`<script>alert("${message}")</script>`);
  }
};

restaurantController.checkAuthSession = async (
  request: AdminRequest,
  response: Response,
) => {
  try {
    if (request.session?.member)
      response.send(`Welcome back ${request.session.member.memberNick}!`);
    else
      response.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (error) {
    console.log('You have an error', error);
    response.send(error);
  }
};

restaurantController.logout = async (
  request: AdminRequest,
  response: Response,
) => {
  try {
    console.log('logout');
    request.session.destroy(function () {
      response.redirect('/admin');
    });
  } catch (error) {
    console.log('Error logout: ', error);
    response.redirect('/admin');
  }
};

restaurantController.getSignup = (request: Request, response: Response) => {
  response.render('signup.ejs');
};

export default restaurantController;

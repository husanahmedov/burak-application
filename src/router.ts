import express from 'express';
import memberController from './controllers/member.controller';

const router = express.Router();

// React

/** MEMBER **/
router.post('/login', memberController.login);
router.post('/signup', memberController.signup);
router.post(
  '/member/logout',
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  '/member/detail',
  memberController.verifyAuth,
  memberController.getMemberDetail
);

export default router;

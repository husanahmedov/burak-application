import express from 'express';
import memberController from './controllers/member.controller';
import uploader from './lib/utils/uploader';

const router = express.Router();

// React

/** MEMBER **/
router
  .post('/login', memberController.login)
  .post('/logout', memberController.verifyAuth, memberController.logout)
  .post('/signup', memberController.signup)
  .get(
    '/member/detail',
    memberController.verifyAuth,
    memberController.getMemberDetail
  )
  .post(
    '/member/update',
    memberController.verifyAuth,
    uploader('members').single('memberImage'),
    memberController.updateMember
  )
  .get('/member/top-users', memberController.getTopUsers)
  .get('/member/get-restaurant', memberController.getRestaurant);

export default router;

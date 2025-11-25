import express from 'express';
import memberController from './controllers/member.controller';
import uploader from './lib/utils/uploader';

const router = express.Router();

// React

/** MEMBER **/
router.post('/member/login', memberController.login);
router.post('/member/signup', memberController.signup);
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

router.post(
  '/member/update',
  memberController.verifyAuth,
  uploader('members').single('memberImage'),
  memberController.updateMember
);

export default router;

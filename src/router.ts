import express from 'express';
import memberController from './controllers/member.controller';
import uploader from './lib/utils/uploader';
import productController from './controllers/product.controller';
import orderController from './controllers/order.controller';

const router = express.Router();

// React

/** MEMBER **/
router
  .post('/member/login', memberController.login)
  .post('/member/logout', memberController.verifyAuth, memberController.logout)
  .post('/member/signup', memberController.signup)
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
  .get('/member/get-restaurant', memberController.getRestaurant)
  .get('/product/all', productController.getProducts)
  .get(
    '/product/:id',
    memberController.retrieveAuth,
    productController.getProduct
  );

/** ORDER **/
router.post(
  '/order/create',
  memberController.verifyAuth,
  orderController.createOrder
);

export default router;

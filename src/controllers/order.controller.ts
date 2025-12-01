import { ExtendedRequest } from '../lib/member';
import { T } from '../lib/types/common';
import { Response } from 'express';
import Errors, { HttpCode } from '../lib/Errors';
import OrderService from '../models/Order.service';
import { OrderInquiry, OrderUpdateInput } from '../lib/types/order';
import { OrderStatus } from '../lib/enum/order.enum';

const orderController: T = {};
const orderService = new OrderService();

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log('createOrder');

    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log('Error:createOrder', err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.getMyOrders = async (
  request: ExtendedRequest,
  response: Response
) => {
  try {
    console.log('getMyOrders');
    const { page, limit, orderStatus } = request.query;
    const inquiry: OrderInquiry = {
      page: Number(page),
      limit: Number(limit),
      orderStatus: orderStatus as OrderStatus,
    };
    const result = await orderService.getMyOrders(request.member, inquiry);

    response.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log('Error:getMyOrders', err);
    if (err instanceof Errors) response.status(err.code).json(err);
    else response.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.updateOrder = async (
  request: ExtendedRequest,
  response: Response
) => {
  try {
    console.log('updateOrder');
    const input: OrderUpdateInput = request.body;
    const result = await orderService.updateOrder(request.member, input);

    response.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log('Error:updateOrder', err);
    if (err instanceof Errors) response.status(err.code).json(err);
    else response.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;

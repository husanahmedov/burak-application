import { T } from '../lib/types/common';
import { Request, Response } from 'express';
import Errors from '../lib/Errors';

const productController: T = {};

productController.getAllProducts = async (
  request: Request,
  response: Response,
) => {
  try {
    console.log('All Products page');
    response.render('products');
  } catch (error) {
    console.log('Error is occurring: ', error);
    if (error instanceof Errors) response.status(error.code).json(error);
    else response.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  request: Request,
  response: Response,
) => {
  try {
    console.log('Create new product page');
  } catch (error) {
    console.log('Error is occurring: ', error);
    if (error instanceof Errors) response.status(error.code).json(error);
    else response.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.updateChosenProduct = async (
  request: Request,
  response: Response,
) => {
  try {
    console.log('Update chosen product page');
  } catch (error) {
    console.log('Error is occurring: ', error);
    if (error instanceof Errors) response.status(error.code).json(error);
    else response.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;

import { T } from '../lib/types/common';
import { Request, Response } from 'express';
import Errors from '../lib/Errors';
import { HttpCode, Message } from '../lib/Errors';
import { ProductInput } from '../lib/types/products';
import { AdminRequest } from '../lib/member';
import productModel from '../schema/Product.model';

const productService = new productModel();

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
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log('createNewProduct');
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path.replace(/\\/g, '/');
    });

    await productService.createNewProduct(data);
    res.send(
      `<script> alert("Successful creation!"); window.location.replace('admin/product/all') </script>`,
    );
  } catch (err) {
    console.log('Error, createNewProduct:', err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/product/all') </script>`,
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log('updateChosenProduct');
    const id = req.params.id;

    const result = await productService.updateChosenProduct(id, req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log('Error, updateChosenProduct:', err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;

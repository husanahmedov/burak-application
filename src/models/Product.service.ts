import Errors, { HttpCode, Message } from '../lib/Errors';
import {
  Product,
  ProductInput,
  ProductInquiry,
  ProductUpdateInput,
} from '../lib/types/products';
import ProductModel from '../schema/Product.model';
import { shapeIntoMongooseObjectId } from '../lib/config';
import { ProductStatus } from '../lib/enum/product.enum';
import { T } from '../lib/types/common';

import { ObjectId } from 'mongoose';
import { ViewInput } from '../lib/types/view';
import { ViewGroup } from '../lib/enum/view.enum';

import ViewService from './View.service';

class ProductService {
  private readonly productModel;
  private readonly viewService;

  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }

  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };

    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, 'i') };
    }

    if (inquiry.productCollection) {
      match.productCollection = inquiry.productCollection;
    }

    const sort: T =
      inquiry.order === 'productPrice'
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };
    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
        { $limit: inquiry.limit * 1 },
      ])
      .exec();

    if (!result.length) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    }
    return result;
  }

  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
      .findOne({ _id: productId, productStatus: ProductStatus.PROCESS })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    if (memberId) {
      const input: ViewInput = {
        memberId: memberId, // who is viewing
        viewRefId: productId, // which product is being viewed
        viewGroup: ViewGroup.PRODUCT, // viewing a product
      };
      const existView = await this.viewService.checkViewExistance(input);
      if (!existView) {
        console.log('Creating new view record for product');
        await this.viewService.insertMemberView(input);

        result = await this.productModel.findOneAndUpdate(
          productId,
          { $inc: { productView: +1 } },
          { new: true }
        );
      }
    }
    return result;
  }

  /** SPA */

  /** SSR */
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error('Error, model:createNewProduct:', err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  }
}

export default ProductService;

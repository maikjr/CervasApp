import { IDiscountsRepository } from "../IDiscountsRepository";
import { Discount } from "../../entities/Discount";
import {DiscountModel} from '../mongoose-models/DiscountModel';

export class MongoDiscountsRepository implements IDiscountsRepository{
  async save(discount: Discount): Promise<void>{
    const {beer, coordinates, price, id} = discount;

    await DiscountModel.create({
      id,
      beer,
      location: {
        type: 'Point',
        coordinates
      },
      price
    });

  }
}

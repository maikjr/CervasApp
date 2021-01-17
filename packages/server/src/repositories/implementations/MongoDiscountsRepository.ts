import { IDiscountsRepository, ISearch } from "../IDiscountsRepository";
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
        coordinates,
      },
      price
    });
  }
  async search(search: ISearch): Promise<Discount[]>{
    const { coordinates, beer } = search;

    const discounts = await DiscountModel.find({
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates,
                },
                $maxDistance: 2000
            }
        }
    })
    .select('beer price')
    .populate({path: 'beer', select: 'name'});

    return discounts;

  }
}

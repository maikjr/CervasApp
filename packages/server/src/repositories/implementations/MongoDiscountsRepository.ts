import { IDiscountsRepository, ISearch, IRelated } from "../IDiscountsRepository";
import { Discount } from "../../entities/Discount";
import {DiscountModel} from '../mongoose-models/DiscountModel';

export class MongoDiscountsRepository implements IDiscountsRepository{
  async save(discount: Discount): Promise<void>{
    const {beer, coordinates, price, id, establishment, address} = discount;
    await DiscountModel.create({
      id,
      beer,
      location: {
        type: 'Point',
        coordinates,
      },
      establishment,
      address,
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
    .select('id beer price establishment address')
    .populate({path: 'beer', select: 'name'});

    return discounts;

  }
  async related(related: IRelated): Promise<Discount[]>{
    const { id } = related;

    const findDiscountById = await DiscountModel.findOne({id}).select('location beer');

    if(!findDiscountById){
      return [];
    }

    const {location: {coordinates}, beer} = findDiscountById;

    const discounts = await DiscountModel.find({
        beer,
        id: {$ne: id},
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
    .select('price establishment address');

    return discounts;

  }
}

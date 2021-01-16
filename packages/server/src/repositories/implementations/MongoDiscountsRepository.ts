import { IDiscountsRepository } from "../IDiscountsRepository";
import { Discount } from "../../entities/Discount";

export class MongoDiscountsRepository implements IDiscountsRepository{
  async save(discount: Discount): Promise<void>{
    console.log(discount);
  }
}

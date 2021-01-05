import {Discount} from '../entities/Discount';

export interface IDiscountsRepository{
  save(discount: Discount): Promise<void>;
}

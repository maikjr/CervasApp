import {Discount} from '../entities/Discount';

export interface ISearch {
  beer?: string;
  coordinates: string[];
}

export interface IDiscountsRepository{
  save(discount: Discount): Promise<void>;
  search(search: ISearch): Promise<Discount[]>;
}

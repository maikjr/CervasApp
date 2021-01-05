import {IDiscountsRepository} from '../../repositories/IDiscountsRepository';
import {ICreateDiscountDTO} from '../../useCases/CreateDiscount/CreateDiscountDTO';
import {Discount} from '../../entities/Discount';

export class CreateDiscountUseCase{

  constructor(private discountsRepository: IDiscountsRepository){}

  async execute(data: ICreateDiscountDTO){

    const discount = new Discount(data);

    await this.discountsRepository.save(discount);

  }

}

import {IDiscountsRepository, ISearch} from '../../repositories/IDiscountsRepository';

export class SearchDiscountUseCase{

  constructor(private discountsRepository: IDiscountsRepository){}

  async execute(search: ISearch){
    return await this.discountsRepository.search(search);
  }

}

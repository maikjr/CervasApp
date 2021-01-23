import {IDiscountsRepository, IRelated} from '../../repositories/IDiscountsRepository';

export class DiscountsRelatedUseCase{

  constructor(private discountsRepository: IDiscountsRepository){}

  async execute(related: IRelated){
    return await this.discountsRepository.related(related);
  }

}

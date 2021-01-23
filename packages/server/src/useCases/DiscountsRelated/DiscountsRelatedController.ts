import {Request, Response} from 'express';
import {DiscountsRelatedUseCase} from './DiscountsRelatedUseCase';

export class DiscountsRelatedController{
  constructor(
    private discountsRelatedUseCase: DiscountsRelatedUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const{id} = request.params;
    try{
      const discounts = await this.discountsRelatedUseCase.execute({
        id,
      });
      return response.status(200).json({discounts});
    }catch(err){
      return response.status(300).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}

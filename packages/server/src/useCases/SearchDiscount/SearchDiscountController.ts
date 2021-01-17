import {Request, Response} from 'express';
import {SearchDiscountUseCase} from './SearchDiscountUseCase';

export class SearchDiscountController{
  constructor(
    private searchDiscountUseCase: SearchDiscountUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const{beer, latitude, longitude} = request.body;
    try{
      const discounts = await this.searchDiscountUseCase.execute({
        beer,
        coordinates: [longitude, latitude],
      });
      return response.status(200).json({discounts});
    }catch(err){
      return response.status(300).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}

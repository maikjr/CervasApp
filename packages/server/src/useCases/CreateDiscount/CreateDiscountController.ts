import {Request, Response} from 'express';
import {CreateDiscountUseCase} from './CreateDiscountUseCase';

export class CreateDiscountController{
  constructor(
    private createDiscountUseCase: CreateDiscountUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const{beer, coordinates, price, establishment, address } = request.body;
    try{
      await this.createDiscountUseCase.execute({
        beer,
        coordinates,
        price,
        establishment,
        address
      });
      return response.status(201).send();
    }catch(err){
      return response.status(300).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}

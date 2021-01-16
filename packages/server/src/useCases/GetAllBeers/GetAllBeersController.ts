import {Request, Response} from 'express';
import {GetAllBeersUseCase} from './GetAllBeersUseCase';

export class GetAllBeersController{
  constructor(
    private getAllBeersUseCase: GetAllBeersUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    try{
      const beers = await this.getAllBeersUseCase.execute();
      return response.status(201).json({beers});
    }catch(err){
      return response.status(300).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}

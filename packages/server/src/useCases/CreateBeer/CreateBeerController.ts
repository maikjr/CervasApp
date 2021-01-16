import {Request, Response} from 'express';
import {CreateBeerUseCase} from './CreateBeerUseCase';

export class CreateBeerController{
  constructor(
    private createBeerUseCase: CreateBeerUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const{name} = request.body;
    try{
      await this.createBeerUseCase.execute({
        name
      });
      return response.status(201).send();
    }catch(err){
      return response.status(300).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}

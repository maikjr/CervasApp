import {IBeerRepository} from '../../repositories/IBeerRepository';
import {ICreateBeerDTO} from './CreateBeerDTO';
import {Beer} from '../../entities/Beer';

export class CreateBeerUseCase{

  constructor(private bersRepository: IBeerRepository){}

  async execute(data: ICreateBeerDTO){

    const beer = new Beer(data);

    await this.bersRepository.save(beer);

  }

}

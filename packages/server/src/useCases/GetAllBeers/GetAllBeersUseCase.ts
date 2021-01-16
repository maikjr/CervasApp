import {IBeerRepository} from '../../repositories/IBeerRepository';

export class GetAllBeersUseCase{

  constructor(private bersRepository: IBeerRepository){}

  async execute(){
    return await this.bersRepository.index();
  }

}

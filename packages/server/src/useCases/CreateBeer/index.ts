import {MongoBeerRepository} from '../../repositories/implementations/MongoBeerRepository';
import {CreateBeerUseCase} from './CreateBeerUseCase';
import {CreateBeerController} from './CreateBeerController';

const mongoBeerRepository = new MongoBeerRepository();

const createBeerUseCase = new CreateBeerUseCase(
  mongoBeerRepository,
)

const createBeerController = new CreateBeerController(
  createBeerUseCase
);

export {createBeerUseCase, createBeerController}

import {MongoBeerRepository} from '../../repositories/implementations/MongoBeerRepository';
import {GetAllBeersUseCase} from './GetAllBeersUseCase';
import {GetAllBeersController} from './GetAllBeersController';

const mongoBeerRepository = new MongoBeerRepository();

const getAllBeersUseCase = new GetAllBeersUseCase(
  mongoBeerRepository,
)

const getAllBeersController = new GetAllBeersController(
  getAllBeersUseCase
);

export {getAllBeersUseCase, getAllBeersController}

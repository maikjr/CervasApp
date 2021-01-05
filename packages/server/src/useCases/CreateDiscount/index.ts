import {MongoDiscountsRepository} from '../../repositories/implementations/MongoDiscountsRepository';
import {CreateDiscountUseCase} from './CreateDiscountUseCase';
import {CreateDiscountController} from './CreateDiscountController';

const mongoDiscountsRepository = new MongoDiscountsRepository();

const createDiscountUseCase = new CreateDiscountUseCase(
  mongoDiscountsRepository,
)

const createDiscountController = new CreateDiscountController(
  createDiscountUseCase
);

export {createDiscountUseCase, createDiscountController}

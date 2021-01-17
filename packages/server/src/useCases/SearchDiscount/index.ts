import {MongoDiscountsRepository} from '../../repositories/implementations/MongoDiscountsRepository';
import {SearchDiscountUseCase} from './SearchDiscountUseCase';
import {SearchDiscountController} from './SearchDiscountController';

const mongoDiscountsRepository = new MongoDiscountsRepository();

const searchDiscountUseCase = new SearchDiscountUseCase(
  mongoDiscountsRepository,
)

const searchDiscountController = new SearchDiscountController(
  searchDiscountUseCase
);

export {searchDiscountUseCase, searchDiscountController}

import {MongoDiscountsRepository} from '../../repositories/implementations/MongoDiscountsRepository';
import {DiscountsRelatedUseCase} from './DiscountsRelatedUseCase';
import {DiscountsRelatedController} from './DiscountsRelatedController';

const mongoDiscountsRepository = new MongoDiscountsRepository();

const discountsRelatedUseCase = new DiscountsRelatedUseCase(
  mongoDiscountsRepository,
)

const discountsRelatedController = new DiscountsRelatedController(
  discountsRelatedUseCase
);

export {discountsRelatedUseCase, discountsRelatedController}

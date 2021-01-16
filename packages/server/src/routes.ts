import {Router } from 'express';
import {createDiscountController} from './useCases/CreateDiscount'
import {createBeerController} from './useCases/CreateBeer'
const router = Router();

router.get('/', (request, response) => {
  return response.status(201).json({message: 'Olá!'});
})

router.post('/discounts', (request, response) => {
  return createDiscountController.handle(request, response);
})

router.post('/beers', (request, response) => {
  return createBeerController.handle(request, response);
})

export {router};

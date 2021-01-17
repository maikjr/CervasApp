import {Router } from 'express';
import {createDiscountController} from './useCases/CreateDiscount'
import {createBeerController} from './useCases/CreateBeer'
import {getAllBeersController} from './useCases/GetAllBeers'
import {searchDiscountController} from './useCases/SearchDiscount'
const router = Router();

router.get('/', (request, response) => {
  return response.status(201).json({message: 'Olá!'});
})

router.post('/search', (request, response) => {
  return searchDiscountController.handle(request, response);
})
router.post('/discounts', (request, response) => {
  return createDiscountController.handle(request, response);
})

router.get('/beers', (request, response) => {
  return getAllBeersController.handle(request, response);
})
router.post('/beers', (request, response) => {
  return createBeerController.handle(request, response);
})

export {router};

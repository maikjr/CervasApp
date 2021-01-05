import {Router } from 'express';
import {createDiscountController} from './useCases/CreateDiscount'
const router = Router();

router.get('/', (request, response) => {
  return response.status(201).json({message: 'Olá!'});
})

router.post('/discounts', (request, response) => {
  return createDiscountController.handle(request, response);
})

export {router};

import { mongoose } from '../../database/mongodb';
import {PointSchema} from './utils/MongoPoint';

const DiscountsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  beer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Beers',
    required: true,
  },
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
  address: {
    type: String,
    required: true,
  },
  establishment: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const DiscountModel = mongoose.model('Discounts', DiscountsSchema);

export {DiscountModel}

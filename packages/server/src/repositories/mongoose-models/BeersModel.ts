import { mongoose } from '../../database/mongodb';

const BeersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const BeerModel = mongoose.model('Beers', BeersSchema);

export {BeerModel}

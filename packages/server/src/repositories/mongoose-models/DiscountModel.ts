import { mongoose } from '../../database/mongodb';

const DiscountsSchema = new mongoose.Schema({
  beer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Beers',
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  location: {
    type: "Point",
    coordinates: [Number],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

DiscountsSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Discounts', DiscountsSchema);

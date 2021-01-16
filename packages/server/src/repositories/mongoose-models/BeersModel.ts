import { mongoose } from '../../database/mongodb';

const BeersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Beers', BeersSchema);

import { mongoose } from '../../../database/mongodb';

const PointSchema = new mongoose.Schema({
  type: {
      type: String,
      enum: ['Point'],
      required: true,
  },
  coordinates: {
      type: [Number],
      required: true
  }
})
export {PointSchema}

import { Schema, model, models } from 'mongoose';

const rentCarDealerSchema = new Schema(
  {
    marque: { type: String, require: true },
    model: { type: String },
    fuel: { type: String, require: true },
    transmission: String,
    type: { type: String, require: true },
    year: String,
    price: Number,
    constructor: String,
    img: [String],
    door: Number,
    foreign_key_dealer: String,
  },
  { timestamps: true }
);

const RENTCARDEALER =
  models.rentcardealers ||
  model('rentcardealers', rentCarDealerSchema);

export default RENTCARDEALER;

import { Schema, model, models } from 'mongoose';

const saleCarDealerSchema = new Schema(
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

const SALECARDEALER =
  models.salecardealers ||
  model('salecardealers', saleCarDealerSchema);

export default SALECARDEALER;

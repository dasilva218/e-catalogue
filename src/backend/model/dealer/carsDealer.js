import { Schema, model, models } from 'mongoose';

const CarDealerSchema = new Schema(
  {
    marque: { type: String, require: true },
    model: { type: String },
    fuel: { type: String, require: true },
    transmission: String,
    service: {
      type: String,
      require: true,
      enum: ['location', 'vente'],
    },
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

const CARDEALER =
  models.carsdealers || model('carsdealers', CarDealerSchema);

export default CARDEALER;

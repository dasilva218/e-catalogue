import { Schema, model, models } from 'mongoose';

const rentCarParticularSchema = new Schema(
  {
    marque: { type: String, require: true },
    model: { type: String },
    fuel: { type: String, require: true },
    transmission: String,
    type: { type: String, require: true },
    year: String,
    city: { type: String, require: true },
    price: Number,
    img: [String],
    door: Number,
    foreign_key_dealer: String,
  },
  { timestamps: true }
);

const RENTCARP =
  models.rentcarparticulars ||
  model('rentcarparticulars', rentCarParticularSchema);

export default RENTCARP;

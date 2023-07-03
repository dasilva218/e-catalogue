import { Schema, model, models } from 'mongoose';

const postVehiculeSchema = new Schema(
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
    owner: { name: String, tel: String },
    door: Number,
    online: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const POSTVEHICULES =
  models.postvehicules || model('postvehicules', postVehiculeSchema);

export default POSTVEHICULES;

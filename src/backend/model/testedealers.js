import { model, models, Schema } from 'mongoose';

const carRentSchema = new Schema(
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
  },
  { timestamps: true }
);

const DealerSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    phone: [String],
    email: { type: String, require: true, unique: true },
    logo: String,
    city: { type: String, require: true },
    district: { type: String, require: true },
    time: { open: String, close: String },
    rent: { type: Boolean, default: false },
    sale: { type: Boolean, default: false },
    rentcar: [carRentSchema],
    salecar: [carRentSchema],
  },
  { timestamps: true }
);

const DEALERS = models.dealers || model('dealers', DealerSchema);

export default DEALERS;

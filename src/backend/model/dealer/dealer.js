import { Schema, model, models } from 'mongoose';

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
  },
  { timestamps: true }
);

const DEALERS = models.dealers || model('dealers', DealerSchema);

export default DEALERS;

import { Schema, model, models } from 'mongoose';

const ParticularSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    phone: [String],
    email: { type: String, require: true, unique: true },
    logo: String,
    city: { type: String, require: true },
  },
  { timestamps: true }
);

const PARTICULARS =
  models.particulars || model('particulars', ParticularSchema);

export default PARTICULARS;

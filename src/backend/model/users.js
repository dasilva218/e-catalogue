import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, require: true },
    password: { type: String, unique: true, require: true },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const USERS = models.users || model('users', UserSchema);

export default USERS;

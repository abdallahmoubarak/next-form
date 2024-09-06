import mongoose, { Schema, model } from "mongoose";
export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new Schema<UserDocument>(
  {
    name: { type: String },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || model<UserDocument>("User", userSchema);
export default User;

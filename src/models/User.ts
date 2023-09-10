import { Model, model, Schema } from "mongoose";

import { User } from "../types/Models.types";

const userSchema = new Schema<User, Model<User>>({
  name: {
    type: String,
    required: true,
    unique: false,
  },
});

export default model("User", userSchema);

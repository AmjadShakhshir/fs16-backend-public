import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      default: "6554c883ab8e8fbcc83c643a",
      ref: "Role",
    },
    logwithGoogle: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", UserSchema);

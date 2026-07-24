import mongoose from "mongoose";
import bcrypt from "bcrypt";

const clientSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },

    village: {
      type: String,
      required: true,
    },

    ward: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
clientSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
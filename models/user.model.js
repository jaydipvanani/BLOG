const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role:{
      type: String,
      default: "user"
    }
  },
);

const user = mongoose.model("userSchema", userSchema);

module.exports = user;

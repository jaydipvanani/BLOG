const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
    trim: true,
  },
  adminEmail: {
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
    type:String,
    default:"admin"
  }
});

const admin = mongoose.model("adminSchema", adminSchema);

module.exports = admin;


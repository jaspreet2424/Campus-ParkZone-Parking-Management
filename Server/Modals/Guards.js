const mongoose = require("mongoose");

const guardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: Number },
  age: { type: Number },
  token : {type : String},
});

const guardCollection = new mongoose.model('guards' , guardSchema);

module.exports = guardCollection;

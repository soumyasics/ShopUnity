const mongoose = require("mongoose");

const wholesaledealerschema = mongoose.Schema({
  dealername: {
    type: String,
    required: true,
  },
  dealerlisence: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  wholesaleregisternumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("wholesaledealers", wholesaledealerschema);

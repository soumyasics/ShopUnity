const mongoose = require("mongoose");

const wholesaledealerschema = mongoose.Schema({

  storeName: {
    type: String,
    required: true,
  },
  dealername: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  districts: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  dealerlisence: {
    type: Object,
    required: true,
  },
  wholesaleregisternumber: {
    type: String,
    required: true,
  },
  dealerlisence: {
    type: Object,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("wholesaledealers", wholesaledealerschema);

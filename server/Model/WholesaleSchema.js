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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  ActiveStatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("wholesaledealers", wholesaledealerschema);

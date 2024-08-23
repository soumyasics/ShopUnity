const mongoose = require("mongoose");

const wholesaleProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  expirydate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productimage: {
    type: Object,
    required: true,

  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  wholesaledealer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaledealers",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("wholesaleProduct", wholesaleProductSchema);

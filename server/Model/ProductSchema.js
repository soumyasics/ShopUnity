const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Product", ProductSchema);

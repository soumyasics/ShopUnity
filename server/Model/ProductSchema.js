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
    type: Number,
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
    type: String,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ShopOwner", shopOwnerSchema);

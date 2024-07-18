const mongoose = require("mongoose");

const WholesaleCartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaleProduct",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  shopowner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopOwner",
    required: true,
  },
});

module.exports = mongoose.model("wholesaleCart", WholesaleCartSchema);

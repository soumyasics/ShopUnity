const mongoose = require("mongoose");

const DeliveryRequestSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaleOrder",
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAgent",
    required: true,
  },
  shopOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopOwner",
    required: true,
  }
});

module.exports = mongoose.model("DeliveryRequest", DeliveryRequestSchema);

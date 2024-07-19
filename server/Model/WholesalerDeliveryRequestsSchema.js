const mongoose = require("mongoose");

const WholesalerDeliveryRequestsSchema = new mongoose.Schema({
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
  wholesaledealer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaledealer",
    required: true,
  }
});

module.exports = mongoose.model("wholesalerDeliveryRequest", WholesalerDeliveryRequestsSchema);

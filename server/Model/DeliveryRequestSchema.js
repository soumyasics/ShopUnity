const mongoose = require("mongoose");

const DeliveryRequestSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAgent",
    required: true,
  }
});

module.exports = mongoose.model("DeliveryRequest", DeliveryRequestSchema);

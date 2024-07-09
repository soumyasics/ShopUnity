const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  orderType: {
    type: String,
    enum: ["reserved", "delivery request"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

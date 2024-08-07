// models/OrderSchema.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  shopowner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopOwner",
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderType: {
    type: String,
    enum: ["reserved", "delivery request"],
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "accepted"],
    default: "pending",
  },
  deliveryStatus: {
    type: String,
    enum: ["pending", "assigned", "accepted", "rejected", "delivered"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

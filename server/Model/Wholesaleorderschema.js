const mongoose = require("mongoose");
const wholesaleproduct = require("./WholesaleProductSchema");

const WholesaleOrderSchema = new mongoose.Schema({
  products: {
    type: [],
    required: true,
  },
  shopownerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopOwner",
  },
  wholesaledealers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaledealers",
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
  deliveryStatus:{
    type: String,
    enum: ["pending","assigned","accepted","rejected","delivered"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("wholesaleOrder", WholesaleOrderSchema);

module.exports = Order;

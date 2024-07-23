const mongoose = require("mongoose");

const ShopownercomplaintSchema = new mongoose.Schema({
  shopownerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopOwner",
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const CustomercomplaintSchema = new mongoose.Schema({
  customerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const WholesalecomplaintSchema = new mongoose.Schema({
  wholesalerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wholesaledealers",
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const DeliveryAgentcomplaintSchema = new mongoose.Schema({
  agentid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAgent",
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

var shopownercomplaintSchema = mongoose.model(
  "ShopownercomplaintSchema",
  ShopownercomplaintSchema
);
var customercomplaintSchema = mongoose.model(
  "CustomercomplaintSchema",
  CustomercomplaintSchema
);
var wholesalecomplaintSchema = mongoose.model(
  "WholesalecomplaintSchema",
  WholesalecomplaintSchema
);
var deliveryAgentcomplaintSchema = mongoose.model(
  "DeliveryAgentcomplaintSchema",
  DeliveryAgentcomplaintSchema
);

module.exports = {
  shopownercomplaintSchema,
  customercomplaintSchema,
  wholesalecomplaintSchema,
  deliveryAgentcomplaintSchema,
};

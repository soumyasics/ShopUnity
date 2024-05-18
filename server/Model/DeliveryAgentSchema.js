const mongoose = require("mongoose");

const deliveryagentschema = mongoose.Schema({
  agentname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  vehicletype: {
    type: String,
    required: true,
  },
  vehiclenumber: {
    type: String,
    required: true,
  },
  drivinglisence: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  deliveryareas: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("deliveryagents", deliveryagentschema);

// Import mongoose and define schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define DeliveryAgent schema
const DeliveryAgentSchema = new Schema({
  name: {
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
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  drivingLicense: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  ActiveStatus: {
    type: Boolean,
    default: true,
  },
});

// Create and export DeliveryAgent model
const DeliveryAgent = mongoose.model("DeliveryAgent", DeliveryAgentSchema);
module.exports = DeliveryAgent;

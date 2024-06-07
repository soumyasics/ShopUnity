const mongoose = require("mongoose");

const shopOwnerSchema = new mongoose.Schema({
  shopname: {
    type: String,
    required: true,
  },
  shopownername: {
    type: String,
    required: true,
  },
  shopownercontact: {
    type: Number,
    required: true,
  },
  shopowneremail: {
    type: String,
    required: true,
  },
  shopowneraddress: {
    type: String,
    required: true,
  },
  shopregistrationnumber: {
    type: String,
  },
  shoplicence: {
    type: String,
    required: true,
  },
  shopownerpassword: {
    type: String,
    required: true,
  },
  shopownerpincode: {
    type: String,
    required: true,
  },
  shopownerdistrict: {
    type: String,
    required: true,
  },
  shopownerconfirmpassword: {
    type: String,
    required: true,
  },
  shopownercity: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("ShopOwner", shopOwnerSchema);

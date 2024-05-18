const mongoose = require("mongoose");

const shopownerschema = mongoose.Schema({
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
    required: true,
  },
  shoplisence: {
    type: String,
    required: true,
  },
  shopownerpassword: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("shopowners", shopownerschema);

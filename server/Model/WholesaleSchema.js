const mongoose = require("mongoose");

const wholesaledealerschema = mongoose.Schema({
  storename:{
    type:String,
    required:true
  },
  dealername: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  districts: {
    type: String,
    required:true,
  },
  city: {
    type: String,
    required:true,
  },
  pincode: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  wholesaleregisternumber: {
    type: String,
    required: true,
  },
  dealerlisence: {
    type: Object,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("wholesaledealers", wholesaledealerschema);

const mongoose = require("mongoose");

const customerschema = mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  customergender:{
    type:String,
    required:true
  },
  customeremail: {
    type: String,
    required: true,
  },
  customercontact: {
    type: Number,
    required: true,
  },
  customerpassword: {
    type: String,
    required: true,
  },
  customercity: {
    type: String,
    required: true,
  },
  customerdistrict: {
    type: String,
    required: true,
  },
  customeraddress: {
    type: String,
    required: true,
  },
  customerpincode: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("customers", customerschema);

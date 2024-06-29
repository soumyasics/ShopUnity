const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    // match: [/^[A-Za-z]+$/, 'Name should contain only alphabets'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['M', 'F', 'Other'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  district: {
    type: String,
    required: [true, 'District is required'],
    enum: [
      "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
      "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
      "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
    ],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  pincode: {
    type: String,
    required: [true, 'Pincode is required'],
    match: [/^\d{6}$/, 'Pincode should be a 6 digit number'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact Number is required'],
    match: [/^\d{10}$/, 'Contact Number should be a 10 digit number'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Email should be valid'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password should contain a special character, a number, a capital and a small letter'],
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

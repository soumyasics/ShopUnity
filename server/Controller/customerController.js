const Customer = require("../Model/CustomerSchema");
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

const customerRegister = async (req, res) => {
  try {
    const {
      name,
      gender,
      email,
      contactNumber,
      password,
      city,
      district,
      address,
      pincode,
      confirmPassword,
    } = req.body;

    // Validate the passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 400,
        msg: "Passwords do not match",
      });
    }

    let customer = new Customer({
      name,
      gender,
      email,
      contactNumber,
      password,
      city,
      district,
      address,
      pincode,
    });

    const result = await customer.save();
    return res.json({
      status: 200,
      message: "Registration Successfully Done",
      data: result,
    });
  } catch (err) {
    console.log(err);

    if (err.code === 11000) {
      return res.status(409).json({
        status: 409,
        msg: "Email Id Already Registered",
      });
    }
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        status: 400,
        msg: "Validation Error",
        errors: messages,
      });
    }
    console.error(err);
    return res.status(500).json({
      status: 500,
      msg: "Registration failed",
    });
  }
};

const customerLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const customer = await Customer.findOne({ email: username });
    console.log(customer);

    if (!customer) {
      return res.status(200).json({ message: "Customer does not exist" });
    }

    const isPasswordValid = customer.password === password;

    if (!isPasswordValid) {
      return res.status(200).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      {
        email: customer.email,
        password: customer.password,
      },
      "secret_key",
      { expiresIn: 86400 }
    );

    return res
      .status(200)
      .json({ message: "Login successful", token, id: customer._id, name: customer.name ,ActiveStatus:customer.ActiveStatus});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const customerforget = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email: email });

    if (!customer) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Update customer password
    customer.password = password;
    await customer.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllCustomers = (req, res) => {
  Customer.find({})
    .then((result) => {
      res.json({
        status: 200,
        message: "find",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "No Customers Fount",
        data: err,
      });
    });
};

const getACustomer = (req, res) => {
  const customerid = req.params.customerid;
  Customer.findById(customerid)
    .then((result) => {
      res.json({
        status: 200,
        message: "find",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "not find",
        data: err,
      });
    });
};

const EditACustomer = (req, res) => {
  const customerid = req.params.customerid;
  
  // Define the update object
  const update = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    password: req.body.password,
    city: req.body.city,
    district: req.body.district,
    address: req.body.address,
    pincode: req.body.pincode,
  };

  // Find the customer by ID and update
  Customer.findByIdAndUpdate(customerid, update, { new: true, runValidators: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Customer not found",
        });
      }
      res.status(200).json({
        status: 200,
        data: result,
      });
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging purposes
      res.status(500).json({
        status: 500,
        message: "Failed to update customer",
        error: err.message,
      });
    });
};
const DeleteACustomer = (req, res) => {
  const customerid = req.params.customerid;
  Customer.findByIdAndDelete(customerid)
    .then((result) => {
      res.json({
        status: 200,
        message: "deleted sucesfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "not deleted",
      });
    });
};

const deActivateCustomer = (req, res) => {
  Customer.findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: false })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Shop owner Inactivated",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

const activatecustomer = (req, res) => {
  Customer.findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: true })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Shop owner Activated",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

module.exports = {
  customerRegister,
  customerLogin,
  getAllCustomers,
  getACustomer,
  EditACustomer,
  DeleteACustomer,
  customerforget,
  deActivateCustomer,
  activatecustomer,
};

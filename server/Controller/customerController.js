const customerSchema = require("../Model/CustomerSchema");
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
  let customer = new customerSchema({
    customername: req.body.customername,
    customergender:req.body.customergender,
    customeremail: req.body.customeremail,
    customercontact: req.body.customercontact,
    customerpassword: req.body.customerpassword,
    customercity: req.body.customercity,
    customerdistrict: req.body.customerdistrict,
    customeraddress: req.body.customeraddress,
    customerpincode: req.body.customerpincode,
  });
  await customer
    .save()
    .then((result) => {
      res.json({
        status: 200,
        message: "Registration Sucessfully Done",
        data: result,
      });
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.json({
          status: 409,
          msg: "Email Id Already Registered",
        });
      } else {
        console.log(err);
        res.json({
          status: 500,
          msg: "registration failed",
        });
      }
    });
};

const customerLogin = async (req, res) => {
  try {
    const { customeremail, customerpassword } = req.body;
    console.log(req.body);
    const customer = await customerSchema.findOne({
      customeremail: customeremail,
    });
    console.log(customer.customerpassword);
    console.log();
    if (customer) {
      if (customer.customerpassword == customerpassword) {
        const token = jwt.sign(
          {
            customeremail: customer.customeremail,
            customerpassword: customer.customerpassword,
          },
          "secret_key",
          { expiresIn: 86400 }
        );
        return res
          .status(200)
          .json({ message: "Login successful", token, id: customer._id });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "Customer does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCustomers = (req, res) => {
  customerSchema
    .find({})
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
  customerSchema
    .findById(customerid)
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
  customerSchema
    .findByIdAndUpdate(customerid, {
      customername: req.body.customername,
      customeremail: req.body.customeremail,
      customercontact: req.body.customercontact,
      customerpassword: req.body.customerpassword,
      customercity: req.body.customercity,
      customerdistrict: req.body.customerdistrict,
      customeraddress: req.body.customeraddress,
      customerpincode: req.body.customerpincode,
    })
    .then((result) => {
      res.json({
        status: 200,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "Failed to Update",
      });
    });
};


const DeleteACustomer = (req, res) => {
  const customerid = req.params.customerid;
  customerSchema.findByIdAndDelete(customerid).then((result) => {
    res.json({
      status: 200,
      message: "deleted sucesfully",
    });
  }).catch((err)=>{
    res.json({
      status:500,
      message:"not deleted"
    })
  })
};

module.exports = {
  customerRegister,
  customerLogin,
  getAllCustomers,
  getACustomer,
  EditACustomer,DeleteACustomer
};

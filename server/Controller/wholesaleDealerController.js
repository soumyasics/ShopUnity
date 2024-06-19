const wholesaledealerschema = require("../Model/WholesaleSchema");

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

const upload = multer({ storage: storage }).single("dealerlisence");
const WholesaleDealerRegister = (req, res) => {
  console.log(req.body);
  const wholesaledealer = new wholesaledealerschema({

    storeName:req.body.storeName,
    dealername:req.body.dealername,
    address: req.body.address,
    districts:req.body.districts,
    city:req.body.city,
    pincode: req.body.pincode,
    contact: req.body.contact,
    email: req.body.email,
    wholesaleregisternumber: req.body.wholesaleregisternumber,
    dealerlisence: req.file,
    password: req.body.password,
  });
  wholesaledealer
    .save()
    .then((result) => {
      res.json({
        status: 200,
        message: "Register successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        message: "please enter valid data",
        data: err,
      });
    });
};

const WholesaleDealerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const wholesaledealer = await wholesaledealerschema.findOne({
      email: email,
    });
    console.log(wholesaledealer.password);
    if (wholesaledealer) {
      if (wholesaledealer.password == password) {
        const token = jwt.sign(
          {
            email: wholesaledealer.email,
            password: wholesaledealer.password,
          },
          "secret_key",
          { expiresIn: 86400 }
        );
        return res
          .status(200)
          .json({ message: "Login successful", token, id: wholesaledealer._id });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "wholesaledealer does not exist" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: error, message: "wholesaledealer does not exist" });
  }
};

const getAllWholesaleDealer = (req, res) => {
  wholesaledealerschema
    .find({})
    .then((result) => {
      res.json({
        status: 200,
        data: result,
        message: "find",
      });
    })
    .catch((err) => {
      res.json({ status: 500, message: "not find", data: err });
    });
};

const getAWholesaledealer = (req, res) => {
  const wholesaledealerid = req.params.wholesaledealerid;
  wholesaledealerschema
    .findById(wholesaledealerid)
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

const EditAWholesaledealer = (req, res) => {
  const wholesaledealerid = req.params.wholesaledealerid;
  wholesaledealerschema
    .findByIdAndUpdate(wholesaledealerid, {
      storename:req.body.storename,
      dealername: req.body.dealername,
      address: req.body.address,
      districts: req.body.districts,
      city: req.body.city,
      pincode: req.body.pincode,
      contact: req.body.contact,
      email: req.body.email,
      wholesaleregisternumber: req.body.wholesaleregisternumber,
      dealerlisence: req.file,
      password: req.body.password 
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

const DeleteAWholesaleDealer = (req, res) => {
  const wholesaledealerid = req.params.wholesaledealerid;
  wholesaledealerschema
    .findByIdAndDelete(wholesaledealerid)
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

const wholesaleforgot = async (req, res) => {
  // console.log(req.body);
  try {
    const wholesaleforgotpswrd = await wholesaledealerschema.findOneAndUpdate(
      { email: req.body.email },
      { password: req.body.password },
      { new: true }
    );
    // console.log(Shopownerforgotpswrd);
    if (wholesaleforgotpswrd) {
      return res.json({
        status: 200,
        msg: "Password updated successfully",
      });
    } else {
      return res.status(404).json({
        status: 404,
        msg: "wholesale Dealer not found",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      msg: "Failed to update password",
      error: err.message,
    });
  }
};


module.exports = {
  WholesaleDealerRegister,
  WholesaleDealerLogin,
  getAllWholesaleDealer,
  getAWholesaledealer,
  EditAWholesaledealer,
  DeleteAWholesaleDealer,wholesaleforgot,
  upload
};

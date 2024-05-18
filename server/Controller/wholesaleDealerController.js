const wholesaledealerschema = require("../Model/WholesaleSchema");

const WholesaleDealerRegister = (req, res) => {
  const wholesaledealer = new wholesaledealerschema({
    dealername: req.body.dealername,
    dealerlisence: req.body.dealerlisence,
    contact: req.body.contact,
    wholesaleregisternumber: req.body.wholesaleregisternumber,
    address: req.body.address,
    pincode: req.body.pincode,
    email: req.body.email,
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
      res.json({
        status: 500,
        message: "pleas enter valid data",
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
          .json({ message: "Login successful", token, id: customer._id });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "wholesaledealer does not exist" });
    }
  } catch (error) {
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
      dealername: req.body.dealername,
      companyname: req.body.companyname,
      lisencenumber: req.body.companyname,
      email: req.body.companyname,
      password: req.body.companyname,
      contact: req.body.contact,
      address: req.body.companyname,
      pincode: req.body.companyname,
      registrationnumber: req.body.registrationnumber,
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

module.exports = {
  WholesaleDealerRegister,
  WholesaleDealerLogin,
  getAllWholesaleDealer,
  getAWholesaledealer,
  EditAWholesaledealer,
  DeleteAWholesaleDealer,
};

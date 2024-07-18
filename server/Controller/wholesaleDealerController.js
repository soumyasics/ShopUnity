const wholesaledealerschema = require("../Model/WholesaleSchema");
const DeliveryRequestSchema=require("../Model/WholesalerDeliveryRequestsSchema")
const Order=require("../Model/Wholesaleorderschema")
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

const WholesaleDealerRegister = (req, res) => {
  // console.log(req.body);
  const wholesaledealer = new wholesaledealerschema({
    storeName: req.body.storename,
    dealername: req.body.dealername,
    address: req.body.address,
    districts: req.body.districts,
    city: req.body.city,
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
    const wholesaledealer = await wholesaledealerschema.findOne({ email });

    if (!wholesaledealer) {
      return res.status(404).json({ message: "Wholesale dealer does not exist" });
    }

    if (wholesaledealer.password !== password) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    if (wholesaledealer.status === "pending") {
      return res.status(403).json({ message: "Your account is pending admin approval", status: "pending" });
    }

    const token = jwt.sign(
      { email: wholesaledealer.email, id: wholesaledealer._id },
      "secret_key",
      { expiresIn: 86400 }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      storeName: wholesaledealer.storeName,
      status: wholesaledealer.status,
      ActiveStatus: wholesaledealer.ActiveStatus,
      id: wholesaledealer._id,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "An error occurred during login" });
  }
};

const getAllAcceptedWholesaleDealer = async (req, res) => {
  try {
    const result = await wholesaledealerschema.find({ status: "accepted" });
    if (result.length === 0) {
      return res.json({
        status: 404,
        message: "No accepted wholesale dealers found",
      });
    }
    res.json({
      status: 200,
      data: result,
      message: "Accepted wholesale dealers retrieved successfully",
    });
  } catch (err) {
    res.json({
      status: 500,
      message: "An error occurred while retrieving accepted wholesale dealers",
      data: err,
    });
  }
};

const getAllWholesaleDealer = async (req, res) => {
  try {
    const result = await wholesaledealerschema.find({ status: "pending" });
    if (result.length === 0) {
      return res.json({
        status: 404,
        message: "No pending wholesale dealers found",
      });
    }
    res.json({
      status: 200,
      data: result,
      message: "Pending wholesale dealers retrieved successfully",
    });
  } catch (err) {
    res.json({
      status: 500,
      message: "An error occurred while retrieving pending wholesale dealers",
      data: err,
    });
  }
};

const getAWholesaledealer = async (req, res) => {
  try {
    const wholesaledealerid = req.params.wholesaledealerid;
    const wholesaledealer = await wholesaledealerschema.findById(wholesaledealerid);

    if (!wholesaledealer) {
      return res.status(404).json({ message: "Wholesale dealer not found" });
    }

    res.status(200).json({
      status: 200,
      message: "Wholesale dealer found",
      data: wholesaledealer,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while retrieving the wholesale dealer",
      data: err,
    });
  }
};

const EditAWholesaledealer = async (req, res) => {
  try {
    // console.log(req.file);
    const wholesaledealerid = req.params.wholesaledealerid;

    const updateData = {
      storeName: req.body.storeName,
      dealername: req.body.dealername,
      address: req.body.address,
      districts: req.body.districts,
      city: req.body.city,
      pincode: req.body.pincode,
      contact: req.body.contact,
      email: req.body.email,
      wholesaleregisternumber: req.body.wholesaleregisternumber,
      password: req.body.password,
    };

    // If a file is uploaded, add it to the update data
    if (req.file) {
      updateData.dealerlisence = req.file; // assuming req.file.path contains the file path
    }

    const result = await wholesaledealerschema.findByIdAndUpdate(
      wholesaledealerid,
      updateData,
      { new: true } // This option returns the updated document
    );

    if (!result) {
      return res.status(404).json({
        status: 404,
        message: "Wholesaler dealer not found",
      });
    }

    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Failed to update",
    });
  }
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

const acceptwholesaledealer = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const wholesale = await wholesaledealerschema.findById(id);
    if (!wholesale) {
      return res.status(404).json({ message: "wholesale not found" });
    }

    wholesale.status = "accepted";
    wholesale.ActiveStatus = true;
    await wholesale.save();
    return res.status(200).json({
      message: "wholesale registration accepted and activated",
      data: wholesale,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on accept wholesale", error });
  }
};

const rejecrWholesaledealer = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }
    const wholesale = await wholesaledealerschema.findById(id);
    if (!wholesale) {
      return res.status(404).json({ message: "shopowner not found" });
    }

    wholesale.status = "rejected";
    await wholesale.save();
    return res
      .status(200)
      .json({ message: "wholesale registration rejected", data: wholesale });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on reject wholesale", error });
  }
};

const deActivatewholesaleById = (req, res) => {
  wholesaledealerschema
    .findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: false })
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

const activatewholesaleById = (req, res) => {
  wholesaledealerschema
    .findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: true })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "wholesaler Activated",
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


const wholesalerassignDeliveryAgent = async (req, res) => {
  console.log(req.body,"o");
  try {
    let request = new DeliveryRequestSchema({
      order: req.body.orderID,
      agent: req.body.agentId,
      wholesaledealer:req.body.wholesaledealerid
    });

    const result = await request.save();
    if (result) {
      const deliveryRequest = await Order.findByIdAndUpdate(
        req.body.orderID,
        { deliveryStatus:'assigned' },
        { new: true }
      );
    }
    return res.json({
      status: 200,
      message: "success",
      data: result,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error });
  }
};


module.exports = {
  WholesaleDealerRegister,
  WholesaleDealerLogin,
  getAllWholesaleDealer,
  getAWholesaledealer,
  EditAWholesaledealer,
  DeleteAWholesaleDealer,
  wholesaleforgot,
  upload,
  rejecrWholesaledealer,
  acceptwholesaledealer,
  deActivatewholesaleById,
  activatewholesaleById,
  getAllAcceptedWholesaleDealer,
  wholesalerassignDeliveryAgent
};

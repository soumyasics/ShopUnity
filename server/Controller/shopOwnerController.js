const shopownerschema = require("../Model/ShopOwnerSchema");
const DeliveryRequestSchema = require("../Model/DeliveryRequestSchema");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const Order = require("../Model/OrderSchema");


// Multer setup for file upload (optional)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("files");

const shopeOwnerRegister = (req, res) => {
  // console.log(req.body);
  // console.log(req.file, "n");

  shopownerschema
    .findOne({ shopowneremail: req.body.shopowneremail })
    .then((existingShopOwner) => {
      if (existingShopOwner) {
        return res.status(400).json({
          message: "Email ID is already used",
        });
      }

      const newShopOwner = new shopownerschema({
        shopname: req.body.shopname,
        shopownername: req.body.shopownername,
        shopownercontact: req.body.shopownercontact,
        shopowneremail: req.body.shopowneremail,
        shopowneraddress: req.body.shopowneraddress,
        shopregistrationnumber: req.body.shopregistrationnumber,
        shoplicence: req.file.originalname,
        shopownerpassword: req.body.shopownerpassword,
        shopownerpincode: req.body.shopownerpincode,
        shopownerdistrict: req.body.shopownerdistrict,
        shopownerconfirmpassword: req.body.shopownerconfirmpassword,
        shopownercity: req.body.shopownercity,
      });

      return newShopOwner.save();
    })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Registered Successfully",
          data: result,
        });
      }
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json({
          message: "Please type valid data",
          error: err,
        });
      }
    });
};

const ShopeOwnerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const shopowner = await shopownerschema.findOne({
      shopowneremail: email,
    });
    // console.log(shopowner.shopownerpassword,"pp");
    // console.log(password,"ppp");
    if (shopowner) {
      if (shopowner.shopownerpassword == password) {
        const token = jwt.sign(
          {
            email: shopowner.shopowneremail,
            password: shopowner.shopownerpassword,
          },
          "secret_key",
          { expiresIn: 86400 }
        );
        return res.status(200).json({
          message: "Login successful",
          token,
          id: shopowner._id,
          shopname: shopowner.shopname,
          status: shopowner.status,
          ActiveStatus: shopowner.ActiveStatus,

        });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "shop owner does not exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: "shop owner does not exist" });
    console.log(error);
  }
};

const getAllShopOwners = (req, res) => {
  shopownerschema
    .find({ status: "accepted" })
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

const getAllPendingShopOwners = (req, res) => {
  shopownerschema
    .find({ status: "pending" })
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

const getResentPendingShopOwners = (req, res) => {
  shopownerschema
    .find({ status: "pending" })
    .sort({ createdAt: -1 }) // Sort by `createdAt` in descending order
    .limit(5) // Limit the results to 5 entries
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

const getAshopowner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  shopownerschema
    .findById(shopownerid)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Shop owner not found",
        });
      }
      res.json({
        status: 200,
        message: "Shop owner found",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve shop owner",
        data: err,
      });
    });
};

const EditAShopOwner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  // console.log(req.files, "j");

  // Check if there's a new file uploaded
  let updateData = {
    shopname: req.body.shopname,
    shopownername: req.body.shopownername,
    shopownercontact: req.body.shopownercontact,
    shopowneremail: req.body.shopowneremail,
    shopowneraddress: req.body.shopowneraddress,
    shopregistrationnumber: req.body.shopregistrationnumber,
    shopownerpincode: req.body.shopownerpincode,
    shopownerdistrict: req.body.shopownerdistrict,
    shopownercity: req.body.shopownercity,
  };

  if (req.file) {
    updateData.shoplicence = req.file.originalname;
  }

  shopownerschema
    .findByIdAndUpdate(shopownerid, updateData, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Shop owner not found",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Shop owner updated successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: 500,
        message: "Failed to update shop owner",
      });
    });
};

const DeleteAShopOwner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  shopownerschema
    .findByIdAndDelete(shopownerid)
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

const Shopownerforgot = async (req, res) => {
  // console.log(req.body);
  try {
    const Shopownerforgotpswrd = await shopownerschema.findOneAndUpdate(
      { shopowneremail: req.body.email },
      { shopownerpassword: req.body.password },
      { new: true }
    );
    // console.log(Shopownerforgotpswrd);
    if (Shopownerforgotpswrd) {
      return res.json({
        status: 200,
        msg: "Password updated successfully",
      });
    } else {
      return res.status(404).json({
        status: 404,
        msg: "Shop owner not found",
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

const acceptShopOwner = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const shopowner = await shopownerschema.findById(id);
    if (!shopowner) {
      return res.status(404).json({ message: "shopowner not found" });
    }

    shopowner.status = "accepted";
    shopowner.ActiveStatus = true;
    await shopowner.save();
    return res.status(200).json({
      message: "shopowner registration accepted and activated",
      data: shopowner,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on accept shopowner", error });
  }
};

const rejectshopowner = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }
    const shopowner = await shopownerschema.findById(id);
    if (!shopowner) {
      return res.status(404).json({ message: "shopowner not found" });
    }

    shopowner.status = "rejected";
    await shopowner.save();
    return res
      .status(200)
      .json({ message: "shopowner registration rejected", data: shopowner });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on reject shopowner", error });
  }
};

const assignDeliveryAgent = async (req, res) => {
  try {
    let request = new DeliveryRequestSchema({
      order: req.body.orderID,
      agent: req.body.agentId,
      shopOwner:req.body.shopownerid
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

// const InactivateShopOwner = async (req, res) => {
//   try {
//     const id = req.params.id;
//     if (!id) {
//       return res.status(400).json({ message: "Id is required" });
//     }

//     const shopowner = await shopownerschema.findById(id);
//     if (!shopowner) {
//       return res.status(404).json({ message: "shopowner not found" });
//     }

//     shopowner.ActiveStatus = "inactive";
//     await shopowner.save();
//     return res
//       .status(200)
//       .json({ message: "inactivated shopowner", data: shopowner });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "server error on accept shopowner", error });
//   }
// };

const deActivateShopOwnerById = (req, res) => {
  shopownerschema
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

const activateShopownerById = (req, res) => {
  shopownerschema
    .findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: true })
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
  upload,
  shopeOwnerRegister,
  ShopeOwnerLogin,
  getAllShopOwners,
  EditAShopOwner,
  getAshopowner,
  DeleteAShopOwner,
  Shopownerforgot,
  acceptShopOwner,
  rejectshopowner,
  getAllPendingShopOwners,
  deActivateShopOwnerById,
  activateShopownerById,
  assignDeliveryAgent,getResentPendingShopOwners
};

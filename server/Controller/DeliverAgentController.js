const deliveryagentschema = require("../Model/DeliveryAgentSchema");
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


const DeliveryAgentRegister = (req, res) => {
  const Agent = new deliveryagentschema({
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    password: req.body.password,
    vehicleType: req.body.vehicleType,
    vehicleNumber: req.body.vehicleNumber,
    drivingLicense:  req.file,
    address: req.body.address,
    district: req.body.district,
    city: req.body.city,
    pincode: req.body.pincode,
  });
  Agent.save()
    .then((response) => {
      res.json({
        status: 200,
        message: "successfully Registered",
        data: response,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "Registration Failed",
      });
    });
};
const DeliveryagentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the delivery agent by email
    const deliveryAgent = await deliveryagentschema.findOne({ email });

    if (deliveryAgent) {
      const isPasswordCorrect = password == deliveryAgent.password;
      if (isPasswordCorrect) {
        // Generate JWT token
        const token = jwt.sign(
          {
            email: deliveryAgent.email,
            id: deliveryAgent._id,
          },
          "secret_key", // Replace with your secret key
          { expiresIn: "1d" } // Token expires in 1 day
        );

        return res
          .status(200)
          .json({
            message: "Login successful",
            token,
            id: deliveryAgent._id,
            status: deliveryAgent.status,
            name:deliveryAgent.name,
            ActiveStatus:deliveryAgent.ActiveStatus
          });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "Delivery agent does not exist" });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: error.message,
      message: "An error occurred during login",
    });
  }
};

const getAllDeliveryAgents = (req, res) => {
  deliveryagentschema
    .find({ status: "pending" })
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
        message: "No delivery agents Fount",
        data: err,
      });
    });
};

const getADeliveryAgent = (req, res) => {
  const deliveryagentid = req.params.deliveryagentid;
  deliveryagentschema
    .findById(deliveryagentid)
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

const EditADeliveryAgent = async(req, res) => {
try {
  console.log(req.file);
  const deliveryagentid = req.params.deliveryagentid;

  const updateData = {
    name: req.body.name,
      email: req.body.email,
      contactNumber: req.body.contactNumber,
      password: req.body.password,
      vehicleType: req.body.vehicleType,
      vehicleNumber: req.body.vehicleNumber,
      // drivingLicense: req.body.drivingLicense,
      address: req.body.address,
      district: req.body.district,
      city: req.body.city,
      pincode: req.body.pincode,
  };

  // If a file is uploaded, add it to the update data
  if (req.file) {
    updateData.drivingLicense = req.file; // assuming req.file.path contains the file path
  }

  const result = await deliveryagentschema.findByIdAndUpdate(
    deliveryagentid,
    updateData,
    { new: true } // This option returns the updated document
  );

  if (!result) {
    return res.status(404).json({
      status: 404,
      message: "deliveryagent dealer not found",
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


const DeleteDeliveryAgent = (req, res) => {
  const deliveryagentid = req.params.deliveryagentid;
  deliveryagentschema
    .findByIdAndDelete(deliveryagentid)
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

const deliveryagentforget = async (req, res) => {
  const { email, password } = req.body;

  try {
    const agent = await deliveryagentschema.findOne({ email: email });

    if (!agent) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Update customer password
    agent.password = password;
    await agent.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const acceptDeliveryagent = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const delivery = await deliveryagentschema.findById(id);
    if (!delivery) {
      return res.status(404).json({ message: "delivery not found" });
    }

    delivery.status = "accepted";
    delivery.ActiveStatus = true;
    await delivery.save();
    return res.status(200).json({
      message: "delivery agent registration accepted and activated",
      data: delivery,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on accept delivery", error });
  }
};

const rejectDeliveryagent = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }
    const delivery = await deliveryagentschema.findById(id);
    if (!delivery) {
      return res.status(404).json({ message: "delivery agent not found" });
    }

    delivery.status = "rejected";
    await delivery.save();
    return res
      .status(200)
      .json({ message: "delivery registration rejected", data: delivery });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error on reject delivery agent", error });
  }
};

const deActivateDeliveryagentById = (req, res) => {
  deliveryagentschema
    .findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: false })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "delivery agent Inactivated",
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

const activateDeliveryagentById = (req, res) => {
  deliveryagentschema
    .findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: true })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "delivery agent Activated",
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

const getAllAcceptedDeliveryAgents = (req, res) => {
  console.log('pp')
  deliveryagentschema
    .find({ status: "accepted" })
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
        message: "No delivery agents Fount",
        data: err,
      });
    });
};

module.exports = {
  upload,
  DeliveryAgentRegister,
  DeliveryagentLogin,
  getAllDeliveryAgents,
  getADeliveryAgent,
  EditADeliveryAgent,
  DeleteDeliveryAgent,
  deliveryagentforget,
  deActivateDeliveryagentById,
  activateDeliveryagentById,
  rejectDeliveryagent,
  acceptDeliveryagent,getAllAcceptedDeliveryAgents
};

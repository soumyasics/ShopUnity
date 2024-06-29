const deliveryagentschema = require("../Model/DeliveryAgentSchema");
const jwt = require("jsonwebtoken");

const DeliveryAgentRegister = (req, res) => {
  const Agent = new deliveryagentschema({
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    password: req.body.password,
    vehicleType: req.body.vehicleType,
    vehicleNumber: req.body.vehicleNumber,
    drivingLicense: req.body.drivingLicense,
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
          .json({ message: "Login successful", token, id: deliveryAgent._id });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "Delivery agent does not exist" });
    }
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({
        error: error.message,
        message: "An error occurred during login",
      });
  }
};

const getAllDeliveryAgents = (req, res) => {
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

const EditADeliveryAgent = (req, res) => {
  const deliveryagentid = req.params.deliveryagentid;
  deliveryagentschema
    .findByIdAndUpdate(deliveryagentid, {
      agentname: req.body.agentname,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
      vehicletype: req.body.vehicletype,
      lisenseNumber: req.body.lisenseNumber,
      deliveryareas: req.body.deliveryareas,
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

module.exports = {
  DeliveryAgentRegister,
  DeliveryagentLogin,
  getAllDeliveryAgents,
  getADeliveryAgent,
  EditADeliveryAgent,
  DeleteDeliveryAgent,
  deliveryagentforget,
};

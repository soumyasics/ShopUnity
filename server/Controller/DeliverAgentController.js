const deliveryagentschema = require("../Model/DeliveryAgentSchema");


const DeliveryAgentRegister = (req, res) => {
  const Agent = new deliveryagentschema({
    agentname: req.body.agentname,
    email: req.body.email,
    contact: req.body.contact,
    password: req.body.password,
    vehicletype: req.body.vehicletype,
    vehiclenumber: req.body.vehiclenumber,
    drivinglisence:req.body.drivinglisence,
    address:req.body.address,
    district:req.body.district,
    city:req.body.city,
    pincode:req.body.pincode,
    deliveryareas: req.body.deliveryareas,
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
    console.log(req.body);
    const deliveryagent = await deliveryagentschema.findOne({
      email: email,
    });
    console.log(deliveryagent.password);
    if (deliveryagent) {
      if (deliveryagent.password == password) {
        const token = jwt.sign(
          {
            remail: deliveryagent.email,
            password: deliveryagent.password,
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
      return res.status(404).json({ message: "delivery agent does not exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: "delivery agent does not exist" });
  }
};

const getAllDeliveryAgents = (req, res) => {
  deliveryagentschema
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
  deliveryagentschema.findByIdAndDelete(deliveryagentid).then((result) => {
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
  DeliveryAgentRegister,
  DeliveryagentLogin,
  getAllDeliveryAgents,
  getADeliveryAgent,
  EditADeliveryAgent,DeleteDeliveryAgent
};

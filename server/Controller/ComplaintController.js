const Complaint = require("../Model/ComplaintSchema");

// Add Customer Complaint

const CustomerAddComplaints = async (req, res) => {
  try {
    const { description } = req.body;
    console.log("req", req.body);
    const newComplaint = new Complaint.customercomplaintSchema({
      description: description,
      customerid: req.params.customerid,
      date: new Date(),
    });
    await newComplaint
      .save()
      .then((data) => {
        res.status(200).json({
          msg: "Complaint send successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: "Data not Send",
          data: err,
        });
      });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

// Add Investor Complaint

const ShopownerAddComplaints = async (req, res) => {
  try {
    const { description } = req.body;
    const newComplaint = new Complaint.shopownercomplaintSchema({
      description,
      shopownerid: req.params.shopownerid,
    });
    await newComplaint
      .save()
      .then((data) => {
        res.status(200).json({
          msg: "Complaint send successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: "Data not Send",
          data: err,
        });
      });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

const WholesaledealerAddComplaints = async (req, res) => {
  try {
    const { description } = req.body;
    const newComplaint = new Complaint.wholesalecomplaintSchema({
      description,
      wholesalerid: req.params.wholesalerid,
    });
    await newComplaint
      .save()
      .then((data) => {
        res.status(200).json({
          msg: "Complaint send successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: "Data not Send",
          data: err,
        });
      });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

// Add Investor Complaint

const deliveryAgentAddComplaints = async (req, res) => {
  try {
    const { description } = req.body;
    const newComplaint = new Complaint.deliveryAgentcomplaintSchema({
      description,
      agentid: req.params.agentid,
    });
    await newComplaint
      .save()
      .then((data) => {
        res.status(200).json({
          msg: "Complaint send successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: "Data not Send",
          data: err,
        });
      });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

// View  shopowner complaint s
const viewShopownerAllComplaint = (req, res) => {
  Complaint.shopownercomplaintSchema
    .find()
    .populate("shopownerid")
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// View customer complaint

const viewCustomerAllComplaint = (req, res) => {
  Complaint.customercomplaintSchema
    .find()
    .populate("customerid")
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// View  shopowner complaint s
const viewWholesaledealerAllComplaint = (req, res) => {
  Complaint.wholesalecomplaintSchema
    .find()
    .populate("wholesalerid")
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// View customer complaint

const viewDeliveryAgentComplaint = (req, res) => {
  Complaint.deliveryAgentcomplaintSchema
    .find()
    .populate("agentid")
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

module.exports = {
  CustomerAddComplaints,
  ShopownerAddComplaints,
  WholesaledealerAddComplaints,
  deliveryAgentAddComplaints,
  viewCustomerAllComplaint,
  viewShopownerAllComplaint,
  viewWholesaledealerAllComplaint,
  viewDeliveryAgentComplaint,
};

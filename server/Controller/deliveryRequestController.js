const DeliveryRequest = require('../Model/DeliveryRequestSchema');
const Order = require('../Model/OrderSchema');
const Product = require('../Model/ProductSchema');
const Customer = require('../Model/CustomerSchema');
const ShopOwner = require('../Model/ShopOwnerSchema');

const getDeliveryRequests = async (req, res) => {
  console.log(req.para);
  
  try {
    const { agentId } = req.params;
    const deliveryRequests = await DeliveryRequest.find({ agent: agentId }).populate('order');
    let response = [];
    console.log(deliveryRequests)

    for (let i in deliveryRequests) {
      let order = deliveryRequests[i].order;
      console.log(order)
      let shopOwnerID = deliveryRequests[i].shopOwner;
      let products = order.products;
      let orderProducts = [];
      for (let j in products) {
        let product = await Product.findById(products[j].pid);
        if (product && String(product.shopOwner) === String(shopOwnerID)) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }
      let customer = await Customer.findById(order.customer);
      let shopOwner = await ShopOwner.findById(shopOwnerID);
      response.push({
        _id: deliveryRequests[i]._id,
        orderProducts: orderProducts,
        customer: customer,
        shopOwner: shopOwner,
        deliveryStatus: order.deliveryStatus
      });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};

const acceptDeliveryRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await DeliveryRequest.findById(requestId).populate('order');

    if (!deliveryRequest) {
      return res.status(404).json({ message: "Delivery request not found" });
    }

    deliveryRequest.deliveryStatus = 'accepted';
    await deliveryRequest.save();

    const order = await Order.findByIdAndUpdate(
      deliveryRequest.order._id,
      { deliveryStatus: 'accepted' },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(deliveryRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const rejectDeliveryRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await DeliveryRequest.findById(requestId).populate('order');

    if (!deliveryRequest) {
      return res.status(404).json({ message: "Delivery request not found" });
    }

    deliveryRequest.deliveryStatus = 'rejected';
    await deliveryRequest.save();

    const order = await Order.findByIdAndUpdate(
      deliveryRequest.order._id,
      { deliveryStatus: 'rejected' },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(deliveryRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deliveryRequestsbyshopowner = async (req, res) => {
  try {
    const { shopid } = req.params;
    const deliveryRequests = await DeliveryRequest.find({ shopOwner: shopid });
    

    res.status(200).json(deliveryRequests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deliverDeliveryRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await DeliveryRequest.findById(requestId).populate('order');

    if (!deliveryRequest) {
      return res.status(404).json({ message: "Delivery request not found" });
    }

    deliveryRequest.deliveryStatus = 'delivered';
    await deliveryRequest.save();

    const order = await Order.findByIdAndUpdate(
      deliveryRequest.order._id,
      { deliveryStatus: 'delivered' },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(deliveryRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getshopownerDeliveryRequests = async (req, res) => {
  console.log(req.body);
  try {
    const { agentId } = req.params;
    const deliveryRequests = await DeliveryRequest.find({ agent: agentId }).populate('order').exec();
    let response = [];

    for (let i = 0; i < deliveryRequests.length; i++) {
      let order = deliveryRequests[i].order;
      let shopowner = deliveryRequests[i].shopowner;
      let products = order.products;
      let orderProducts = [];

      for (let j = 0; j < products.length; j++) {
        let product = await Product.findById(products[j].pid);
        if (product && String(product.shopowner) === String(shopowner)) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }

      let customer = await Customer.findById(order.customer);
      let shopOwner = await ShopOwner.findById(order.shopowner);

      response.push({
        _id: deliveryRequests[i]._id,
        orderProducts: orderProducts,
        shopowner: shopOwner,
        customer: customer, // Changed from Customerid to customer for clarity
        deliveryStatus: order.deliveryStatus,
      });
    }

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { getDeliveryRequests, acceptDeliveryRequest, rejectDeliveryRequest ,deliveryRequestsbyshopowner, deliverDeliveryRequest,getshopownerDeliveryRequests};

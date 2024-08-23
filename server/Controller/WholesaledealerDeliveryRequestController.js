const wholesalerDeliveryRequest = require('../Model/WholesalerDeliveryRequestsSchema');
const Order = require('../Model/Wholesaleorderschema');
const Product = require('../Model/WholesaleProductSchema');
const wholeSaleDealerSchema = require('../Model/WholesaleSchema');
const ShopOwner = require('../Model/ShopOwnerSchema');

const getWholesalerDeliveryRequests = async (req, res) => {
  console.log(req.body);
  try {
    const { agentId } = req.params;
    const deliveryRequests = await wholesalerDeliveryRequest.find({ agent: agentId }).populate('order');
    let response = [];
    for (let i in deliveryRequests) {
      let order = deliveryRequests[i].order;
      let wholesaledealer = deliveryRequests[i].wholesaledealer;
      let products = order.products;
      let orderProducts = [];
      for (let j in products) {
        let product = await Product.findById(products[j].pid);
        if (product && String(product.wholesaledealer) === String(wholesaledealer)) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }
      let shopOwner = await ShopOwner.findById(order.shopownerid);
      let wholesaler = await wholeSaleDealerSchema.findById(wholesaledealer);
      response.push({
        _id: deliveryRequests[i]._id,
        orderProducts: orderProducts,
        wholesaledealer: wholesaler,
        shopOwner: shopOwner,
        deliveryStatus:order.deliveryStatus
      });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const acceptwholesaledealerDeliveryRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await wholesalerDeliveryRequest.findById(requestId).populate('order');

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

const rejectwholesaledealerDeliveryRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await wholesalerDeliveryRequest.findById(requestId).populate('order');

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
const deliveryRequestsbywholesaledealer = async (req, res) => {
  try {
    const { wholesaledealerid } = req.params;
    const deliveryRequests = await wholesalerDeliveryRequest.find({ wholesaledealer: wholesaledealerid });
    

    res.status(200).json(deliveryRequests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deliverDeliveryRequestofwholesaledealer = async (req, res) => {
  try {
    const { requestId } = req.params;

    const deliveryRequest = await wholesalerDeliveryRequest.findById(requestId).populate('order');

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

const getResentWholesalerDeliveryRequests = async (req, res) => {
  console.log(req.body);
  
  try {
    const { agentId } = req.params;
    
    // Find delivery requests, populate the order, sort by creation date, and limit to 5
    const deliveryRequests = await wholesalerDeliveryRequest
      .find({ agent: agentId })
      .populate('order')
      .sort({ createdAt: -1 }) // Sort by `createdAt` in descending order
      .limit(5); // Limit the results to 5 entries

    let response = [];

    for (let i in deliveryRequests) {
      let order = deliveryRequests[i].order;

      // Defensive check: Ensure `order` is not null or undefined
      if (!order) {
        console.log(`Order not found for delivery request: ${deliveryRequests[i]._id}`);
        continue; // Skip this iteration if order is not found
      }

      let wholesaledealer = deliveryRequests[i].wholesaledealer;
      let products = order.products || []; // Default to empty array if products is null/undefined
      let orderProducts = [];

      for (let j in products) {
        let product = await Product.findById(products[j].pid);

        // Ensure product and wholesaledealer fields are not null before accessing
        if (product && String(product.wholesaledealer) === String(wholesaledealer)) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }

      let shopOwner = await ShopOwner.findById(order.shopownerid);
      let wholesaler = await wholeSaleDealerSchema.findById(wholesaledealer);

      response.push({
        _id: deliveryRequests[i]._id,
        orderProducts: orderProducts,
        wholesaledealer: wholesaler,
        shopOwner: shopOwner,
        deliveryStatus: order.deliveryStatus,
      });
    }

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getWholesalerDeliveryRequests, acceptwholesaledealerDeliveryRequest, rejectwholesaledealerDeliveryRequest ,deliveryRequestsbywholesaledealer, deliverDeliveryRequestofwholesaledealer,getResentWholesalerDeliveryRequests};

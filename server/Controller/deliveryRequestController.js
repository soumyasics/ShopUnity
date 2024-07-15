const DeliveryRequest = require("../Model/DeliveryRequestSchema");
const Order = require("../Model/OrderSchema");
const DeliveryAgent = require("../Model/DeliveryAgentSchema");
const Product = require("../Model/ProductSchema");
const Customer = require("../Model/CustomerSchema");
const shopownerschema = require("../Model/ShopOwnerSchema");



// Get all delivery requests for an agent
const getDeliveryRequests = async (req, res) => {
  try {
    const { agentId } = req.params;
    const deliveryRequests = await DeliveryRequest.find({ agent: agentId }).populate("order");
    var response = [];
    for (var i in deliveryRequests) {
        var order = deliveryRequests[i].order;
        var shopOwnerID = deliveryRequests[i].shopOwner;
        var products = order.products;
        var orderProducts = [];
        for (var j in products) {
            var product = await Product.findById(products[j].pid);

            if (product && toString(product.shopOwner) == toString(shopOwnerID)) {
              orderProducts.push({
                purchasedQuantity: products[j].quantity,
                productData: product,
              });
            }
        }
        var customer = await Customer.findById(order.customer);
        var shopOwner = await shopownerschema.findById(shopOwnerID);
        response.push({
            orderProducts: orderProducts,
            customer: customer,
            shopOwner: shopOwner,
            status: deliveryRequests[i].status,
            deliveryStatus: deliveryRequests[i].deliveryStatus
        })
    }

    res.status(200).json(response);
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

// Accept or reject delivery request
const updateRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body; // status can be 'accepted' or 'rejected'

    const deliveryRequest = await DeliveryRequest.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );

    if (!deliveryRequest) {
      return res.status(404).json({ message: "Delivery request not found" });
    }

    res.status(200).json(deliveryRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update delivery status
const updateDeliveryStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { deliveryStatus } = req.body;

    const deliveryRequest = await DeliveryRequest.findByIdAndUpdate(
      requestId,
      { deliveryStatus },
      { new: true }
    );

    if (!deliveryRequest) {
      return res.status(404).json({ message: "Delivery request not found" });
    }

    res.status(200).json(deliveryRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports={getDeliveryRequests,updateRequestStatus,updateDeliveryStatus,deliveryRequestsbyshopowner}
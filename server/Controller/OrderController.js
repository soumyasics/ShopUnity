const Order = require("../Model/OrderSchema");
const Product = require("../Model/ProductSchema");
const Customer = require("../Model/CustomerSchema");
const Cart = require("../Model/CartSchema");

const placeOrder = async (req, res) => {
  const { productId, customerId, paymentStatus, totalAmount, orderType, cid ,deliveryStatus} =
    req.body;

  try {
    // Create order
    const order = new Order({
      products: productId,
      customer: customerId,
      paymentStatus,
      totalAmount,
      orderType,
      deliveryStatus
    });

    const savedOrder = await order.save();

    for (var i in cid) {
      var cartid = cid[i];
      const deletedCart = await Cart.findByIdAndDelete(cartid);
    }

    res.status(201).json({
      message: "Order placed successfully",
      data: savedOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to place order",
      error: err.message,
    });
  }
};

const viewOrdersByShopOwner = async (req, res) => {
  const shopOwnerId = req.params.shopOwnerId;

  try {
    var shopOwnerOrders = [];
    const orders = await Order.find().populate("customer");
    for (var i in orders) {
      var order = orders[i];
      var products = order.products;
      var orderProducts = [];
      for (var j in products) {
        var product = await Product.findById(products[j].pid);
        if (product && product.shopOwner == shopOwnerId) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }
      if (orderProducts.length > 0) {
        shopOwnerOrders.push({
          orderProducts: orderProducts,
          order: order,
        });
      }
    }

    res.json({ data: shopOwnerOrders });

  } catch (err) {
    console.log("Error retrieving orders:", err.message);
    res.status(500).json({
      status: 500,
      message: "Failed to retrieve orders",
      error: err.message,
    });
  }
};

const acceptOrderRequest = async (req, res) => {
  try {
    const id = req.params.orderid;
    if (!id) {
      return res.status(400).json({ message: "Order ID is required" });
    }

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if the order is already accepted or not
    if (order.orderStatus === "accepted") {
      return res.status(400).json({ message: "Order is already accepted" });
    }

    order.orderStatus = "accepted";
    await order.save();

    return res.status(200).json({
      message: "Order accepted",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error on updating order status",
      error: error.message,
    });
  }
};

const viewOrdersByCustomerId = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const orders = await Order.find({ customer: customerId }).populate({
      path: 'products.pid',
      model: 'Product',
    });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this customer" });
    }

    const customerOrders = orders.map(order => {
      const orderProducts = order.products.map(product => ({
        purchasedQuantity: product.quantity,
        productData: product.pid, // This should be the populated Product object
      }));
      return {
        orderProducts,
        order,
      };
    });

    res.json({
      message: "Orders retrieved successfully",
      data: customerOrders,
    });
  } catch (err) {
    console.log("Error retrieving orders:", err.message);
    res.status(500).json({
      status: 500,
      message: "Failed to retrieve orders",
      error: err.message,
    });
  }
};


module.exports = {
  placeOrder,
  viewOrdersByShopOwner,acceptOrderRequest,viewOrdersByCustomerId
};

const Order =require("../Model/OrderSchema")
const Product = require("../Model/ProductSchema");
const Customer = require("../Model/CustomerSchema");

const placeOrder = async (req, res) => {
  const { productId, customerId, paymentStatus, totalAmount, orderType } = req.body;

  try {
    // Find product and customer details
    const product = await Product.findById(productId);
    const customer = await Customer.findById(customerId);

    if (!product || !customer) {
      return res.status(404).json({
        message: "Product or Customer not found"
      });
    }

    // Create order
    const order = new Order({
      product: productId,
      customer: customerId,
      paymentStatus,
      totalAmount,
      orderType
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: "Order placed successfully",
      data: savedOrder
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to place order",
      error: err.message
    });
  }
};

module.exports = {
  placeOrder
};

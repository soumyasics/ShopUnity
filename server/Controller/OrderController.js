const Order = require("../Model/OrderSchema");
const Product = require("../Model/ProductSchema");
const Customer = require("../Model/CustomerSchema");
const Cart = require("../Model/CartSchema");


const placeOrder = async (req, res) => {
  const { productId, customerId, paymentStatus, totalAmount, orderType, cid } =
    req.body;

  try {

    // Create order
    const order = new Order({
      products: productId,
      customer: customerId,
      paymentStatus,
      totalAmount,
      orderType,
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
    // Find products by shop owner
    const products = await Product.find({ shopOwner: shopOwnerId });

    if (products.length === 0) {
      return res.status(404).json({
        message: "No products found for this shop owner",
      });
    }

    // Extract product IDs
    const productIds = products.map((product) => product._id);

    // Find orders for these products
    const orders = await Order.find({ product: { $in: productIds } })
      .populate("product")
      .populate("customer");

    res.status(200).json({
      status: 200,
      data: orders,
      message: "Orders retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to retrieve orders",
      error: err.message,
    });
  }
};
module.exports = {
  placeOrder,
  viewOrdersByShopOwner,
};

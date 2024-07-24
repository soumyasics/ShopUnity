const wholesaleOrderModel = require("../Model/Wholesaleorderschema");
const wholesaleProduct = require("../Model/WholesaleProductSchema");
const ShopOwner = require("../Model/ShopOwnerSchema");
const wholesaleCart = require("../Model/WholesaleCartSchema");

const shopownerplaceOrder = async (req, res) => {
  console.log(req.body);
  const {
    productId,
    shopownerid,
    paymentStatus,
    totalAmount,
    orderType,
    sid,
    deliveryStatus,
  } = req.body;

  try {
    // Create order
    const newWholesaleOrder = new wholesaleOrderModel({
      products: productId,
      shopownerid: shopownerid,
      paymentStatus,
      totalAmount,
      orderType,
      deliveryStatus,
    });

    const savedOrder = await newWholesaleOrder.save();

    for (let i in sid) {
      let cartid = sid[i];
      await wholesaleCart.findByIdAndDelete(cartid);
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

const viewOrdersBywholesaledealer = async (req, res) => {
  console.log(req.params.wholesaledealerid,"viewOrdersBywholesaledealer");
  const wholesaleDealer = req.params.wholesaledealerid;

  try {
    let wholesaleOrders = [];
    const orders = await wholesaleOrderModel.find().populate("shopownerid");
    for (let i in orders) {
      let order = orders[i];
      let products = order.products;
      let orderProducts = [];
      for (let j in products) {
        let product = await wholesaleProduct.findById(products[j].pid);
        if (product && product.wholesaledealer == wholesaleDealer) {
          orderProducts.push({
            purchasedQuantity: products[j].quantity,
            productData: product,
          });
        }
      }
      if (orderProducts.length > 0) {
        wholesaleOrders.push({
          orderProducts: orderProducts,
          order: order,
          shopowner:order.shopownerid
        });
      }
    }

    res.json({ data: wholesaleOrders });
  } catch (err) {
    console.log("Error retrieving orders:", err.message);
    res.status(500).json({
      status: 500,
      message: "Failed to retrieve orders",
      error: err.message,
    });
  }
};

const wholesaleacceptOrderRequest = async (req, res) => {
  try {
    const id = req.params.orderid;
    if (!id) {
      return res.status(400).json({ message: "Order ID is required" });
    }

    const order = await wholesaleOrderModel.findById(id);
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

const viewOrdersByshopowner = async (req, res) => {
  const shopowner = req.params.shopowner;

  try {
    const orders = await wholesaleOrderModel
      .find({ shopownerid: shopowner })
      .populate({
        path: "products.pid",
        model: "WholesaleProduct",
      });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this shopowner" });
    }

    const customerOrders = orders.map((order) => {
      const orderProducts = order.products.map((product) => ({
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

const viewAllShopownerOrders = (req, res) => {
  wholesaleOrderModel.find()
    .then(orders => {
      res.status(200).json({
        status: 200,
        data: orders
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve orders",
        error: err.message
      });
    });
};


module.exports = {
  shopownerplaceOrder,
  viewOrdersBywholesaledealer,
  wholesaleacceptOrderRequest,
  viewOrdersByshopowner,viewAllShopownerOrders
};

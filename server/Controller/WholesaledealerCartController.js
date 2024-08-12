const wholesaleCart = require("../Model/WholesaleCartSchema");
const Product = require("../Model/WholesaleProductSchema");

const productaddtocart = async (req, response) => {
  console.log(req.body);
  const cart = {
    product: req.body.productId    ,
    shopowner: req.body.shopowner,
  };
  console.log(cart);

  var productData = await Product.findById(cart.product);

  var res = {
    message:'success'
  };

  const exobj = await wholesaleCart.find(cart);
  console.log(exobj);

  if (exobj.length > 0) {
    cart.quantity = req.body.quantity + exobj[0].quantity;
    if (cart.quantity > productData.quantity){
      res = {
        status: 200,
        message: `Out of stock, only ${productData.quantity} left`,
      }
    } else {
        wholesaleCart.findByIdAndUpdate(exobj[0]._id, cart, {
        new: true,
        runValidators: true,
      })
        .then((c) => {
          res = {
            status: 200,
            data: c,
            message: "Product added to cart",
          };
        })
        .catch((err) => {
          res = {
            status: 500,
            message: "Failed to retrieve product",
            error: err.message,
          };
        });
    }
  } else {
    cart.quantity = req.body.quantity;
    if (cart.quantity > productData.quantity){
      res = {
        status: 200,
        message: `Out of stock, only ${productData.quantity} left`,
      }
    } else {
      const cartobj = new wholesaleCart(cart);

    cartobj
      .save()
      .then((result) => {
        res = {
          status: 201,
          data: result,
          message: "Product added to cart",
        };
      })
      .catch((err) => {
        res = {
          status: 500,
          message: "Failed to add product",
          error: err.message,
        };
      });
    }
  }
  response.json(res);
};


const viewproductCartItems = async (req, res) => {
    const shopowner = req.params.shopowner;
  
    try {
      const cartItems = await wholesaleCart.find({ shopowner: shopowner }).populate('product');
  
      res.status(200).json({
        status: 200,
        data: cartItems,
        message: "Cart items retrieved successfully",
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve cart items",
        error: err.message,
      });
    }
  };

const productdeleteFromCart = async (req, res) => {
  const cartQuery = {
    product: req.body.productId,
    shopowner: req.body.shopowner,
  };

  try {
    const exobj = await wholesaleCart.find(cartQuery);

    if (exobj.length > 0) {
      await wholesaleCart.findByIdAndDelete(exobj[0]._id);

      res.status(200).json({
        message: "Product removed from cart",
      });
    } else {
      res.status(404).json({
        message: "Product not found in cart",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed to remove product",
      error: err.message,
    });
  }
};

module.exports = {
  productaddtocart,productdeleteFromCart,viewproductCartItems
};

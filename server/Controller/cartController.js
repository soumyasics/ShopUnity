const Cart = require("../Model/CartSchema");

const addtocart =async (req, res) => {
  const cart = {
    product: req.body.productId,
    customer: req.body.customerId,
  };

  var res;

  const exobj = await Cart.find(cart);
//   console.log(exobj)
  if (exobj.length>0) {
    cart.quantity= req.body.quantity + exobj[0].quantity;

    Cart.findByIdAndUpdate(exobj[0]._id, cart, { new: true, runValidators: true })
    .then(c => {
      res={
        status: 200,
        data: c,
        message: "Product added to cart"
      };
    })
    .catch(err => {
      res = {
        status: 500,
        message: "Failed to retrieve product",
        error: err.message
      };
    });
} else {
cart.quantity= req.body.quantity;

const cartobj = new Cart(cart);

cartobj
  .save()
  .then((result) => {
    res={
      status: 201,
      data: result,
      message: "Product added to cart",
    };
  })
  .catch((err) => {
    res={
      status: 500,
      message: "Failed to add product",
      error: err.message,
    };
  });
}
res.json(cart)
  
};

module.exports = {
  addtocart
};

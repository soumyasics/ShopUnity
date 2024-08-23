const wholesaleProduct = require("../Model/WholesaleProductSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("productimage");

const addProductByWholesaler = (req, res) => {
  // console.log(req.body);
  const productData = {
    category: req.body.category,
    productname: req.body.productname,
    brand: req.body.brand,
    expirydate: req.body.expirydate,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
    productimage: req.file,
    wholesaledealer: req.body.wholesaledealer,
    date:new Date()
  };

  const newwholesaleProduct = new wholesaleProduct(productData);

  newwholesaleProduct.save()
    .then(result => {
      res.status(201).json({
        status: 201,
        data: result,
        message: "Product added successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to add product",
        error: err.message
      });
    });
};

// Edit product by ID
const editProductBywholesalerId = (req, res) => {
  const wholesaleproductId = req.params.wholesaleproductId;
  const data = req.body;
  data.quantity = parseInt(data.quantity)
  var update={};
  for (key in data) {
    if (data[key] && data[key] != 'undefined') {
      update[key] = data[key]
    }
  }
  // console.log(update)
  // console.log(req.file)

  if (req.file) {
    update.productimage = req.file; // Save new file path if file exists
  }

  wholesaleProduct.findByIdAndUpdate(wholesaleproductId, update, { new: true, runValidators: true })
    .then(result => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Product not found"
        });
      }
      res.status(200).json({
        status: 200,
        data: result,
        message: "Product updated successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to update product",
        error: err.message
      });
    });
};

// Other functions remain unchanged
const viewAllwholesaleProducts = (req, res) => {
    wholesaleProduct.find().populate("wholesaledealer")
    .then(products => {
      res.status(200).json({
        status: 200,
        data: products
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve products",
        error: err.message
      });
    });
};

const viewAllwholesaleProductsbywholesaler = (req, res) => {
  console.log(req.params.wholesalerid);
  wholesaleProduct.find({ wholesaledealer: req.params.wholesalerid })
    .then(products => {
      res.status(200).json({
        status: 200,
        data: products
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve products",
        error: err.message
      });
    });
};

const viewProductBywholesalerId = (req, res) => {
  const productId = req.params.productId;

  wholesaleProduct.findById(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found"
        });
      }
      res.status(200).json({
        status: 200,
        data: product
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve product",
        error: err.message
      });
    });
};

const deleteProductBywholesalerId = (req, res) => {
  const wholesaleproductId = req.params.wholesaleproductId;

  wholesaleProduct.findByIdAndDelete(wholesaleproductId)
    .then(result => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Product not found"
        });
      }
      res.status(200).json({
        status: 200,
        message: "Product deleted successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Failed to delete product",
        error: err.message
      });
    });
};

const getTodayAddedwholesalerProducts = (req, res) => {
  const { wholesalerId } = req.body; // Assuming wholesalerId is sent in the request body

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  wholesaleProduct.find({
    date: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
    wholesalerId: wholesalerId, // Filter by wholesalerId
  })
    .then((products) => {
      res.status(200).json({
        status: 200,
        data: products,
        message: "Today's added products fetched successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to fetch today's added products",
        error: err.message,
      });
    });
};

const getTotalwholesalerProductQuantity = (req, res) => {
  const wholesalerId=(req.params.wholesalerid);
  

  wholesaleProduct.find({ wholesaledealer: wholesalerId }) // Filter by wholesaledealer
    .then((products) => {
      const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
      res.status(200).json({
        status: 200,
        totalQuantity: totalQuantity,
        message: "Total product quantity fetched successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to fetch total product quantity",
        error: err.message,
      });
    });
};



module.exports = {
  upload,
  addProductByWholesaler,
  viewAllwholesaleProducts,
  editProductBywholesalerId,
  viewProductBywholesalerId,
  deleteProductBywholesalerId,
  getTodayAddedwholesalerProducts,
  getTotalwholesalerProductQuantity
  ,viewAllwholesaleProductsbywholesaler
};
const Product = require("../Model/ProductSchema");
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

const addProduct = (req, res) => {
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
    shopOwner: req.body.shopOwner,
    date:new Date()
  };

  const newProduct = new Product(productData);

  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        status: 201,
        data: result,
        message: "Product added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to add product",
        error: err.message,
      });
    });
};

// Edit product by ID
const editProductById = (req, res) => {
  const productId = req.params.productId;
  const data = req.body;
  data.quantity = parseInt(data.quantity);
  var update = {};
  for (key in data) {
    if (data[key] && data[key] != "undefined") {
      update[key] = data[key];
    }
  }
  // console.log(update)
  // console.log(req.file)

  if (req.file) {
    update.productimage = req.file; // Save new file path if file exists
  }

  Product.findByIdAndUpdate(productId, update, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
      res.status(200).json({
        status: 200,
        data: result,
        message: "Product updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to update product",
        error: err.message,
      });
    });
};

const getTodayAddedProducts = (req, res) => {
  const shopownerid = req.body.shopownerid; 
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  Product.find({
    date: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
    shopOwner: shopownerid, // Filter by wholesalerId
  })
    .then((products) => {
      const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
      res.status(200).json({
        status: 200,
        data: products,
        totalQuantity: totalQuantity,
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



// Other functions remain unchanged
const viewAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({
        status: 200,
        data: products,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve products",
        error: err.message,
      });
    });
};



const viewProductById = (req, res) => {
  const productId = req.params.productId;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
      res.status(200).json({
        status: 200,
        data: product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve product",
        error: err.message,
      });
    });
};

const deleteProductById = (req, res) => {
  const productId = req.params.productId;

  Product.findByIdAndDelete(productId)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Product deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to delete product",
        error: err.message,
      });
    });
};
const getTotalProductQuantity = (req, res) => {
  const shopownerid = req.body.shopownerid; 

  Product.find({
    shopownerid: shopownerid, 
  })
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
  addProduct,
  viewAllProducts,
  editProductById,
  viewProductById,
  deleteProductById,getTodayAddedProducts,getTotalProductQuantity
};
